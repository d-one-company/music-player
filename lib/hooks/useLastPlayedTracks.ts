import { Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createSpotifyInstance } from '../helpers/createSpotifyInstance';

export function useLastPlayedTracks() {
  const { data: session } = useSession();
  const [lastPlayedTracks, setLastPlayedTracks] = useState<Track[]>();

  useEffect(() => {
    async function fetchLastPlayedTrack() {
      if (!session) return;

      const spotifyApi = createSpotifyInstance(session);

      try {
        const response = await spotifyApi?.player.getRecentlyPlayedTracks();

        setLastPlayedTracks(response?.items.map(item => item.track) as Track[]);
      } catch (error) {
        console.error(error);
      }
    }

    if (session?.accessToken && session?.expires) fetchLastPlayedTrack();
  }, [session?.accessToken, session?.expires, session]);

  return lastPlayedTracks;
}
