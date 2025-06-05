import StrapiImage from "@/components/StrapiImage";
import { EventProps } from "@/types";

function BlogTetails({
  title,
  description,
  image,
  hours,
  location,
}: EventProps) {
  return (
    <article className="article-details flow">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        // width={1000}
        // height={500}
        fill
      />
      <h1 className="secondary-heading">{title}</h1>
      <div className="event-list">
        <ul role="list" className="flex items-center gap-1">
          <li>{hours}</li>
          <li>{location}</li>
        </ul>
      </div>
      <p>{description}</p>
    </article>
  );
}

export default BlogTetails;
