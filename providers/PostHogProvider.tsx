'use client';

import posthog from 'posthog-js';
import { PostHogProvider as Provider } from 'posthog-js/react';

if (process.env.NEXT_PUBLIC_POSTHOG_KEY && typeof window !== 'undefined')
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: 'https://eu.i.posthog.com',
    capture_pageview: false,
    capture_pageleave: true,
  });

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider client={posthog}>{children}</Provider>;
}
