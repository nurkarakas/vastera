"use client";

import React, { useState } from "react";
import { Icon } from "@/once-ui/components";
import styles from "./AnimatedTechIcon.module.scss";

interface AnimatedTechIconProps {
  name: string;
  label?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
}

export const AnimatedTechIcon: React.FC<AnimatedTechIconProps> = ({
  name,
  label,
  size = "l",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.iconContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${styles.icon} ${isHovered ? styles.animated : ""}`}>
        <Icon name={name} size={size} />
      </div>
      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
};

export default AnimatedTechIcon;
