import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "@/lib/utils";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akinsanya",
  description: "Akinsanya Joel portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${mont.className} bg-slate-50 dark:bg-black`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
