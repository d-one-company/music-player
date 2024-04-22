import Header from '@/components/Header';
import AllTracks from '@/components/Search/AllTracks';
import { usePlayerContext } from '@/providers/PlayerContext';

const Page = () => {
  return (
    <div className="flex h-screen flex-1 basis-[500px]">
      <div className="grid flex-1 grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <Header />
        <main className="flex max-h-[calc(100%-50px)] grow flex-col overflow-hidden">
          <p className="mb-2 text-lg font-semibold">Browse tracks</p>
          <div className="scrollbar-sky flex w-full flex-col space-y-2 overflow-y-auto">
            <AllTracks />
          </div>
          {/* <Trending /> */}
          {/* <RecentFavourites /> */}
        </main>
      </div>
    </div>
  );
};

export default Page;
