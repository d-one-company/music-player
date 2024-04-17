import { env } from '@/env';
import { AccessToken, SpotifyApi, Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function useQueuedTracks() {
  const { data: session } = useSession();
  const [queuedTracks, setQueuedTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    async function fetchCurrentlyPlaying(accessToken: AccessToken) {
      const spotifyApi = SpotifyApi.withAccessToken(
        env.SPOTIFY_CLIENT_ID!,
        accessToken
      );

      try {
        const response = await spotifyApi.player.getUsersQueue();
        setQueuedTracks(response.queue as Track[]);
      } catch (error) {
        console.error(error);
      }
    }

    if (session?.accessToken) {
      const accessToken: AccessToken = {
        access_token: session.accessToken,
        expires_in: Number(session.expires),
        refresh_token: '',
        token_type: 'Bearer',
      };

      fetchCurrentlyPlaying(accessToken);
    }
  }, [session?.accessToken, session?.expires]);

  return queuedTracks;
}
