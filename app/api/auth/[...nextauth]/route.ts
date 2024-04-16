import NextAuth from 'next-auth';
import Spotify from 'next-auth/providers/spotify';

const handler = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: { scope: 'streaming  user-read-email user-read-private' },
      },
    }),
  ],
});

export { handler as GET, handler as POST };
