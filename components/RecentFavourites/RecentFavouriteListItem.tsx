import type { PlaylistedTrack, Track } from '@spotify/web-api-ts-sdk';
import Image from 'next/image';

type RecentFavouriteListItemProps = {
  track: PlaylistedTrack<Track>;
};

const RecentFavouriteListItem = ({
  track: { track },
}: RecentFavouriteListItemProps) => {
  return (
    <div className="flex size-28 shrink-0 grow-0 flex-col space-y-1">
      <div className="relative size-24">
        <Image
          src={track.album.images[0].url}
          alt={track.name}
          fill
          className="rounded-md"
        />
      </div>
      <p className="truncate text-sm">{track.name}</p>
      <p className="truncate text-xs text-muted-foreground">
        {track.artists[0].name}
      </p>
    </div>
  );
};

export default RecentFavouriteListItem;
