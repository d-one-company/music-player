'use client';

import LargePlayer from '@/components/Player/LargePlayer';
import PlaylistControls from '@/components/Playlist/PlaylistControls';
import PlaylistHeader from '@/components/Playlist/PlaylistHeader';
import PlaylistHero from '@/components/Playlist/PlaylistHero';
import PlaylistTracks from '@/components/Playlist/PlaylistTracks';
import { playlists } from '@/lib/playlists';
import useTrackStore from '@/lib/store';
import { useState } from 'react';

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  const [search, setSearch] = useState('');

  const { playlists: storedPlaylists } = useTrackStore();

  const playlist = [...playlists, ...storedPlaylists].find(
    pl => pl.id === Number(params.id)
  );
  if (!playlist) return null;

  const playlistTracks = playlist?.tracks;

  return (
    <div className="flex h-screen w-full flex-1 basis-[500px] flex-col">
      <PlaylistHero playlist={playlist} />
      <PlaylistControls playlist={playlist} setSearch={setSearch} />
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
