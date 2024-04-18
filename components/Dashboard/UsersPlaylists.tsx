import { getServerSession } from 'next-auth/next';
import PlaylistItem from '../Playlist/PlaylistItem';
import { generateFakeTracks } from '@/lib/fakeData';

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
