import { notFound } from "next/navigation";
import { getDetail, getList } from "@/libs/microcms";
import { BlogDetail } from "../_components/BlogDetail";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const { title } = await getDetail(postId);

  return { title };
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetail blog={post} />
    </>
  );
}