"use client";

import { selectedColor } from "@/common/colors";
import { navLinks } from "@/common/navLinks";
import { DuckIcon } from "@/icons/DuckIcon";
import { Box, Container, Flex, Text } from "@/libs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  label,
  href,
  currentPath,
}: {
  label: string;
  href: string;
  currentPath: string;
}) {
  let bgColor = currentPath.includes(href) ? selectedColor.bg : "";
  let textColor = currentPath.includes(href) ? selectedColor.text : "";
  if (label === "Home") {
    bgColor = currentPath === href ? selectedColor.bg : "";
    textColor = currentPath === href ? selectedColor.text : "";
  }
  return (
    <Link href={href}>
      <Text
        fontSize="sm"
        mr={label === "Blog" ? 0 : 5}
        bgColor={bgColor}
        color={textColor}
        px={4}
        py={1.5}
        borderRadius="lg"
        _hover={{ bg: selectedColor.bg, color: selectedColor.text }}
      >
        {label}
      </Text>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <Box py={5}>
      <Container maxW="container.md">
        <Flex as="header" justifyContent="space-between">
          <Link href="/">
            <DuckIcon />
          </Link>
          <Flex justifyContent="space-evenly">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.label}
                label={navLink.label}
                href={navLink.href}
                currentPath={pathname}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
