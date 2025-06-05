import { CategoriesLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Title from "../Title";

function CategoriesSection({
  text,
  heading,
  nameCategories,
}: CategoriesLayout) {
  const backgroundColors = [
    "bg-neutral-100",
    "bg-neutral-200",
    "bg-neutral-300",
    "bg-neutral-400",
    "bg-neutral-500",
    "bg-neutral-600",
    "bg-neutral-700",
    "bg-neutral-800",
    "bg-neutral-900",
  ];

  return (
    <section className="content-grid">
      <div className="categories-section">
        <div className="text-center flow">
          <Title span={text} heading={heading} />
        </div>
        <ul
          role="list"
          className="grid grid-columns-3 grid-rows-3 gap-1 padding-block-start-11"
        >
          {nameCategories.map((item, index: number) => (
            <li
              key={item.id}
              className={`flex items-center gap-1 padding-inline-4 ${
                backgroundColors[index % backgroundColors.length]
              }`}
            >
              <span>
                <StrapiImage
                  src={item.image.url}
                  alt={item.image.alternativeText || "Default alt text"}
                  width={50}
                  height={50}
                />
              </span>
              <span className="fw-bold text-primary-900 fs-200">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategoriesSection;
