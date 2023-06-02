import { selectedColor } from "@/common/colors";
import { Box, ListItem, Text } from "@/libs";

type Props = {
  title: string;
  date: string;
};

export function BlogCard({ title, date }: Props) {
  return (
    <ListItem
      _hover={{ bg: selectedColor.bg }}
      role="group"
      py={5}
      px={3}
      borderRadius="lg"
    >
      <Text _groupHover={{ color: selectedColor.subText }}>{title}</Text>
      <Text color="gray" _groupHover={{ color: selectedColor.subText }}>
        {date}
      </Text>
    </ListItem>
  );
}
