import type { Metadata } from "next";
import { Fraunces, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SplashGate } from "@/components/layout/SplashGate";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Basil",
  description: "Restaurant website for my Mother, with love - Angel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", fraunces.variable, lato.variable)}
    >
      <head>
        {/* Reloading mid-page (browsers restore scroll position by default) landed the nav's
            transparent/Hero-photo styling over a lighter section, reading as "invisible" for a
            frame — that styling assumes scroll 0. Forcing every load to start at the top keeps
            that assumption true, so there's nothing to correct once React hydrates. Must run
            before the browser's own scroll restoration, hence a plain blocking script, not a
            React effect. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SplashGate>{children}</SplashGate>
      </body>
    </html>
  );
}
