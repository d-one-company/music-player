import { env } from '@/env';
import { AccessToken, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function usePlayPause() {
  const { data: session } = useSession();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const fetchPlaybackState = async () => {
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
          const currentPlayer = await spotifyApi.player.getPlaybackState();

          setIsPlaying(currentPlayer.is_playing);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchPlaybackState();
  }, [session?.accessToken, session?.expires]);

  const playPauseTrack = async () => {
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

        const currentPlayer = await spotifyApi.player.getPlaybackState();

        if (currentPlayer.is_playing) {
          await spotifyApi.player.pausePlayback(deviceId);

          setIsPlaying(false);

          return;
        } else {
          await spotifyApi.player.startResumePlayback(deviceId);

          setIsPlaying(true);

          return;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  return { playPauseTrack, isPlaying };
}
