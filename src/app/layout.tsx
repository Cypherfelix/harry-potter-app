import "./globals.css";
import "./carousel.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter",
  description: "A Harry Potter cast page built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      /> */}
      {/* <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
