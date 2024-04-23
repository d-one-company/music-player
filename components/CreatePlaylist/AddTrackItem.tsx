'use client';

import { cn } from '@/lib/utils';
import type { Track } from '@/types';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

type AddTrackItemProps = { track: Track; onClick: () => void; added?: boolean };

const AddTrackItem = ({ track, added, onClick }: AddTrackItemProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between gap-4 rounded-sm p-2.5 transition-colors duration-200',
        added && 'bg-gray-200/20'
      )}
    >
      <div className="flex flex-shrink-0 flex-grow items-center justify-start gap-4">
        <Image
          src={track.image}
          alt={track.title}
          className="aspect-square rounded-sm"
          width={55}
          height={55}
        />
        <div className="flex h-full w-[100px] flex-col gap-0.5">
          <span className="max-w-full truncate text-sm">{track.title}</span>
          <span className="text-xs text-muted-foreground">{track.artist}</span>
        </div>
      </div>
      <div className="col-span-2 hidden w-[150px] items-center justify-center xl:flex">
        <span className="text-sm text-muted-foreground">{track.album}</span>
      </div>
      <Button
        variant="ghost"
        className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
        onClick={onClick}
      >
        {added ? <Minus /> : <Plus />}
      </Button>
    </div>
  );
};

export default AddTrackItem;
