import Link from "next/link";
import { getList } from "@/libs/microcms";
import { PageTitle } from "../_components/PageTitle";
import { BlogCard } from "./_components/BlogCard";
import { convertDate } from "@/libs/convertDate";
import { Box, List, VStack } from "@/libs";

export const metadata = {
  title: "Blog",
};

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

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
    </Box>
  );
}
