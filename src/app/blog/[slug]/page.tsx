import { getContentBySlug } from "@/data/loaders";
import { ArticleProps } from "@/types";
import { notFound } from "next/navigation";
import BlogTetails from "../components/BlogTetails";
import { RenderComponent } from "@/components/LayoutRenderer";
import Link from "next/link";
import { Card, type CardProps } from "../components/layout/Card";
import { ContentList } from "../components/layout/ContentList";
import { Metadata } from "next";

interface PagePrpops {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PagePrpops): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getContentBySlug(resolvedParams.slug, "/api/articles");
  // console.log(data.data);

  if (!data) return {};
  return {
    title: data.data[0]?.title,
    description: data.data[0]?.description,
    openGraph: {
      title: data.data[0]?.title,
      description: data.data[0]?.description,
      url: `https://edusparke.netlify.app/${resolvedParams.slug}`,
      siteName: "eduSpark",
      images: [
        {
          url:
            `https://back-education-website-production.up.railway.app${data.data[0]?.image.url}` ||
            "/images/eduspark.png",
          width: 1200,
          height: 630,
          alt: data.data[0]?.title || "eduSpark",
        },
      ],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://edusparke.netlify.app/blog/${resolvedParams.slug}`,
    },
  };
}

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/articles", true);
  // console.log(data);
  const article = data[0];

  if (!article) notFound();
  return { article: article as ArticleProps, blocks: article?.blocks };
}

const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

async function SingleBlogPage({ params }: PagePrpops) {
  const slug = (await params).slug;
  const { article, blocks } = await loader(slug);

  const { title, description, image, skillsTags } = article;
  // console.log(article);

  return (
    <>
      <section className="content-grid">
        <div className="bg-content full-width">
          <div className="text-content">
            <h1 className="primary-heading">{title}</h1>
            <ul role="list" className="links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={title}>{title}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="content-grid padding-block-start-11">
        <div className="blog-slider grid grid-columns-fill gap-4">
          <div className="blog-details">
            <BlogTetails
              title={title}
              description={description}
              image={image}
            />
            <RenderComponent components={blocks} />
          </div>
          <aside>
            <div className="aside-card">
              <h3 className="aside-heading">Recent Post</h3>
              <ContentList
                path="/api/articles"
                component={BlogCard}
                featured
                showTitle
              />
            </div>
            <div>
              <h3 className="aside-heading">popular tag:</h3>
              {skillsTags && skillsTags.length > 0 ? (
                <ul role="list" className="skills-tags-list">
                  {skillsTags.map((tag) => (
                    <li key={tag.id} className="skills-tag-item">
                      <Link
                        href={`/blog/tags/${tag.name
                          .trim()
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        {tag.name.trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tags available.</p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
