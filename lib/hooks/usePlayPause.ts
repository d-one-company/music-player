import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { spotifyApiSetup } from '../helpers/spotifyApiSetup';

export function usePlayPause() {
  const { data: session } = useSession();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const fetchPlaybackState = async () => {
      if (session?.accessToken && session?.expires) {
        const spotifyApi = spotifyApiSetup(session);
        try {
          const currentPlayer = await spotifyApi?.player.getPlaybackState();

          if (!currentPlayer) return;

          setIsPlaying(currentPlayer.is_playing);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPlaybackState();
  }, [session?.accessToken, session?.expires, session]);

  const playPauseTrack = async () => {
    if (session?.accessToken && session?.expires) {
      const spotifyApi = spotifyApiSetup(session);
      try {
        const devices = await spotifyApi?.player.getAvailableDevices();
        const deviceId = devices?.devices.find(device => device.is_active)?.id;

        if (!deviceId) return;

        const currentPlayer = await spotifyApi?.player.getPlaybackState();

        if (currentPlayer?.is_playing) {
          await spotifyApi?.player.pausePlayback(deviceId);
          setIsPlaying(false);
        } else {
          await spotifyApi?.player.startResumePlayback(deviceId);
          setIsPlaying(true);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  return { playPauseTrack, isPlaying };
}
