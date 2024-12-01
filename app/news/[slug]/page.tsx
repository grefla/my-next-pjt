import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_conponents/Article";
import ButtonLink from "@/app/_conponents/ButtonLink";
import styles from "./page.module.css";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
