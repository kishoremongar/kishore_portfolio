import type { Metadata } from 'next';
import { Noto_Sans as notoSansImport } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const notoSans = notoSansImport({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'Kishore Mongar',
  description: 'Frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={`${notoSans.variable} antialiased`}>
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
