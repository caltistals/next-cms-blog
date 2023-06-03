import { SectionTitle } from "@/app/_components/SectionTItle";
import { Box, Flex, Heading, List, ListItem, Text } from "@/libs";

type CareerProps = {
  companyName: string;
  position: string;
  period: string;
};

const works: CareerProps[] = [
  {
    companyName: "株式会社80&Company(Intern)",
    position: "Software Engineering",
    period: "Dec, 2022 - May, 2023",
  },
  {
    companyName: "フェンリル株式会社(Intern)",
    position: "Webアプリコース",
    period: "Sep, 2022",
  },
  {
    companyName: "チームラボ株式会社(Intern)",
    position: "Webアプリエンジニア",
    period: "Aug, 2022 - Sep, 2022",
  },
];

function Career({ companyName, position, period }: CareerProps) {
  return (
    <ListItem py={2}>
      <Heading as="h4" size="sm">
        {companyName}
      </Heading>
      <Flex justifyContent="space-between" color="gray">
        <Text fontSize={14}>{position}</Text>
        <Text fontSize={14}>{period}</Text>
      </Flex>
    </ListItem>
  );
}

export function CareerSection() {
  return (
    <Box as="section">
      <SectionTitle title="Career" />
      <List>
        {works.map((work) => (
          <Career key={work.companyName} {...work} />
        ))}
      </List>
    </Box>
  );
}
