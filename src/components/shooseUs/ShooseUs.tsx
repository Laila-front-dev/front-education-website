import { ShooseUsLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Title from "../Title";

function ShooseUsSection({
  text,
  heading,
  paragraph,
  content,
  image,
}: ShooseUsLayout) {
  return (
    <section className="content-grid padding-block-start-11">
      <div className="choose-us-section">
        <div className="grid grid-columns-2 items-center gap-1 justify-end">
          <div className="flow choose-us-details">
            <Title span={text} heading={heading} />
            <p>{paragraph}</p>
            <ul role="list" className="grid grid-columns grid-auto-rows gap-1">
              {content.map((item) => (
                <li key={item.id} className="bg-accent-100">
                  <h3 className="tertiary-heading">{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="choose-us-image">
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || "Default alt text"}
              // width={500}
              // height={755}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShooseUsSection;
