import Header from '@/components/Header';
import PlaylistBar from '@/components/PlaylistBar/PlaylistBar';
import FavoriteTracks from './FavoriteTracks';

const Page = () => {
  return (
    <>
      <div className="grid h-full flex-1 grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <Header />
        <main className="flex grow flex-col gap-2 overflow-hidden">
          <p className="text-lg font-semibold">Favourites</p>
          <div className="w-full scroll-shadow scroll-shadow-size-5 scroll-shadow-background">
            <FavoriteTracks />
          </div>
        </main>
      </div>
      <PlaylistBar />
    </>
  );
};

export default Page;
