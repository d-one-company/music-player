import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
  },
  client: {
    //
  },
  shared: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
  },
  runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
});
