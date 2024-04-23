'use client';

import { playlists } from '@/lib/playlists';
import useTrackStore from '@/lib/store';
import PlaylistItem from '../Playlist/PlaylistItem';

const UsersPlaylists = () => {
  const { playlists: storePlaylists } = useTrackStore();
  return (
    <div className="scrollbar-sky flex w-full items-center gap-4 overflow-x-auto pb-1">
      {[...playlists, ...storePlaylists].map(playlist => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default UsersPlaylists;
