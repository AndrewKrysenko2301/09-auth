import "modern-normalize";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Note Hub",
  description:
    "Organize your thoughts quickly and efficiently with Note Hub — your personal, clutter-free notebook.",
  openGraph: {
    title: "Note Hub",
    description:
      "Share and revisit your ideas effortlessly with Note Hub — a fast, reliable notebook designed to keep your creativity flowing.",
    url: "https://08-zustand-red-six.vercel.app/",
    images: [
      { url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg" },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TanStackProvider>
          <Header />

          {children}
          {modal}

          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
