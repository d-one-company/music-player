import { Track } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createSpotifyInstance } from '../helpers/createSpotifyInstance';

export function useCurrentlyPlayingTrack(refetchDependency: boolean) {
  const { data: session } = useSession();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      if (!session) return;
      const spotifyApi = createSpotifyInstance(session);

      try {
        const response = await spotifyApi?.player.getCurrentlyPlayingTrack();
        setCurrentTrack(response?.item as Track);
      } catch (error) {
        console.error(error);
      }
    }

    if (session?.accessToken && session?.expires) fetchCurrentlyPlaying();
  }, [session?.accessToken, session?.expires, refetchDependency, session]);

  return currentTrack;
}
