import { selectedColor } from "@/common/colors";
import { POST_PER_PAGE } from "@/common/siteSettings";
import { Box, HStack, Text } from "@/libs";
import Link from "next/link";

type Props = {
  totalCount: number;
  currentPage?: number;
};

export function Pagination({ totalCount, currentPage = 1 }: Props) {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pageCount = Math.ceil(totalCount / POST_PER_PAGE);

  const getPaginationItem = (p: number) => {
    if (p === currentPage)
      return (
        <Text
          bg={selectedColor.bg}
          color={selectedColor.text}
          px={2}
          py={1}
          borderRadius="md"
        >
          {p}
        </Text>
      );
    return (
      <Link href={`/blogs/page/${p}`}>
        <Text
          px={2}
          py={1}
          borderRadius="md"
          _hover={{ bg: selectedColor.bg, color: selectedColor.text }}
        >
          {p}
        </Text>
      </Link>
    );
  };

  return (
    <HStack spacing={2} justifyContent="center" my={10}>
      {range(1, pageCount).map((number, index) => (
        <Box key={index}>
          {/* <Link href={`/blogs/page/${number}`}>{number}</Link> */}
          {getPaginationItem(number)}
        </Box>
      ))}
    </HStack>
  );
}
