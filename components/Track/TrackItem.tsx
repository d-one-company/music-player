import { PlaylistedTrack, Track } from '@spotify/web-api-ts-sdk';
import Image from 'next/image';

type TrackItemProps = {
  track: PlaylistedTrack<Track>;
};

const TrackItem = ({ track }: TrackItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="shrink-0 grow-0 rounded-md"
        //todo: check URL
        src={track.track.album.images[0].url}
        alt={track.track.name}
        width={65}
        height={65}
      />
      <div className="flex w-[300px] flex-col">
        <p className="max-w-full truncate text-sm">{track.track.name}</p>
        <p className="text-sm text-muted-foreground">
          {track.track.artists.map(artist => artist.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default TrackItem;
