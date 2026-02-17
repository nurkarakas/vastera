import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Grid,
} from "@/once-ui/components";
import { ProjectCard, Skills } from "@/components";
import { work, skills } from "@/app/resources/content";

import { baseURL, routes, renderContent } from "@/app/resources";
import { Posts } from "@/components/blog/Posts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const content = renderContent(t);
  const { home, about, person } = content;
  const newsletter = 'newsletter' in content ? content.newsletter : null;
  const { projects } = work;
  const { items: skillItems } = skills;
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction="column" paddingY="l" gap="m">
        <Flex direction="column" fillWidth maxWidth="s">
          <RevealFx
            translateY="4"
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Heading
              wrap="balance"
              variant="display-strong-l"
              style={{
                fontSize: "2.5rem",
              }}
            >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              weight="default"
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
              }}
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Flex fillWidth>
              <Button
                id="about"
                data-border="rounded"
                href={`/${locale}/about`}
                variant="tertiary"
                size="m"
              >
                <Flex gap="8" alignItems="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {t("about.title")}
                  <Arrow trigger="#about" />
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Flex>
      </Flex>
      <Skills skills={skillItems.slice(0, 8)} locale={locale} />
      <RevealFx translateY="16" delay={0.6}>
        <Flex fillWidth direction="column" gap="xl">
          <Flex direction="column" gap="m" alignItems="center">
            <Heading
              as="h2"
              variant="display-strong-xs"
              wrap="balance"
              style={{ textAlign: "center", fontSize: "2.5rem" }}
            >
              Featured Projects
            </Heading>
            <Button
              href={`/${locale}/work`}
              variant="tertiary"
              size="s"
              suffixIcon="arrowRight"
            >
              All Projects
            </Button>
          </Flex>
          <Grid
            columns="repeat(2, 1fr)"
            tabletColumns="2col"
            mobileColumns="1col"
            fillWidth
            gap="m"
          >
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                thumbnail={true}
                href={`/${locale}/work/projects/${project.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              />
            ))}
          </Grid>
        </Flex>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Flex direction="column" gap="m" alignItems="flex-start">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
              <Button
                href={`/${locale}/blog`}
                variant="tertiary"
                size="s"
                suffixIcon="arrowRight"
              >
                {locale === "tr"
                  ? "Tüm Blogları Gör"
                  : locale === "id"
                  ? "Lihat Semua Blog"
                  : "View All Posts"}
              </Button>
            </Flex>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts
              range={[1, 2]}
              columns="2"
              locale={locale}
              thumbnail={true}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
