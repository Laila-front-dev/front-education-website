"use client";

import { TestimonialLayout } from "@/types";
import Title from "../Title";

function Testimonial({ text, heading, testimonial }: TestimonialLayout) {
  const animationDuration = 30;
  const totalItems = testimonial.length;
  const itemWidth = 200;

  return (
    <section className="content-grid padding-block-start-11">
      <div className="testimonial-section flow">
        <div className="text-center">
          <Title span={text} heading={heading} />
        </div>
        <div className="flow wrapper">
          {testimonial.map((item, index) => (
            <ul
              role="list"
              key={item.id}
              className={`ff-secondary item item${index + 1}`}
              style={{
                animationDelay: `calc(${animationDuration}s / ${totalItems} * (${totalItems} - ${index}) * -1)`,
                left: `max(calc(${itemWidth}px * ${totalItems}), 100%)`, // Dynamically calculate left
              }}
            >
              <li>
                <p>{item.paragraph}</p>
              </li>
              <li className="ff-primary">
                <h3 className="tertiary-heading">{item.heading}</h3>
              </li>
              <li className="text-primary-400">
                <p>{item.text}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
