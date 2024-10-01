import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Provider";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
              <div className="flex justify-between nav">
        <div>
          <h1 className="font-poppins opacity-75 hover:text-sky-300 transition-all delay-75 font-medium text-xl">
            DINESH BABU
          </h1>
        </div>
        <div className="font-poppins  gap-3 items-end opacity-75 text-lg flex cursor-pointer">
          <a href="/projects">Projects</a>
          <a
            href="https://drive.google.com/file/d/1oaqENrqKdB07KpNqcjNhQze8_4gXleDv/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
          <a href="mailto:chdinesh4128@gmail.com">Contact</a>
        </div>
      </div>
        {children}
      </body>
      <ThemeSwitcher />
      </Providers>
    </html>
  );
}
