import Link from "next/link";
import { getList } from "@/libs/microcms";
import { PageTitle } from "../_components/PageTitle";
import { BlogCard } from "./_components/BlogCard";
import { convertDate } from "@/libs/convertDate";
import { Box, List, Text, VStack } from "@/libs";
import { Pagination } from "./_components/Pagination";
import { POST_PER_PAGE } from "@/common/siteSettings";

export const metadata = {
  title: "Blog",
};

export default async function StaticPage() {
  const { contents, totalCount } = await getList({ limit: POST_PER_PAGE });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <Box>
      <PageTitle title="Blog" />
      <Text color="gray" my={5}>
        {totalCount}posts
      </Text>
      <List>
        {contents.map((post) => {
          return (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <BlogCard title={post.title} date={convertDate(post.createdAt)} />
            </Link>
          );
        })}
      </List>
      <Pagination totalCount={totalCount} />
    </Box>
  );
}
