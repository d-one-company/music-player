import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import Sidebar from '@/components/Sidebar/Sidebar';
import { Toaster } from '@/components/ui/sonner';
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
      <body className={inter.className}>
        <PostHogProvider>
          <PlayerProvider>
            <div className="flex h-screen flex-wrap overflow-hidden">
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
