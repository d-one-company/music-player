import SessionWrapper from '@/components/SessionWrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music Player',
  description: 'Music Playey',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <SessionWrapper>
      <html lang="en" className="dark">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
