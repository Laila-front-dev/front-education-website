"use client";

import { useState } from "react";
import StrapiImage from "@/components/StrapiImage";
import { CoursedetailsProps } from "@/types";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";

function BlogTetails({
  title,
  image,
  lesson,
  hours,
  students,
  overviews,
  curriculums,
  instructors,
  id,
}: CoursedetailsProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "instructor"
  >("overview");

  const renderTabButton = (
    tab: "overview" | "curriculum" | "instructor",
    label: string
  ) => (
    <button
      className={`tab-button ${activeTab === tab ? "active" : ""}`}
      onClick={() => setActiveTab(tab)}
    >
      {label}
    </button>
  );

  return (
    <article className="course-details flow">
      {image?.url && (
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          fill
        />
      )}
      <h1 className="secondary-heading">{title}</h1>
      <ul role="list" className="flex items-center gap-1">
        <li>{lesson}</li>
        <li>{hours}</li>
        <li>{students}</li>
      </ul>
      <div className="tabs">
        {renderTabButton("overview", "overview")}
        {renderTabButton("curriculum", "curriculum")}
        {renderTabButton("instructor", "instructor")}
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="tab-panel">
            <Overview
              id={id}
              overview={overviews.overview || "Default Subheading"}
            />
          </div>
        )}
        {activeTab === "curriculum" && (
          <div className="tab-panel">
            <Curriculum
              id={id}
              curriculum={curriculums.curriculum || "Default Subheading"}
            />
          </div>
        )}
        {activeTab === "instructor" && (
          <div className="tab-panel">
            <Instructor
              id={id}
              instructor={instructors?.instructor || "Default Subheading"}
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogTetails;
