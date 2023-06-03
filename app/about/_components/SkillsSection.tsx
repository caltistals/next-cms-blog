import { SectionTitle } from "@/app/_components/SectionTItle";
import { Box, SimpleGrid } from "@/libs";
import { Skill, SkillCard } from "./SkillCard";
import { ReactIcon } from "@/icons/ReactIcon";
import { NextIcon } from "@/icons/NextIcon";
import { JavaIcon } from "@/icons/JavaIcon";
import { JavaScriptIcon } from "@/icons/JavaScriptIcon";
import { TypeScriptIcon } from "@/icons/TypeScriptIcon";
import { GoIcon } from "@/icons/GoIcon";

const skills: Skill[] = [
  { icon: <JavaIcon />, label: "Java", startedAt: "May, 2020", progress: 40 },
  {
    icon: <JavaScriptIcon />,
    label: "JavaScript",
    startedAt: "April, 2022",
    progress: 40,
  },
  {
    icon: <ReactIcon />,
    label: "React",
    startedAt: "May, 2022",
    progress: 40,
  },
  {
    icon: <TypeScriptIcon />,
    label: "TypeScript",
    startedAt: "July, 2022",
    progress: 40,
  },
  {
    icon: <NextIcon />,
    label: "Next.js",
    startedAt: "July, 2022",
    progress: 30,
  },
  {
    icon: <GoIcon />,
    label: "Go",
    startedAt: "April, 2023",
    progress: 10,
  },
];

export function SkillsSection() {
  return (
    <Box as="section">
      <SectionTitle title="Skill Set" />
      <SimpleGrid columns={[2, 3, 4]} spacing={5}>
        {skills.map((skill) => (
          <SkillCard {...skill} key={skill.label} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
