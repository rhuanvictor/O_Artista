import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import Link from "next/link";
import { ThemeProvider } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar/navbar";
import { memo, useMemo } from "react";

// Definição única para evitar recriações
const FOOTER_LINK = Object.freeze({
  href: "https://easyui.pro",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "flex items-center gap-1 text-current",
  title: "easyui.pro homepage"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
};

// Memoizando o Navbar para evitar re-renderizações desnecessárias
const MemoizedNavbar = memo(Navbar);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Memoizando a classe do body para evitar reprocessamento
  const bodyClass = useMemo(
    () => clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable),
    []
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyClass}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Memoized Navbar para melhorar a performance */}
          <MemoizedNavbar shouldHideOnScroll />

          {/* Layout otimizado para melhor responsividade */}
          <div className="relative flex flex-col gap-4 w-full items-center justify-between max-w-[1324px] mx-auto">
            <main className="container mx-auto pt-16 px-6 flex-grow">{children}</main>

            {/* Footer otimizado com objeto pré-definido */}
            <footer className="w-full flex items-center justify-center py-3">
              <Link {...FOOTER_LINK}>
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Easy UI</p>
              </Link>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}