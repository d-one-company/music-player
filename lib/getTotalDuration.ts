import { Track } from '@/types';

export function getTotalDuration(tracks: Track[]): string {
  const totalMinutes = tracks.reduce((acc, track) => {
    const [minutes, seconds] = track.duration.split(':').map(Number);
    return acc + minutes + seconds / 60;
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} hr`;

  return `${hours} hr ${minutes} min`;
}
