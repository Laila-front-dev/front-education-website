import { AboutUsLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Title from "../Title";
import Button from "../ui/Button";

function AboutUsSection({
  text,
  heading,
  paragraph,
  content,
  image,
  cta,
  number,
  years,
}: AboutUsLayout) {
  return (
    <section className="content-grid padding-block-start-11">
      <div className="about-section grid grid-columns-2 gap-2 items-center">
        <div className="about-content">
          <div className="about-grid">
            {image.map((img) => (
              <div key={img.id} className="about-items grid-col-2">
                <div className="about-image">
                  <StrapiImage
                    src={img.url}
                    alt={img.alternativeText || "Default alt text"}
                    // width={300}
                    // height={300}
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
          <ul role="list" className="number-of-years bg-accent-300">
            <li>
              <span className="fs-number ff-secondary">{number}</span>
              <span className="fs-400 ff-secondary fw-regular text-transform-capitalize ">
                {years}
              </span>
            </li>
          </ul>
        </div>
        <div className="flow about-details">
          <Title span={text} heading={heading} />
          <p>{paragraph}</p>
          <ul role="list" className="flex direction-column">
            {content.map((item) => (
              <li key={item.id}>
                <h3 className="tertiary-heading">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <Button href={cta.href} text={cta.text} className="bg-primary-400" />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
