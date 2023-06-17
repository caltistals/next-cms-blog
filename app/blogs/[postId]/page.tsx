import { notFound } from "next/navigation";
import { getDetail, getList } from "@/libs/microcms";
import { BlogDetail } from "../_components/BlogDetail";
import { Metadata } from "next";

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
}): Promise<Metadata> {
  const { title, description } = await getDetail(postId);
  const siteName = "caltistals.dev";

  return {
    title,
    description,
    openGraph: { title: `${title} | ${siteName}`, description },
    twitter: {
      title: `${title} | ${siteName}`,
      description,
      card: "summary_large_image",
    },
  };
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetail blog={post} />
    </>
  );
}
