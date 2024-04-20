import type { Playlist } from '@/types';
import { tracks } from './tracks';

export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Hip-Hop',
    image: 'https://utfs.io/f/4207d69a-f3f3-4efa-9085-ef6d6a5bd777-p2gkcf.jpg',
    tracks: tracks.slice(0, 5),
  },
  {
    id: 2,
    title: 'Pop',
    image: 'https://utfs.io/f/2ec16445-2bbd-4b81-984c-208120380298-p2gkce.jpg',
    tracks: tracks.slice(3, 7),
  },
  {
    id: 3,
    title: 'Rock',
    image: 'https://utfs.io/f/e614b606-8a85-430a-87a3-fc836e92a428-p2gkcd.jpg',
    tracks: tracks.slice(5, 12),
  },
  {
    id: 4,
    title: 'Indie-Pop',
    image: 'https://utfs.io/f/ca7537ae-166c-46a5-b8bd-f2b3f9367905-p2gkcc.jpg',
    tracks: tracks.slice(7, 13),
  },
  {
    id: 5,
    title: 'Jazz',
    image: 'https://utfs.io/f/7ffc9fc8-4beb-42fa-96bf-7762bbafe233-p2gkcb.jpg',
    tracks: tracks.slice(13, 22),
  },
  {
    id: 6,
    title: 'Party',
    image: 'https://utfs.io/f/1d65f439-76fa-488b-82b8-eebff4da33ae-p2gkca.jpg',
    tracks: tracks.slice(22, 30),
  },
  {
    id: 7,
    title: 'Metal',
    image: 'https://utfs.io/f/c4b3f58c-23f9-4d39-94b3-84de48f9ca8d-p2gkc9.jpg',
    tracks: tracks.slice(20, 30),
  },
];
