import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Progress,
  Text,
  VStack,
} from "@/libs";
import { ReactNode } from "react";

export type Skill = {
  icon: ReactNode;
  label: string;
  startedAt: string;
  progress: number;
};

export function SkillCard({ icon, label, startedAt, progress }: Skill) {
  return (
    <Card>
      <CardBody>
        <VStack>
          {icon}
          <Heading as="h4" size="sm">
            {label}
          </Heading>
          <Text fontSize="xs" color="gray">
            {startedAt} -
          </Text>
        </VStack>
        <Progress mt={3} size="xs" colorScheme="green" value={progress} />
      </CardBody>
    </Card>
  );
}
