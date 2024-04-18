import type { Playlist } from '@/types';
import { tracks } from './tracks';
import Gradient_1 from '@/public/images/gradient1.jpg';
import Gradient_2 from '@/public/images/gradient2.jpg';
import Gradient_3 from '@/public/images/gradient3.jpg';

export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Hip-Hop',
    image: Gradient_1.src,
    tracks: tracks.slice(0, 3),
  },
  {
    id: 2,
    title: 'Pop',
    image: Gradient_2.src,
    tracks: tracks.slice(3, 5),
  },
  {
    id: 3,
    title: 'Rock',
    image: Gradient_3.src,
    tracks: tracks.slice(5, 7),
  },
];
