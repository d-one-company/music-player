import { env } from '@/env';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Session } from 'next-auth';

interface AccessToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: 'Bearer';
}

export function createSpotifyInstance(session: Session) {
  if (session?.accessToken) {
    const accessToken: AccessToken = {
      access_token: session.accessToken,
      expires_in: Number(session.expires),
      refresh_token: '',
      token_type: 'Bearer',
    };
    return SpotifyApi.withAccessToken(
      env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      accessToken
    );
  }
}
