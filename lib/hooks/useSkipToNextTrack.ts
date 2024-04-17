import { useSession } from 'next-auth/react';
import { createSpotifyInstance } from '../helpers/createSpotifyInstance';

export function useSkipToNextTrack() {
  const { data: session } = useSession();

  const skipToNextTrack = async () => {
    if (session?.accessToken && session?.expires) {
      const spotifyApi = createSpotifyInstance(session);

      try {
        const devices = await spotifyApi?.player.getAvailableDevices();
        const deviceId = devices?.devices.find(device => device.is_active)?.id;

        if (!deviceId) return;

        await spotifyApi?.player.skipToNext(deviceId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  return skipToNextTrack;
}
