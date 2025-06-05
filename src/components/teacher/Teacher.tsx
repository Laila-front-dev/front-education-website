import { TeacherLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Title from "../Title";

function Teacher({ teacher }: TeacherLayout) {
  return (
    <section className="content-grid padding-block-11">
      {/* <h1>{title}</h1> */}
      <div className="teacher-section">
        <div className="teacher-title flow">
          <Title span="teacher" heading="Meet Our Instructor" />
        </div>
        <div className="grid grid-columns-4 gap-1">
          {teacher.map((item) => (
            <div key={item.id} className="teacher-content flow card">
              <div className="teacher-image">
                <StrapiImage
                  src={item.image.url}
                  alt={
                    item.image.alternativeText || "No alternative text provided"
                  }
                  // width={292}
                  // height={309}
                  fill
                />
              </div>
              <div className="teacher-details">
                <h3 className="tertiary-heading">{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teacher;
