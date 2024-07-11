import {
  ClerkProvider
} from '@clerk/nextjs'
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/sonner';

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MuriaLingo",
  description: "Aprende con MuriaLingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
