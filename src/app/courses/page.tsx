import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "./components/layout/ContentList";
import Link from "next/link";
import { Metadata } from "next";
import CourseCard from "./components/layout/CourseCard";

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageBySlug("courses", false);
  // console.log(data.data);

  if (!data) return {};
  return {
    title: data.data[0]?.title,
    description: data.data[0]?.description,
    openGraph: {
      title: data.data[0]?.title,
      description: data.data[0]?.description,
      url: "http://localhost:3000/courses",
      siteName: "eduSpark",
      images: [
        {
          url: data.data?.image || "/images/eduspark.png",
          width: 1200,
          height: 630,
          alt: data.data?.title || "eduSpark",
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
      canonical: "http://localhost:3000/courses",
    },
  };
}

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug, false);
  // console.log(data);

  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks, data };
}

async function page({ searchParams }: PageProps) {
  const { query, page } = await searchParams;
  const { data } = await loader("courses");
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
      <ContentList
        path="/api/courses"
        component={CourseCard}
        showTitle={false}
        query={query}
        page={page}
        showSearch
        showPagination
      />
    </>
  );
}

export default page;
