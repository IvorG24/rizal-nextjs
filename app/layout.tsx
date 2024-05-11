import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontWhisper } from "@/config/fonts";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import clsx from "clsx";
import ActiveSectionContextProvider from "@/context/active-section-context";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen h-full font-whisper antialiased",
          fontWhisper.variable
        )}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ActiveSectionContextProvider>
          <Providers>
            <div className="relative flex flex-col flex-1 ">
              <Navbar />
              <main className="min-h-screen h-full w-full flex-1 ">
                {children}
              </main>

              <footer className=" w-full flex justify-center items-center h-36 gap-2 bg-black/90">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">CPE 42</p>
              </footer>
            </div>
          </Providers>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
