import { HeroSectionLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import { getStapiUrl } from "@/utils/get-strapi-url";
import Button from "../ui/Button";

function HeroSection({
  text,
  heading,
  paragraph,
  image,
  background,
  cta,
}: HeroSectionLayout) {
  return (
    <section
      className="hero-section content-grid"
      style={{
        backgroundImage: `url(${getStapiUrl()}${background.url})`,
      }}
    >
      <div className="hero-content padding-block-start-14 padding-block-end-11 flow">
        <span className="text-primary-400 text-transform-uppercase ff-secondary">
          {text}
        </span>
        <h1 className="primary-heading margin-block-4">{heading}</h1>
        <p>{paragraph}</p>
        <Button href={cta.href} className="bg-primary-900" text={cta.text} />
      </div>
      <div className="hero-image">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Default alt text"}
          // width={607}
          // height={607}
          fill
        />
      </div>
    </section>
  );
}

export default HeroSection;
