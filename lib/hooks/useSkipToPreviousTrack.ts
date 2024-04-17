import { useSession } from 'next-auth/react';
import { spotifyApiSetup } from '../helpers/spotifyApiSetup';

export function useSkipToPreviousTrack() {
  const { data: session } = useSession();

  const skipToPreviousTrack = async () => {
    if (session?.accessToken && session?.expires) {
      const spotifyApi = spotifyApiSetup(session);

      try {
        const devices = await spotifyApi?.player.getAvailableDevices();
        const deviceId = devices?.devices.find(device => device.is_active)?.id;

        if (!deviceId) return;

        await spotifyApi?.player.skipToPrevious(deviceId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  return skipToPreviousTrack;
}
