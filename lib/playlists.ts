import Gradient_1 from '@/public/images/gradient1.jpg';
import Gradient_2 from '@/public/images/gradient2.jpg';
import Gradient_3 from '@/public/images/gradient3.jpg';
import Gradient_4 from '@/public/images/gradient4.jpg';
import Gradient_5 from '@/public/images/gradient5.jpg';
import Gradient_6 from '@/public/images/gradient6.jpg';
import Gradient_7 from '@/public/images/gradient7.jpg';

import type { Playlist } from '@/types';
import { tracks } from './tracks';

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
  {
    id: 4,
    title: 'Indie-Pop',
    image: Gradient_4.src,
    tracks: tracks.slice(7, 13),
  },
  {
    id: 5,
    title: 'Jazz',
    image: Gradient_5.src,
    tracks: tracks.slice(13, 20),
  },
  {
    id: 6,
    title: 'Party',
    image: Gradient_6.src,
    tracks: tracks.slice(20, 24),
  },
  {
    id: 7,
    title: 'Metal',
    image: Gradient_7.src,
    tracks: tracks.slice(24, 29),
  },
];
