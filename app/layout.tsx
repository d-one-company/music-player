import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
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
      <body
        className={cn(
          inter.className,
          'grid h-screen grid-flow-row grid-rows-body overflow-hidden'
        )}
      >
        <Banner />
        <PlayerProvider>
          <div className="flex flex-wrap overflow-hidden">
            <Sidebar />
            <Toaster />
            {children}
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
