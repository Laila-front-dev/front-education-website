import { getBlogSetttings } from "@/data/loaders";
import { notFound } from "next/navigation";
import { RenderComponent } from "../LayoutRenderer";
import { ContentList } from "@/app/blog/components/layout/ContentList";
import { Card, type CardProps } from "@/app/blog/components/layout/Card";
import Title from "../Title";
import Button from "../ui/Button";

async function loader() {
  const data = await getBlogSetttings();

  if (!data) notFound();
  return { ...data.data };
}

const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

async function SectionTwo() {
  const data = await loader();
  const blocks = data?.main || [];
  // console.log(blocks);

  return (
    <>
      <RenderComponent components={blocks} />
      <section className="content-grid padding-block-start-11">
        <div className="blog-section card-section">
          <div className="card-title grid grid-columns-2  items-center margin-block-8">
            <div>
              <Title
                span="blog post"
                heading="most popular post
"
              />
            </div>
            <div className="column-end column-start">
              <Button
                href="/blog"
                className="bg-primary-400"
                text="all blog post"
              />
            </div>
          </div>
          <div className="grid grid-columns-3 gap-1">
            <ContentList
              path="/api/articles"
              component={BlogCard}
              featured
              showTitle
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTwo;
