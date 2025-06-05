import { EventProps } from "@/types";
import { getContent } from "@/data/loaders";
import { PaginationComponent } from "@/components/Pagination";
import { Search } from "@/components/Search";

interface ContentListProps {
  query?: string;
  page?: string;
  path: string;
  featured?: boolean;
  showSearch?: boolean;
  showTitle?: boolean;
  component: React.ComponentType<EventProps & { basePath: string }>;
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
    articles: (data as EventProps[]) || [],
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
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;
  return (
    <>
      {showSearch && <Search />}
      <div className="grid grid-columns-3 gap-1 margin-block-end-8">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
      {showPagination && <PaginationComponent pageCount={pageCount} />}
    </>
  );
}
