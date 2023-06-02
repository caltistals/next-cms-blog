import { Heading } from "@/libs";

export function SectionTitle({ title }: { title: string }) {
  return (
    <Heading as="h2" size="lg" my={10}>
      {title}
    </Heading>
  );
}
