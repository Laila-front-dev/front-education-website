import { OurInstructorLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Title from "../Title";
import Button from "../ui/Button";

function DescoverSection({ text, heading, discover }: OurInstructorLayout) {
  return (
    <section className="content-grid padding-block-start-11 ">
      <div className="discover-section flow">
        <div className="text-center">
          <Title span={text} heading={heading} />
        </div>
        <div className="grid grid-columns-2 gap-1">
          {discover.map((item) => (
            <div
              key={item.id}
              className="grid grid-columns grid-auto-rows-2  items-center discover-content padding-block-start-8 flow"
            >
              <ul role="list" className=" padding-inline-start-8 ">
                <li>
                  <h3 className="tertiary-heading">{item.text}</h3>
                </li>
                <li>
                  <p>{item.paragraph}</p>
                </li>
                <li>
                  <Button
                    href={item.cta.href}
                    text={item.cta.text}
                    className="bg-primary-400"
                  />
                </li>
              </ul>
              <div className="discover-image">
                <StrapiImage
                  key={item.id}
                  src={item.image.url}
                  alt={item.image.alternativeText || "Default alt text"}
                  // width={300}
                  // height={322}
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DescoverSection;
