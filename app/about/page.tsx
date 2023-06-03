import { PageTitle } from "../_components/PageTitle";
import { Box } from "@/libs";
import { Profile } from "../_components/Profile";
import { SkillsSection } from "./_components/SkillsSection";
import { CareerSection } from "./_components/CareerSection";

export default function StaticPage() {
  return (
    <Box as="main">
      <PageTitle title="About" />
      <Profile />
      <CareerSection />
      <SkillsSection />
    </Box>
  );
}
