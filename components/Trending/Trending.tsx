'use client';

import { usePlayerContext } from '@/providers/PlayerContext';
import TrendingTracks from './TrendingTracks';

const Trending = () => {
  const { currentPlaylist } = usePlayerContext();

  return (
    <div className="flex w-full flex-col space-y-2">
      <p className="text-lg font-semibold">
        {currentPlaylist ? currentPlaylist.title : 'Trending Right Now'}
      </p>
      <TrendingTracks className="max-h-[200px] 2xl:max-h-[300px]" />
    </div>
  );
};

export default Trending;
