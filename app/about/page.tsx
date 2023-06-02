import { PageTitle } from "../_components/PageTitle";
import { Box } from "@/libs";
import { Profile } from "../_components/Profile";
import { SkillsSection } from "./_components/SkillsSection";

export default function StaticPage() {
  return (
    <Box as="main">
      <PageTitle title="About" />
      <Profile />
      <SkillsSection />
    </Box>
  );
}
