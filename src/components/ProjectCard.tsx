"use client";

import {
  AvatarGroup,
  Flex,
  Heading,
  RevealFx,
  SmartImage,
  SmartLink,
  Text,
  Icon,
} from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface Feature {
  text: string;
  icon: string;
}

type FeatureItem = string | Feature;

interface ProjectCardProps {
  href?: string;
  images?: string[];
  image?: string;
  title: string;
  content?: string;
  description?: string;
  avatars?: { src: string }[];
  icon?: string;
  features?: FeatureItem[];
  thumbnail?: boolean;
  reversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  image,
  title,
  content,
  description,
  avatars = [],
  icon,
  features = [],
  thumbnail = false,
  reversed = false,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      fillWidth
      gap="l"
      mobileDirection="column"
      style={{
        height: "100%",
        borderRadius: "var(--radius-l)",
        flexDirection: thumbnail ? "column" : reversed ? "row-reverse" : "row",
      }}
    >
      {(image || (images && images.length > 0)) && (
        <Flex flex={thumbnail ? undefined : 6} padding="m">
          <RevealFx
            style={{ width: "100%", height: "auto" }}
            delay={0.4}
            trigger={isTransitioning}
            speed="fast"
          >
            <SmartImage
              tabIndex={0}
              radius="m"
              alt={title}
              aspectRatio="16 / 9"
              src={image || (images && images.length > 0 ? images[0] : "")}
              style={{
                width: "100%",
                objectFit: "contain",
                backgroundColor: "transparent",
              }}
            />
          </RevealFx>
        </Flex>
      )}
      <Flex
        mobileDirection="column"
        direction="column"
        flex={thumbnail ? undefined : 4}
        fillWidth
        paddingX="l"
        paddingY="l"
        gap="0"
        justifyContent="center"
      >
        {title && (
          <Flex flex={5}>
            <Heading
              as="h2"
              wrap="balance"
              style={{ fontSize: "32px", marginBottom: "0" }}
            >
              {title}
            </Heading>
          </Flex>
        )}
        {(icon ||
          avatars?.length > 0 ||
          description?.trim() ||
          content?.trim() ||
          features.length > 0) && (
          <Flex
            flex={7}
            direction="column"
            gap="m"
            style={{ marginTop: "10px" }}
          >
            {icon && (
              <Flex marginTop="0">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                  }}
                >
                  <Icon name={icon || "grid"} size="m" />
                </Flex>
              </Flex>
            )}
            {description?.trim() && (
              <Text
                wrap="balance"
                style={{ fontSize: "18px", fontWeight: 300 }}
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}
            {features && features.length > 0 && (
              <Flex direction="column" gap="xs" marginTop="s">
                {features.map((feature, index) => (
                  <Flex key={index} alignItems="center" gap="xs">
                    <Icon
                      name={
                        typeof feature === "string"
                          ? "arrowRight"
                          : feature.icon
                      }
                      size="s"
                      style={{ color: "var(--neutral-on-background-strong)" }}
                    />
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: 300,
                        color: "var(--neutral-on-background-strong)",
                      }}
                    >
                      {typeof feature === "string" ? feature : feature.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            )}
            {avatars?.length > 0 && (
              <AvatarGroup avatars={avatars} size="m" reverseOrder />
            )}
            {content?.trim() && (
              <SmartLink
                suffixIcon="chevronRight"
                style={{
                  margin: "0",
                  width: "fit-content",
                  marginTop: "var(--space-s)",
                }}
                href={href || "#"}
              >
                <Text
                  variant="body-default-s"
                  style={{ color: "var(--neutral-on-background-strong)" }}
                >
                  {t("projectCard.label")}
                </Text>
              </SmartLink>
            )}
            <SmartLink
              suffixIcon="arrowUpRight"
              style={{
                margin: "0",
                width: "fit-content",
                marginTop: "var(--space-m)",
              }}
              href={href || "#"}
            >
              <Text style={{ fontSize: "16px", fontWeight: 300 }}>
                Go to Project
              </Text>
            </SmartLink>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
