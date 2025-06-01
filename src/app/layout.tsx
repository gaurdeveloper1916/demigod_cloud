import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "DemigodCloud - Web & Mobile App Development Company",
  description: "Top provider of web and app development services across the globe. We offer iOS & Android app development and web solutions at cost-effective prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout>{children}</MainLayout>
        </Suspense>
      </body>
    </html>
  );
}
