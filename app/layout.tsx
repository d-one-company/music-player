import Sidebar from '@/components/Sidebar/Sidebar';
import { PlayerProvider } from '@/providers/PlayerContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music Player',
  description: 'Music Player',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <PlayerProvider>
          <div className="flex h-screen flex-wrap overflow-hidden">
            <Sidebar />
            {children}
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
