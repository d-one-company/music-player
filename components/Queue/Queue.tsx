'use client';

import { tracks } from '@/lib/tracks';
import { usePlayerContext } from '@/providers/PlayerContext';
import QueuedTrack from './QueuedTrack';

const Queue = () => {
  const { currentPlaylist } = usePlayerContext();
  return (
    <>
      <div className="flex w-full px-4 pb-2">
        <p className="text-left text-lg font-semibold">
          {currentPlaylist ? `Next on ${currentPlaylist.title}` : 'Queue'}
        </p>
      </div>
      <div className="scrollbar-sky flex w-full max-w-full flex-1 flex-col space-y-2 overflow-y-auto px-4 pt-2">
        {tracks?.map(track => <QueuedTrack track={track} key={track.id} />)}
      </div>
    </>
  );
};

export default Queue;
