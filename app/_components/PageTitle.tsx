import { Heading } from "@/libs";

export function PageTitle({ title }: { title: string }) {
  return (
    <Heading as="h1" mb="10">
      {title}
    </Heading>
  );
}
