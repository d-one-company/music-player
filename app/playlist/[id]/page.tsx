'use client';

import LargePlayer from '@/components/Player/LargePlayer';
import PlaylistHeader from '@/components/Playlist/PlaylistHeader';
import PlaylistTracks from '@/components/Playlist/PlaylistTracks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getTotalDuration } from '@/lib/getTotalDuration';
import { playlists } from '@/lib/playlists';
import { usePlayerContext } from '@/providers/PlayerContext';
import { Pause, Play, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  const [search, setSearch] = useState('');
  const { isPlaying, togglePlay } = usePlayerContext();

  const playlist = playlists.find(pl => pl.id === Number(params.id));
  if (!playlist) return null;

  const playlistTracks = playlist?.tracks;

  return (
    <div className="flex h-screen flex-1 basis-[500px] flex-col">
      <div className="flex h-[320px] w-full items-end bg-gradient-to-b from-[#2B2B3A] to-transparent px-8 py-10">
        <div className="flex items-end gap-6">
          {playlist?.image && (
            <Image
              src={playlist?.image}
              alt="Playlist Image"
              width={250}
              height={250}
              className="aspect-square self-end object-cover"
            />
          )}
          <div className="flex flex-col items-start gap-5">
            <p>Playlist</p>
            <p className="text-3xl font-bold">{playlist?.title}</p>
            <p className="text-sm text-gray-200/80">
              {playlistTracks?.length} tracks, &nbsp;
              {getTotalDuration(playlistTracks || [])}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 flex w-full items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Search className="size-5 text-gray-200/80" />
          <Input
            placeholder="Search..."
            className="w-[200px] focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-8">
        <PlaylistHeader />
        {!!playlistTracks && (
          <PlaylistTracks search={search} tracks={playlistTracks} />
        )}
      </div>
      <LargePlayer />
    </div>
  );
};

export default Page;
