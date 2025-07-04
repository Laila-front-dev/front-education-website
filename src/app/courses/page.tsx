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
  const result = await getPageBySlug("courses", false);
  // console.log(data.data);

  const data = result?.data;

  if (!data || !Array.isArray(data) || data.length === 0) return {};
  return {
    title: data[0]?.title,
    description: data[0]?.description,
    openGraph: {
      title: data[0]?.title,
      description: data[0]?.description,
      url: "https://edusparke.netlify.app/courses",
      siteName: "eduSpark",
      images: [
        {
          url: data[0]?.image || "https://edusparke.netlify.app/images/eduspark.png",
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
      canonical: "https://edusparke.netlify.app/courses",
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
