import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReproLayer — Reliability reviews for AI agents",
  description:
    "ReproLayer helps AI-agent teams review production failures, find recurring patterns, and turn high-risk incidents into reproducible regression test specs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
