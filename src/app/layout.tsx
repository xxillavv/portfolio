import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import "./reset.scss";
import { Header } from "@/components/layout/Header/Header";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Full-stack developer from Lviv, Ukraine. React, Next.js, NestJS, PostgreSQL. Projects: NEXUS.gg, Telegram AI assistant and more.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-henna-mu-57.vercel.app"),
  title: {
    default: "Vladyslav Paniv — Full-Stack Developer",
    template: "%s · Vladyslav Paniv",
  },
  description,
  openGraph: {
    title: "Vladyslav Paniv — Full-Stack Developer",
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
