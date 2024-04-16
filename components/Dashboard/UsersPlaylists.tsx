import { authOptions } from '@/lib/authOptions';
import spotifyApi from '@/lib/spotify';
import { getServerSession } from 'next-auth/next';
import PlaylistItem from '../Playlist/PlaylistItem';

const UsersPlaylists = async () => {
  const session = await getServerSession(authOptions);

  const playlists = await spotifyApi.playlists.getUsersPlaylists(
    session?.user?.spotifyUserId as string
  );

  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto">
      {playlists.items.map(playlist => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default UsersPlaylists;
