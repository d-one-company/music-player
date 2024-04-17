import { env } from '@/env';
import { AccessToken, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';

export function useSkipToPreviouseTrack() {
  const { data: session } = useSession();

  const skipToPreviousTrack = async () => {
    if (session?.accessToken) {
      const accessToken: AccessToken = {
        access_token: session.accessToken,
        expires_in: Number(session.expires),
        refresh_token: '',
        token_type: 'Bearer',
      };

      const spotifyApi = SpotifyApi.withAccessToken(
        env.SPOTIFY_CLIENT_ID,
        accessToken
      );

      try {
        const devices = await spotifyApi.player.getAvailableDevices();
        const deviceId = devices.devices.find(device => device.is_active)?.id;

        if (!deviceId) return;

        await spotifyApi.player.skipToPrevious(deviceId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  return skipToPreviousTrack;
}
