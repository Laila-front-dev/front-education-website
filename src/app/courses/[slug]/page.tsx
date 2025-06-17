import { getContentBySlug } from "@/data/loaders";
import { CoursedetailsProps } from "@/types";
import { notFound } from "next/navigation";
import BlogTetails from "../components/BlogTetails";
import Link from "next/link";
import { Metadata } from "next";

interface PagePrpops {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PagePrpops): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getContentBySlug(resolvedParams.slug, "/api/courses");
  // console.log(data.data);

  if (!data) return {};
  return {
    title: data.data[0]?.title,
    description: data.data[0]?.description,
    openGraph: {
      title: data.data[0]?.title,
      description: data.data[0]?.description,
      url: `https://edusparke.netlify.app/courses/${resolvedParams.slug}`,
      siteName: "eduSpark",
      images: [
        {
          url:
            `NEXT_PUBLIC_STRAPI_API_URL${data.data[0]?.image.url}` ||
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
      canonical: `https://edusparke.netlify.app/courses/${resolvedParams.slug}`,
    },
  };
}

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/courses");
  // console.log(data);
  const article = data[0];

  if (!article) notFound();
  return { article: article as CoursedetailsProps, blocks: article?.blocks };
}

async function SingleBlogPage({ params }: PagePrpops) {
  const slug = (await params).slug;
  const { article, blocks } = await loader(slug);

  const {
    title,
    description,
    image,
    id,
    lesson,
    hours,
    students,
    price,
    startDate,
    enrolled,
    lectures,
    skillLevel,
    classNameDay,
    language,
  } = article;

  const firstBlock =
    blocks.find(
      (block: { __component: string }) =>
        block.__component === "blocks.overview"
    ) || {};
  const secondBlock =
    blocks.find(
      (block: { __component: string }) =>
        block.__component === "blocks.curriculum"
    ) || {};
  const thirdBlock =
    blocks.find(
      (block: { __component: string }) =>
        block.__component === "blocks.instructor"
    ) || {};

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
        <div className="blog-slider grid grid-columns-fill gap-1">
          <div className="blog-details">
            <BlogTetails
              id={id}
              title={title}
              description={description}
              image={image}
              lesson={lesson}
              hours={hours}
              students={students}
              overviews={firstBlock}
              curriculums={secondBlock}
              instructors={thirdBlock}
            />
          </div>
          <aside>
            <div className="course-aside">
              <ul role="list">
                <li>
                  <h3>price</h3>
                  <p>{price}</p>
                </li>
                <li>
                  <h3>start date</h3>
                  <p>{startDate}</p>
                </li>
                <li>
                  <h3>enrolled</h3>
                  <p>{enrolled}</p>
                </li>
                <li>
                  <h3>lectures</h3>
                  <p>{lectures}</p>
                </li>
                <li>
                  <h3>skill level</h3>
                  <p>{skillLevel}</p>
                </li>
                <li>
                  <h3>className day</h3>
                  <p>{classNameDay}</p>
                </li>
                <li>
                  <h3>language</h3>
                  <p>{language}</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
