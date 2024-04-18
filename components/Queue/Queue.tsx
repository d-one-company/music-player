'use client';

import { generateFakeTracks } from '@/lib/fakeData';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  const queuedTracks = generateFakeTracks({ count: 10 });

  return (
    <div className="flex max-h-[calc(100%-320px)] max-w-full flex-col overflow-y-auto">
      <p className="pb-2 text-left text-lg font-semibold">Queue</p>
      <div className="flex flex-col space-y-6 pt-8">
        {queuedTracks?.map(track => (
          <QueuedTrack track={track} key={track.id} />
        ))}
      </div>
    </div>
  );
};

export default Queue;
