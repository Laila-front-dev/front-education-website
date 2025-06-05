import { getBlogsSetttings } from "@/data/loaders";
import { RenderComponent } from "../LayoutRenderer";
import { notFound } from "next/navigation";

import { Card, type CardProps } from "@/app/courses/components/layout/Card";
import { ContentList } from "@/app/courses/components/layout/ContentList";
async function loader() {
  const data = await getBlogsSetttings();
  // console.log(data);

  if (!data) notFound();
  return { ...data.data };
}

const CourseCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="courses" />
);

async function SectionOne() {
  const data = await loader();
  // console.log(data);

  const blocks = data?.main || [];
  // console.log(blocks);

  return (
    <>
      <RenderComponent components={blocks} />
      <ContentList
        path="/api/courses"
        component={CourseCard}
        featured
        showTitle
      />
    </>
  );
}

export default SectionOne;
