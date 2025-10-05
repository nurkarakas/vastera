"use client";

import { Grid } from "@/once-ui/components";
import { useState, useEffect } from "react";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  locale: string;
  thumbnail?: boolean;
}

interface BlogPost {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
  };
  slug: string;
  content: string;
}

export function Posts({
  range,
  columns = "1",
  locale = "en",
  thumbnail = false,
}: PostsProps) {
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/posts?type=posts&locale=${locale}`);
        const data = await response.json();
        setAllBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setAllBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [locale]);

  if (loading) {
    return (
      <Grid
        columns={`repeat(${columns}, 1fr)`}
        mobileColumns="1col"
        fillWidth
        marginBottom="40"
        gap="m"
      >
        <div>Loading blog posts...</div>
      </Grid>
    );
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={`repeat(${columns}, 1fr)`}
          mobileColumns="1col"
          fillWidth
          marginBottom="40"
          gap="m"
        >
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  );
}
