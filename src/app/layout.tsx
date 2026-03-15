import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Swathi Bandari — Software Engineer",
  description:
    "Software Engineer building scalable backend systems, microservices, and enterprise platforms. Currently at Walmart.",
  keywords: [
    "Swathi Bandari",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "Backend",
    "Walmart",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
