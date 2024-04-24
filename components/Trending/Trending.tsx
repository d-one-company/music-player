'use client';

import TrendingTracks from './TrendingTracks';

const Trending = () => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <p className="text-lg font-semibold">Trending Right Now</p>
      <TrendingTracks className="max-h-[200px] 2xl:max-h-[300px]" />
    </div>
  );
};

export default Trending;
