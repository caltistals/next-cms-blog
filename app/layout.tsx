import { Provider } from "@/libs/Provider";
import { Box, Container } from "@/libs";
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "@next/font/google";
import { Metadata } from "next";
import { Header } from "./_components/Header";

const siteName = "caltistals.dev";
const description = "caltistalsのブログです";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  openGraph: {
    title: siteName,
    description,
  },
  twitter: {
    title: siteName,
    card: "summary_large_image",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notojp.className}>
        <Provider>
          <Container maxW="container.md">
            <Header />
            <Box px={[0, 10, 10, 10]} pt={10} pb={100}>
              {children}
            </Box>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
