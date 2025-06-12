import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "./components/layout/ContentList";
import Link from "next/link";

import { Search } from "@/components/Search";
import { Metadata } from "next";
import BlogCard from "./components/layout/BlogCard";
import BlogSliders from "./components/layout/BlogSliders";

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const result = await getPageBySlug("blog", false);
  // console.log(data.data);

  const data = result?.data;

  if (!data || !Array.isArray(data) || data.length === 0) return {};
  return {
    title: data[0]?.title,
    description: data[0]?.description,
    openGraph: {
      title: data[0]?.title,
      description: data[0]?.description,
      url: "http://localhost:3000/blog",
      siteName: "eduSpark",
      images: [
        {
          url: data[0]?.image || "/images/eduspark.png",
          width: 1200,
          height: 630,
          alt: data[0]?.title || "eduSpark",
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
      canonical: "http://localhost:3000/blog",
    },
  };
}

interface skillsTagsProps {
  id: string;
  name: string;
}

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug, true);

  if (data.length === 0) notFound();
  return {
    blocks: data[0]?.blocks,
    skillsTags: data[0]?.skillsTags || [],
    data,
  };
}

// const BlogSliders = (props: Readonly<BlogSliderProps>) => (
//   <BlogSlider {...props} basePath="blog" />
// );

// const BlogCard = (props: Readonly<CardProps>) => (
//   <Card {...props} basePath="blog" />
// );

async function page({ searchParams }: PageProps) {
  const { query, page } = await searchParams;
  const { data, skillsTags } = await loader("blog");
  // console.log(data);

  return (
    <>
      <section className="content-grid">
        <div className="bg-content full-width">
          <div className="text-content">
            <h1 className="primary-heading">{data[0].title}</h1>
            <ul role="list" className="links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={data[0].title}>{data[0].title}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="content-grid padding-block-start-11">
        <div className="blog-slider grid grid-columns-fill gap-4">
          <div>
            <ContentList
              path="/api/articles"
              component={BlogSliders}
              showTitle={false}
              query={query}
              page={page}
              showPagination
            />
          </div>
          <aside>
            <Search />
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
              {skillsTags.length > 0 ? (
                <ul role="list" className="skills-tags-list">
                  {skillsTags.map((tag: skillsTagsProps) => (
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
                <p>No skills tags available.</p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default page;
