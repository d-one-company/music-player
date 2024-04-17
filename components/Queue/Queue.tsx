'use client';

import { useQueuedTracks } from '@/lib/hooks/useQueuedTracks';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  const queuedTracks = useQueuedTracks();

  return (
    <div className="flex max-h-[calc(100%-320px)] flex-col overflow-y-auto">
      <div className="flex flex-col space-y-6 pt-8">
        {queuedTracks?.map(track => (
          <QueuedTrack track={track} key={track.id} />
        ))}
      </div>
    </div>
  );
};

export default Queue;
