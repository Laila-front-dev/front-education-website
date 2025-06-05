import { ImageProps } from "@/types";

import Link from "next/link";
import { formatDate } from "@/utils/format-date";
import StrapiImage from "@/components/StrapiImage";
import Button from "@/components/ui/Button";

export interface BlogSliderProps {
  documentId?: string;
  title: string;
  description: string;
  slug?: string;
  author: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function BlogSlider({
  title,
  slug,
  image,
  author,
  createdAt,
  startDate,
  basePath,
}: Readonly<BlogSliderProps>) {
  return (
    <article className="blog-card margin-block-end-8 flow">
      <div>
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          fill
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          {(startDate ?? createdAt) && (
            <p className="fs-20 ff-secondary article-date">
              {formatDate(startDate ?? createdAt)}
            </p>
          )}
          <p className="article-auth">{author}</p>
        </div>
        <Link href={`/${basePath}/${slug}`}>
          <h2 className="secondary-heading padding-block-start-4">{title}</h2>
        </Link>
        <Button
          href={`/${basePath}/${slug}`}
          text="read more"
          className="bg-primary-400"
        />
      </div>
    </article>
  );
}
