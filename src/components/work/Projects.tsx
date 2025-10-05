"use client";

import { Flex, Grid } from "@/once-ui/components";
import { useState, useEffect } from "react";

import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  locale: string;
  columns?: string;
  thumbnail?: boolean;
}

interface Project {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    team?: Array<{ avatar: string }>;
  };
  slug: string;
  content: string;
}

export function Projects({
  range,
  locale,
  columns = "1",
  thumbnail = false,
}: ProjectsProps) {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `/api/posts?type=projects&locale=${locale}`
        );
        const data = await response.json();
        setAllProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setAllProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [locale]);

  if (loading) {
    return (
      <Flex
        fillWidth
        gap="xl"
        marginBottom="40"
        paddingX="l"
        direction="column"
        align="center"
      >
        <div>Loading projects...</div>
      </Flex>
    );
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid
      columns={`repeat(${columns}, 1fr)`}
      tabletColumns={
        columns === "4" ? "2col" : columns === "3" ? "2col" : "1col"
      }
      mobileColumns="1col"
      fillWidth
      marginBottom="40"
      gap="m"
    >
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
        />
      ))}
    </Grid>
  );
}
