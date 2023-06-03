import { getList } from "@/libs/microcms";
import { Box, List } from "@/libs";
import { PageTitle } from "@/app/_components/PageTitle";
import Link from "next/link";
import { BlogCard } from "../../_components/BlogCard";
import { convertDate } from "@/libs/convertDate";
import { POST_PER_PAGE } from "@/common/siteSettings";
import { Pagination } from "../../_components/Pagination";

export async function generateStaticParams() {
  const { totalCount } = await getList();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(totalCount / POST_PER_PAGE)).map((i) => {
    return {
      id: String(i),
    };
  });

  return [...paths];
}

export default async function StaticPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { contents, totalCount } = await getList({
    offset: (Number(id) - 1) * POST_PER_PAGE,
    limit: POST_PER_PAGE,
  });
  return (
    <Box>
      <PageTitle title="Blog" />
      <List>
        {contents.map((post) => {
          return (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <BlogCard title={post.title} date={convertDate(post.createdAt)} />
            </Link>
          );
        })}
      </List>
      <Pagination totalCount={totalCount} currentPage={Number(id)} />
    </Box>
  );
}
