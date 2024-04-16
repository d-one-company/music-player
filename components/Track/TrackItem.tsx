import Image from 'next/image';
import React from 'react';

type TrackItemProps = {
  track: {
    id: number;
    title: string;
    artist: string;
    img: string;
    duration: string;
  };
};

const TrackItem = ({
  track: { id, title, artist, img, duration },
}: TrackItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="w-20 px-4 text-muted-foreground">{id}</p>
      <div className="flex items-center gap-4">
        <Image
          className="shrink-0 grow-0 rounded-md"
          src={img}
          alt={title}
          width={65}
          height={65}
        />
        <div className="flex w-[300px] flex-col">
          <p className="max-w-full truncate text-sm">{title}</p>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
