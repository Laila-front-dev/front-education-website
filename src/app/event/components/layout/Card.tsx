import { ImageProps } from "@/types";

import Link from "next/link";
import StrapiImage from "@/components/StrapiImage";

export interface CardProps {
  documentId?: string;
  title: string;
  description: string;
  slug?: string;
  image: ImageProps;
  hours: string;
  location: string;
  date: string;
  basePath: string;
}

export function Card({
  title,
  slug,
  image,
  hours,
  location,
  date,
  description,
  basePath,
}: Readonly<CardProps>) {
  return (
    <article className="event-card card">
      <Link href={`/${basePath}/${slug}`}>
        <div className="card-image">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            fill
          />
        </div>

        <div className="event-card-content">
          <div>
            <Link href={`/${basePath}/${slug}`}>
              <h3 className="tertiary-heading">{title}</h3>
            </Link>
          </div>
          <span>{date}</span>
          <p>{description}</p>
          <div className="event-list">
            <ul role="list" className="flex items-center justify-between">
              <li>{hours}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </Link>
    </article>
  );
}
