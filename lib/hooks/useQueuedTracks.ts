import { Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createSpotifyInstance } from '../helpers/createSpotifyInstance';

export function useQueuedTracks() {
  const { data: session } = useSession();
  const [queuedTracks, setQueuedTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      if (!session) return;
      const spotifyApi = createSpotifyInstance(session);

      try {
        const response = await spotifyApi?.player.getUsersQueue();
        setQueuedTracks(response?.queue as Track[]);
      } catch (error) {
        console.error(error);
      }
    }

    if (session?.accessToken && session?.expires) {
      fetchCurrentlyPlaying();
    }
  }, [session?.accessToken, session?.expires, session]);

  return queuedTracks;
}
