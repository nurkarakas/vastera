"use client";

import { Flex } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { work } from "@/app/resources/content";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.scss";
import { FloatingParticles } from "./FloatingParticles";

export function ProjectsDisplay() {
  const { projects } = work;
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse takibi efekti
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <Flex
      fillWidth
      marginBottom="40"
      paddingX="l"
      direction="column"
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <FloatingParticles
        count={600}
        speed={0.25}
        shape="star"
        parentRef={containerRef}
      />

      {/* Mouse takibi efekti */}
      <div
        className={styles.animatedCircle}
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
        }}
      />

      <Flex fillWidth direction="column" gap="xl">
        {projects.map((project, index) => (
          <Link
            href={`/${locale}/work/projects/${project.title
              .toLowerCase()
              .replace(/ /g, "-")}`}
            key={index}
            style={{
              textDecoration: "none",
              width: "100%",
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <Flex
              className={styles.projectCardWrapper}
              style={{
                width: "95%",
                maxWidth: "1100px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                icon={project.icon}
                features={project.features}
                reversed={index % 2 === 0}
              />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
