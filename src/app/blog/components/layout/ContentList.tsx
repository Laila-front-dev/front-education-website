import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";
import { Search } from "@/components/Search";
import { PaginationComponent } from "@/components/Pagination";

interface ContentListProps {
  query?: string;
  path: string;
  featured?: boolean;
  showTitle?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContent(path, featured, true, query, page);
  return {
    articles: (data as ArticleProps[]) || [],
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
  // console.log("articles", articles);
  // const pageCount = 5;
  const Component = component;
  return (
    <>
      {showSearch && <Search />}
      {articles.map((article) => (
        <Component key={article.documentId} {...article} basePath={path} />
      ))}
      {showPagination && <PaginationComponent pageCount={pageCount} />}
    </>
  );
}
