import { getNewsList } from "../_libs/microcms";
import NewsList from "../_conponents/NewsList";
import Pagination from "../_conponents/Pagination";
import SearchField from "../_conponents/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}