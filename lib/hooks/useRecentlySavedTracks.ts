import { Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createSpotifyInstance } from '../helpers/createSpotifyInstance';

export function useRecentlySavedTracks() {
  const { data: session } = useSession();
  const [recentlySavedTracks, setRecentlySavedTracks] = useState<Track[]>();

  useEffect(() => {
    async function fetchRecentlySavedTracks() {
      if (!session) return;

      const spotifyApi = createSpotifyInstance(session);

      try {
        const response = await spotifyApi?.currentUser.tracks.savedTracks();

        if (response?.items)
          setRecentlySavedTracks(response.items.map(item => item.track));
      } catch (error) {
        console.error(error);
      }
    }

    if (session?.accessToken && session?.expires) fetchRecentlySavedTracks();
  }, [session?.accessToken, session?.expires, session]);

  return recentlySavedTracks;
}
