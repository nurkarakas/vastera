import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
  return files;
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || '',
    publishedAt: data.publishedAt || data.date,
    summary: data.summary || data.description || '',
    image: data.image || '',
    images: data.images || [],
    tag: data.tag || data.category || '',
    team: data.team || [],
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const filePath = path.join(dir, file);
    const fileData = readMDXFile(filePath);
    
    if (!fileData) return null;

    const { metadata, content } = fileData;
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  }).filter(Boolean);
}

function getPosts(customPath: string[]) {
  const normalizedPath = customPath.map(p => p === '[locale]' ? 'en' : p);
  const postsDir = path.join(process.cwd(), 'src', 'app', '[locale]', 'blog', 'posts', normalizedPath[normalizedPath.length - 1]);
  return getMDXData(postsDir);
}

function getWorkProjects(customPath: string[]) {
  const normalizedPath = customPath.map(p => p === '[locale]' ? 'en' : p);
  const projectsDir = path.join(process.cwd(), 'src', 'app', '[locale]', 'work', 'projects', normalizedPath[normalizedPath.length - 1]);
  return getMDXData(projectsDir);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type, locale } = req.query;

  try {
    if (type === 'posts') {
      const posts = getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale as string]);
      return res.status(200).json(posts);
    }
    
    if (type === 'projects') {
      const projects = getWorkProjects(['src', 'app', '[locale]', 'work', 'projects', locale as string]);
      return res.status(200).json(projects);
    }

    return res.status(400).json({ error: 'Invalid type parameter' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
