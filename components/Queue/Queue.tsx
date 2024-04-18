'use client';

import { useLastPlayedTracks } from '@/lib/hooks/useLastPlayedTracks';
import { useQueuedTracks } from '@/lib/hooks/useQueuedTracks';
import { Track } from '@spotify/web-api-ts-sdk';
import { useEffect, useState } from 'react';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  const [playerTracks, setPlayerTracks] = useState<Track[] | null>();
  const queuedTracks = useQueuedTracks();

  const lastPlayedTracks = useLastPlayedTracks();

  useEffect(() => {
    setPlayerTracks(queuedTracks?.length ? queuedTracks : lastPlayedTracks);
  }, [queuedTracks, lastPlayedTracks]);

  return (
    <div className="flex max-h-[calc(100%-320px)] flex-col overflow-y-auto">
      <p className="pb-2 text-left text-lg font-semibold">
        {!queuedTracks?.length ? 'Recently Played' : 'Queue'}
      </p>
      <div className="flex flex-col space-y-6 pt-8">
        {playerTracks?.map(track => (
          <QueuedTrack track={track} key={track.id} />
        ))}
      </div>
    </div>
  );
};

export default Queue;
