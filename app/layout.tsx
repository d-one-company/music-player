import Banner from '@/components/Banner';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import Sidebar from '@/components/Sidebar/Sidebar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { PlayerProvider } from '@/providers/PlayerContext';

import PostHogProvider from '@/providers/PostHogProvider';
import './globals.css';

const PostHogPageView = dynamic(() => import('@/providers/PostHogPageView'), {
  ssr: false,
});

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
        <PostHogProvider>
          <PlayerProvider>
            <div className="flex flex-wrap overflow-hidden">
              <PostHogPageView />
              <Sidebar />
              <Toaster />
              {children}
            </div>
          </PlayerProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
