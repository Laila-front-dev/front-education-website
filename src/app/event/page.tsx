import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "./components/layout/ContentList";

import Link from "next/link";
import EventCard from "./components/layout/EventCard";

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks, data };
}

// const EventCard = (props: Readonly<CardProps>) => (
//   <Card {...props} basePath="event" />
// );

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}

async function page({ searchParams }: PageProps) {
  const { query, page } = await searchParams;
  const { data } = await loader("event");
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
      <section className="content-grid padding-block-11 margin-block-start-11">
        <ContentList
          path="/api/events"
          component={EventCard}
          showTitle={false}
          query={query}
          page={page}
          showSearch
          showPagination
        />
      </section>
    </>
  );
}

export default page;
