"use client";

import { StatisticsLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Statistics({ Statistics }: StatisticsLayout) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      className={`content-grid padding-block-start-11 statistics-sections ${
        inView ? "in-view" : ""
      }`}
      ref={ref}
    >
      <div className="statistics-section">
        <ul role="list" className="grid grid-columns bg-accent-300 padding-8">
          {Statistics.map((item) => (
            <li key={item.id} className="flex gap-1 items-center">
              <div className="stat-image">
                <StrapiImage
                  src={item.icon.url}
                  alt={item.icon.alternativeText || "Statistic icon"}
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <h3>
                  {inView && (
                    <CountUp
                      start={0}
                      end={Number(item.number)}
                      duration={2}
                      separator=","
                    />
                  )}
                  k+
                </h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Statistics;
