import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Auth.js Middleware",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          <main className="flex justify-center">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
