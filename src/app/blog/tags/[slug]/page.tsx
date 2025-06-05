import { getContent } from "@/data/loaders";
import { Card } from "../../components/layout/Card";
import { notFound } from "next/navigation";
import { ImageProps } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface ArticleProps {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  createdAt: string;
  skillsTags?: Array<{ id: string; name: string }>;
}

async function loader() {
  const data = await getContent("/api/articles", false, true);
  // console.log(data);

  const articles = data?.data || [];
  if (articles.length === 0) notFound();
  return articles as ArticleProps[];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const articles = await loader();
  // console.log(articles, "article");

  const normalizedSlug = slug.replace(/-/g, " ");

  const filteredArticles = articles.filter(
    (article) =>
      Array.isArray(article.skillsTags) &&
      article.skillsTags.some(
        (tag) => tag.name.toLowerCase() === normalizedSlug.toLowerCase()
      )
  );

  // console.log(filteredArticles);

  return (
    <section className="content-grid padding-block-start-11 flow">
      <h1 className="text-center secondary-heading">
        Articles Tagged: {normalizedSlug}
      </h1>
      {filteredArticles.length > 0 ? (
        <ul className="grid grid-columns-3 gap-1">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              documentId={article.id}
              title={article.title}
              description={article.description}
              slug={article.slug}
              image={article.image}
              createdAt={article.createdAt}
              basePath="blog/"
            />
          ))}
        </ul>
      ) : (
        <p>No articles found for this tag.</p>
      )}
    </section>
  );
}
