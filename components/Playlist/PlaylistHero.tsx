import { getTotalDuration } from '@/lib/getTotalDuration';
import { Playlist } from '@/types';
import Image from 'next/image';

type Props = { playlist: Playlist };

const PlaylistHero = ({ playlist }: Props) => {
  const playlistTracks = playlist?.tracks;

  return (
    <div className="flex h-[320px] w-full items-end gap-6 bg-gradient-to-b from-[#2B2B3A] to-transparent px-8 py-10">
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
  );
};

export default PlaylistHero;
