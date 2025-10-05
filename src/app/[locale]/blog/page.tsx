import { Posts } from "@/components/blog/Posts";
import { FloatingParticles } from "@/components/work/FloatingParticles";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <div className="relative z-10">
        <Posts locale={params.locale} thumbnail={true} />
      </div>
    </div>
  );
}
