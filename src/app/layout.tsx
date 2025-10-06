import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import "./globals.css";


const inter = Inter({
  subsets: ['latin'], 
  display: 'swap',    // Helps with flash of unstyled text
});

/*
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
*/

export const metadata: Metadata = {
  title: "Tony Brierly Portfolio",
  description: "Tony Brierly Portfolio",
  // viewport: "width=device-width, initial-scale=1, interactive-widget=resizes-content",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
