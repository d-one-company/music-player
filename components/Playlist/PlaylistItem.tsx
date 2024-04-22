'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import type { Playlist } from '@/types';
import { Music2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type Props = { playlist: Playlist };

const PlaylistItem = ({ playlist }: Props) => {
  const router = useRouter();

  const { currentPlaylist } = usePlayerContext();
  if (currentPlaylist?.id === playlist.id) return null;

  return (
    <div
      role="presentation"
      onClick={() => router.push(`/playlist/${playlist.id}`)}
      className="group relative min-h-32 w-44 shrink-0 cursor-pointer"
    >
      <Image
        fill
        alt={playlist.title}
        className="shrink-0 rounded-md"
        src={playlist.image}
      />
      <div className="absolute inset-0 h-full w-full rounded-md bg-muted/20 backdrop-blur-lg" />
      <Button
        className="group absolute left-4 top-4 h-10 w-10 rounded-full p-0 hover:bg-transparent"
        variant="ghost"
      >
        <Music2 className="transition-all duration-200 hover:bg-none group-hover:text-gray-300/80" />
      </Button>
      <div className="absolute bottom-0 flex h-1/2 w-full flex-col justify-center overflow-hidden rounded-b-md bg-muted/20 px-4 text-white/80 backdrop-blur-lg transition-all duration-200 group-hover:text-gray-300/80">
        <p className="line-clamp-1 text-ellipsis">{playlist.title}</p>
        <p className="text-sm">{playlist.tracks?.length || 1} tracks</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
