import { generateFakeTracks } from '@/lib/fakeData';
import PlaylistItem from '../Playlist/PlaylistItem';

const UsersPlaylists = async () => {
  const playlists = generateFakeTracks({ count: 10 });

  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto">
      {playlists.map(playlist => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default UsersPlaylists;
