import { playlists } from '@/lib/playlists';
import PlaylistItem from '../Playlist/PlaylistItem';

const UsersPlaylists = () => {
  return (
    <div className="scrollbar-sky flex w-full items-center gap-4 overflow-x-auto pb-1">
      {playlists.map(playlist => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default UsersPlaylists;
