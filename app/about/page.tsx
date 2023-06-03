import { PageTitle } from "../_components/PageTitle";
import { Box } from "@/libs";
import { Profile } from "../_components/Profile";
import { SkillsSection } from "./_components/SkillsSection";
import { WorksSection } from "./_components/WorksSection";

export default function StaticPage() {
  return (
    <Box as="main">
      <PageTitle title="About" />
      <Profile />
      <WorksSection />
      <SkillsSection />
    </Box>
  );
}
