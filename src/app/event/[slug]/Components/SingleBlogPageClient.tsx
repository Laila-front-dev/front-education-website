"use client";

import React from "react";
// import BlogTetails from "../components/BlogTetails";
import { RenderComponent } from "@/components/LayoutRenderer";
import { EventProps } from "@/types";
import CountdownTimer from "./CountdownTimer";
import BlogTetails from "../../components/BlogTetails";
import Link from "next/link";

interface SingleBlogPageClientProps {
  article: EventProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any;
}

export default function SingleBlogPageClient({
  article,
  blocks,
}: SingleBlogPageClientProps) {
  const { title, description, image, location, hours, date, time } = article;

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
              hours={hours}
              location={location}
              date={date}
            />
            <RenderComponent components={blocks} />
          </div>
          <aside>
            <CountdownTimer targetDate={time} />
          </aside>
        </div>
      </section>
    </>
  );
}
