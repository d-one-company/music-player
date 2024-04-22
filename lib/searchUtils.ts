import type { Track } from '@/types';

export function getSearchedTracks(tracks: Track[], search: string) {
  return tracks.filter(
    track =>
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase()) ||
      track.album.toLowerCase().includes(search.toLowerCase())
  );
}
