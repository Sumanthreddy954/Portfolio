import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Provider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FloatingDock } from "@/components/ui/floating-dock";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dinesh's Resume",
  description: "This CH Dinesh babu resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black bg-white transition-all delay-75 mx-4 lg:mx-96 px-6 my-12 dark:text-white text-black`}
        >
          {children}
        </body>
        <ThemeSwitcher />
      </Providers>
    </html>
  );
}
