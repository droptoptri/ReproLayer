import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReproLayer — Turn AI agent failures into regression tests",
  description:
    "ReproLayer helps AI-native teams investigate production agent failures, reproduce root causes, and convert failures into regression tests.",
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
