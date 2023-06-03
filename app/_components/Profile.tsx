import {
  Avatar,
  Box,
  ExternalLinkIcon,
  Flex,
  Heading,
  Link,
  Text,
} from "@/libs";

export function Profile() {
  return (
    <Flex gap={20} alignItems="center" as="section">
      <Avatar
        name="caltistals"
        size="2xl"
        src="/icon.jpg"
        showBorder={true}
        borderColor={"green.500"}
      />

      <Box>
        <Heading as="h3" size="lg">
          Hi! I am caltistals.
        </Heading>
        <Text color="gray">Junior Software Engineer</Text>
        <Text color="gray">Kindai university (B4)</Text>
        <Box>
          <Link
            href="https://github.com/caltistals"
            color="teal.500"
            isExternal
          >
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
