import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labanca | Modern Banking",
  description:
    "Labanca helps you save, transfer, and grow your money with secure and fast digital banking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const saved = localStorage.getItem("theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = saved ?? (systemDark ? "dark" : "light");
                document.documentElement.setAttribute("data-theme", theme);
              } catch (_) {}
            })();`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="bg-scene" aria-hidden="true">
          <div className="bg-orb bg-orb-a" />
          <div className="bg-orb bg-orb-b" />
          <div className="bg-orb bg-orb-c" />
          <div className="bg-wave" />
          <div className="bg-grid" />
          <div className="bg-noise" />
        </div>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
