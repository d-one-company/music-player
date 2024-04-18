import { env } from '@/env';
import { NextAuthOptions } from 'next-auth';
import Spotify from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  providers: [
    Spotify({
      clientId: env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            'streaming playlist-read-private playlist-read-collaborative user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played',
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images[0]?.url ?? null,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.access_token && account?.expires_at) {
        token.accessToken = account.access_token;
        token.accessTokenExpires = account.expires_at;
      }

      if (user) token.spotifyUserId = user.id;

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      if (session.user)
        session.user.spotifyUserId = token.spotifyUserId as string;

      return session;
    },
  },
};
