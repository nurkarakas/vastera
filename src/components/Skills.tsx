"use client";

import React from "react";
import {
  Flex,
  Text,
  Heading,
  Grid,
  RevealFx,
  Icon,
} from "@/once-ui/components";

interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

interface SkillsProps {
  skills: Skill[];
  locale: string;
}

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Flex
      direction="column"
      gap="s"
      padding="m"
      style={{
        backgroundColor: "var(--background-surface)",
        borderRadius: "var(--border-radius-m)",
        border: "1px solid var(--border-subtle)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-strong)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Flex direction="column">
        <Flex gap="xs" alignItems="center">
          {skill.icon && (
            <Icon
              name={skill.icon}
              size="m"
              style={{
                color: "var(--accent)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          )}
          <Text variant="heading-default-s" weight="strong">
            {skill.name}
          </Text>
        </Flex>
      </Flex>
      <Flex gap="xs">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "12px",
              height: "4px",
              borderRadius: "2px",
              backgroundColor:
                index < skill.level ? "var(--accent)" : "var(--neutral-weak)",
              transition: "background-color 0.2s ease",
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export const Skills: React.FC<SkillsProps> = ({ skills, locale }) => {
  return (
    <RevealFx translateY="20" delay={0.4}>
      <Flex fillWidth direction="column" gap="l">
        <Flex direction="column" gap="m" alignItems="center">
          <Heading
            as="h2"
            variant="display-strong-xs"
            wrap="balance"
            style={{ textAlign: "center", fontSize: "2.5rem" }}
          >
            {locale === "tr"
              ? "Yeteneklerim"
              : locale === "id"
              ? "Keahlian Saya"
              : "My Skills"}
          </Heading>
        </Flex>

        <Grid
          columns="repeat(auto-fit, minmax(280px, 1fr))"
          tabletColumns="2col"
          mobileColumns="1col"
          fillWidth
          gap="m"
        >
          {skills.map((skill, index) => (
            <RevealFx key={skill.name} translateY="8" delay={0.6 + index * 0.1}>
              <SkillItem skill={skill} />
            </RevealFx>
          ))}
        </Grid>
      </Flex>
    </RevealFx>
  );
};
