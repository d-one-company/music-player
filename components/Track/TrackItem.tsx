import { Track } from '@/types/track';
import Image from 'next/image';

type TrackItemProps = {
  track: Track;
};

const TrackItem = ({ track }: TrackItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="shrink-0 grow-0 rounded-md"
        //todo: check URL
        src={track.img}
        alt={track.title}
        width={55}
        height={55}
      />
      <div className="flex w-[300px] flex-col">
        <p className="max-w-full truncate text-sm">{track.title}</p>
        <p className="text-sm text-muted-foreground">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackItem;
