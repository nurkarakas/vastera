import { Flex, Grid, Heading } from "@/once-ui/components";
import { FloatingParticles } from "@/components/work/FloatingParticles";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getPosts } from "@/app/utils/utils";
import Post from "@/components/blog/Post";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("blog"),
    description: t("blogDescription"),
  };
}

export default function BlogPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  // Server-side'da postları al
  const posts = getPosts(["src", "app", "[locale]", "blog", "posts", params.locale])
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
    );

  return (
    <Flex fillWidth maxWidth="m" direction="column" gap="l">
      <FloatingParticles />
      <Heading as="h1" variant="display-strong-s">Blog</Heading>
      {posts.length > 0 ? (
        <Grid
          columns="repeat(1, 1fr)"
          mobileColumns="1col"
          fillWidth
          marginBottom="40"
          gap="m"
        >
          {posts.map((post) => (
            <Post key={post.slug} post={post} thumbnail={true} />
          ))}
        </Grid>
      ) : (
        <Flex>No blog posts found.</Flex>
      )}
    </Flex>
  );
}
