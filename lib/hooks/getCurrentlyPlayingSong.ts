import { AccessToken, SpotifyApi, Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function useCurrentPlayingTrack() {
  const { data: session } = useSession();
  const [currentSong, setCurrentSong] = useState<Track | null>(null);

  useEffect(() => {
    async function fetchCurrentlyPlaying(accessToken: AccessToken) {
      const spotifyApi = SpotifyApi.withAccessToken(
        process.env.SPOTIFY_CLIENT_ID!,
        accessToken
      );

      try {
        const response = await spotifyApi.player.getCurrentlyPlayingTrack();
        setCurrentSong(response.item as Track);
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

  return currentSong;
}
