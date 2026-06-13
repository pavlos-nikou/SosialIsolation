import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SupportLink — Find the right support, safely",
  description:
    "SupportLink helps young adults understand their support options and connect with the right services — anonymously and at their own pace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}