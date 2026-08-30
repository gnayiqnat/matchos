import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NavBar from './navbar.jsx'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen w-full text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
          <div className="relative flex flex-col h-screen">
            <NavBar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
            </footer>
          </div>
      </body>
    </html>
  );
}
