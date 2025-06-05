import { ImageProps } from "@/types";

import Link from "next/link";
import { formatDate } from "@/utils/format-date";
import StrapiImage from "@/components/StrapiImage";
import Button from "@/components/ui/Button";

export interface CardProps {
  documentId?: string;
  title: string;
  description: string;
  slug?: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  slug,
  image,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  return (
    <article className="blog-card card">
      <Link href={`/${basePath}/${slug}`}>
        <div className="card-image">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            fill
          />
        </div>
        <div className="card-content">
          <div>
            {(startDate ?? createdAt) && (
              <p className="fs-20 ff-secondary article-date">
                {formatDate(startDate ?? createdAt)}
              </p>
            )}
          </div>
          <Link href={`/${basePath}/${slug}`}>
            <h3 className="fw-semiBold fs-50">{title}</h3>
          </Link>
          <div className="card-details">
            <Button
              href={`/${basePath}/${slug}`}
              text="read more"
              className="bg-primary-400"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
