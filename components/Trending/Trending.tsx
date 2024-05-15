'use client';

import TrendingTracks from './TrendingTracks';

const Trending = () => {
  return (
    <div className="flex w-full flex-1 flex-col space-y-2 overflow-hidden">
      <p className="text-lg font-semibold">Trending Right Now</p>
      <TrendingTracks className="flex-1" />
    </div>
  );
};

export default Trending;
