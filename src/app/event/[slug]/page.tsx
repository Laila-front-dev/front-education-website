import { getContentBySlug } from "@/data/loaders";
import { EventProps } from "@/types";
import { notFound } from "next/navigation";
import SingleBlogPageClient from "./Components/SingleBlogPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/events");
  const article = data[0];

  if (!article) notFound();
  return { article: article as EventProps, blocks: article?.blocks };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const slug = (await params).slug;
  const { article, blocks } = await loader(slug);

  return <SingleBlogPageClient article={article} blocks={blocks} />;
}
