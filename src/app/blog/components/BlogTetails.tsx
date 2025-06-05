import StrapiImage from "@/components/StrapiImage";
import { ArticledetailsProps } from "@/types";

function BlogTetails({ title, description, image }: ArticledetailsProps) {
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
      <p>{description}</p>
    </article>
  );
}

export default BlogTetails;
