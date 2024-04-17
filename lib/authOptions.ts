import { NextAuthOptions } from 'next-auth';
import Spotify from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: { scope: 'streaming user-read-email user-read-private' },
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
    async jwt({ token, user }) {
      if (user) token.spotifyUserId = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user)
        session.user.spotifyUserId = token.spotifyUserId as string;
      return session;
    },
  },
};
