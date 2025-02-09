import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Provider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconFileCv,
  IconGridDots,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

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
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "Projects",
    icon: (
      <IconGridDots className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Resume",
    icon: (
      <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://drive.google.com/file/d/1oaqENrqKdB07KpNqcjNhQze8_4gXleDv/view?usp=sharing",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/dinesh-babu-cheemaladari-4b9902136/",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/CHDINES95141791",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/chdineshbabu/",
  },
];
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
          <div className="w-full flex justify-center">
            <div className="fixed bottom-4 z-50">
              <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
              />
            </div>
          </div>
        </body>
        <ThemeSwitcher />
      </Providers>
    </html>
  );
}
