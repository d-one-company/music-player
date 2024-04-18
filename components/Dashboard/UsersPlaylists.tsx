import { playlists } from '@/lib/playlists';
import PlaylistItem from '../Playlist/PlaylistItem';

const UsersPlaylists = () => {
  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto">
      {playlists.map(playlist => (
        <PlaylistItem key={playlist.title} playlist={playlist} />
      ))}
    </div>
  );
};

export default UsersPlaylists;
