import { Box, List } from "@/libs";
import { PageTitle } from "./_components/PageTitle";
import { Profile } from "./_components/Profile";
import { getList } from "@/libs/microcms";
import { SectionTitle } from "./_components/SectionTItle";
import { BlogCard } from "./blogs/_components/BlogCard";
import { convertDate } from "@/libs/convertDate";
import Link from "next/link";

export default async function StaticPage() {
  const { contents } = await getList({ limit: 3 });
  return (
    <Box as="main">
      <PageTitle title="caltistals.dev" />
      <Profile />
      <Box as="section" my={20}>
        <SectionTitle title="Recent Posts" />
        <List>
          {contents.map((content) => (
            <Link href={`/blogs/${content.id}`} key={content.id}>
              <BlogCard
                title={content.title}
                date={convertDate(content.createdAt)}
              />
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
}
