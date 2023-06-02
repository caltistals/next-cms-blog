import { Blog } from "@/libs/microcms";
import { Stack, Container, Heading, Divider, Text } from "@/libs/";
import { MarkdownTemplate } from "@/libs/MarkdownTEmplate";
import Image from "next/image";
import { convertDate } from "@/libs/convertDate";

type Props = {
  blog: Blog;
};

export function BlogDetail({ blog }: Props) {
  return (
    <Container as="article">
      <Stack spacing={8}>
        <Text color="gray">{convertDate(blog.createdAt)}</Text>
        <Heading as="h1" size="lg">
          {blog.title}
        </Heading>
        {blog.eyecatch?.url &&
          blog.eyecatch?.width &&
          blog.eyecatch?.height && (
            <Image
              src={blog.eyecatch?.url}
              width={blog.eyecatch?.width}
              height={blog.eyecatch?.height}
              alt={blog.title}
            />
          )}
      </Stack>
      <Divider my={8} />
      <MarkdownTemplate source={blog.content} />
    </Container>
  );
}
