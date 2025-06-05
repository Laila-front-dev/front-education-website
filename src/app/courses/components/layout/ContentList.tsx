import { CoursedetailsProps } from "@/types";
import { getContent } from "@/data/loaders";
import Title from "@/components/Title";
import Button from "@/components/ui/Button";
import { Search } from "@/components/Search";
import { PaginationComponent } from "@/components/Pagination";

interface ContentListProps {
  query?: string;
  page?: string;
  path: string;
  featured?: boolean;
  showSearch?: boolean;
  showTitle?: boolean;
  component: React.ComponentType<CoursedetailsProps & { basePath: string }>;
  showPagination?: boolean;
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContent(path, featured, false, query, page);
  return {
    articles: (data as CoursedetailsProps[]) || [],
    pageCount: meta?.pagination.pageCount || 1,
  };
}

export async function ContentList({
  path,
  component,
  featured,
  showSearch,
  query,
  page,
  showPagination,
  showTitle = true,
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;
  return (
    <section className="content-grid padding-block-11 margin-block-start-11 bg-accent-200">
      <div className="course-section card-section">
        {showTitle && (
          <div className="card-title grid grid-columns-2  items-center margin-block-8">
            <div>
              <Title
                span="Top Popular Course"
                heading="Edunity Course student can join with us."
              />
            </div>
            <div className="column-end column-start">
              <Button
                href="/courses"
                className="bg-primary-400"
                text="Load More Course"
              />
            </div>
          </div>
        )}
        {showSearch && <Search />}
        <div className="grid grid-columns-3 gap-1 margin-block-end-8">
          {articles.map((article) => (
            <Component key={article.documentId} {...article} basePath={path} />
          ))}
        </div>
        {showPagination && <PaginationComponent pageCount={pageCount} />}
      </div>
    </section>
  );
}
