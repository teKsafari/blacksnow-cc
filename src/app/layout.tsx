import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackSnow Community",
  description: "Issues, feedback, and discussion for BlackSnow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
