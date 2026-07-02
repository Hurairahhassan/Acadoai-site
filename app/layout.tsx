import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcadoAI",
  description:
    "AcadoAI is an AI-powered Education Management platform for school administration, teaching, finance, and student learning.",
  icons: {
    icon: [{ url: "/images/acado-icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/images/acado-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
