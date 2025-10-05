"use client";

import React from "react";
import { AnimatedTechIcon } from "@/components";
import styles from "./TechnicalSkills.module.scss";

interface SkillItem {
  name: string;
  icon: string;
  label: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

interface TechnicalSkillsProps {
  categories: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  categories,
}) => {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <div className={styles.categoryHeader}>
            <AnimatedTechIcon name={category.icon} size="xl" />
            <h3>{category.title}</h3>
          </div>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, skillIndex) => (
              <AnimatedTechIcon
                key={skillIndex}
                name={skill.icon}
                label={skill.label}
                size="l"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
