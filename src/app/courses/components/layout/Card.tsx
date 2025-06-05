import { ImageProps } from "@/types";

import Link from "next/link";
import StrapiImage from "@/components/StrapiImage";
import Button from "@/components/ui/Button";

export interface CardProps {
  documentId?: string;
  title: string;
  slug?: string;
  image: ImageProps;
  lesson: string;
  hours: string;
  students?: string;
  author?: string;
  name?: string;
  basePath: string;
}

export function Card({
  title,
  slug,
  image,
  lesson,
  hours,
  students,
  author,
  name,
  basePath,
}: Readonly<CardProps>) {
  return (
    <article className="courses-card card">
      <Link href={`/${basePath}/${slug}`}>
        <div className="card-image">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            fill
          />
          <span>{name}</span>
        </div>

        <div className="card-content">
          <div>
            <Link href={`/${basePath}/${slug}`}>
              <h3 className="tertiary-heading">{title}</h3>
            </Link>
          </div>
          <div className="card-details">
            <ul role="list" className="flex items-center justify-between">
              <li>{lesson}</li>
              <li>{hours}</li>
              <li>{students}</li>
            </ul>
            <div className="flex items-center justify-between">
              <h4>{author}</h4>
              <Button
                href={`/${basePath}/${slug}`}
                text="read more"
                className="bg-primary-400"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
