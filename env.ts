import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    UPLOADTHING_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_UPLOADTHING_APP_ID: z.string().min(1),
  },
  shared: {},
  runtimeEnv: {
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    NEXT_PUBLIC_UPLOADTHING_APP_ID: process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID,
  },
});
