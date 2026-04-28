import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Tracker / Analytics Dashboard",
  description:
    "A finance tracker and analytics dashboard built with Next.js, TypeScript, Tailwind CSS, and Prisma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased min-h-screen flex flex-col`}
      >
        {/* 🚀 THEME PREVENT FLASH */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                const theme = localStorage.getItem("finance-tracker-theme");
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                const isDark = theme === "dark" || (!theme && systemDark);

                document.documentElement.classList.remove("light", "dark");
                document.documentElement.classList.add(isDark ? "dark" : "light");
              } catch (e) {}
            })();
          `}
        </Script>

        <ThemeProvider defaultTheme="system" storageKey="finance-tracker-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
