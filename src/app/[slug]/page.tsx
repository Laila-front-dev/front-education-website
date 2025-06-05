import { RenderComponent } from "@/components/LayoutRenderer";
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "../courses/components/layout/ContentList";
import { Card, type CardProps } from "../courses/components/layout/Card";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getPageBySlug(resolvedParams.slug);
  // console.log(data.data[0].title);

  if (!data) return {};
  return {
    title: data.data[0].title,
    description: data.data[0].description,
    openGraph: {
      title: data.data[0].title,
      description: data.data[0].description,
      url: `http://localhost:3000/${resolvedParams.slug}`,
      siteName: "EduSpark",
      images: [
        {
          url: data.data?.image || "/images/eduspark.png",
          width: 1200,
          height: 630,
          alt: data.data[0]?.title || "EduSpark",
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
      canonical: `http://localhost:3000/${resolvedParams.slug}`,
    },
  };
}

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  // console.log(data);

  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks, data };
}

const CourseCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="courses" />
);

export default async function DynamicPageRoute({ params }: PageProps) {
  const slug = (await params).slug;
  // console.log(slug);

  const { blocks, data } = await loader(slug);
  // console.log(data);

  return (
    <main className="page-layout">
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
      <RenderComponent components={blocks} />
      {slug === "about" && (
        <ContentList
          path="/api/courses"
          component={CourseCard}
          featured
          showTitle
        />
      )}
    </main>
  );
}
