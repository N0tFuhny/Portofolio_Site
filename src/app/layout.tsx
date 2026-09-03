import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizky Abdillah — AI Engineer Portfolio",
  description: "An AI Engineering portfolio focused on practical machine learning systems, research, and thoughtful technical collaboration.",
  openGraph: { title: "Rizky Abdillah — AI Engineer Portfolio", description: "Building my path toward AI Engineering.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
