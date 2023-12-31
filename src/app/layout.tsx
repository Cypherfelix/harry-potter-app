import "./globals.css";
import "./carousel.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { store } from "@/store";
import { Provider } from "react-redux";
import ReduxProvider from "@/components/reduxProvide";


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
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
