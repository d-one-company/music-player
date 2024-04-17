import { NextAuthOptions } from 'next-auth';
import Spotify from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope:
            'streaming playlist-read-private playlist-read-collaborative user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing',
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
    async jwt({ token, account }) {
      if (account?.access_token && account?.expires_at) {
        token.accessToken = account.access_token;
        token.accessTokenExpires = account.expires_at;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;

      return session;
    },
  },
};
