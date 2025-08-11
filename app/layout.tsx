import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import "highlight.js/styles/atom-one-dark.css";

import "katex/dist/katex.min.css";

const mont = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akinsanya",
  description: "Akinsanya Joel portfolio",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={cn(`${mont.className} bg-slate-100 dark:bg-black`)}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen ">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
