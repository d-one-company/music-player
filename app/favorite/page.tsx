import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import FavoriteTracks from './FavoriteTracks';
import PlaylistBar from '@/components/PlaylistBar/PlaylistBar';

const Page = () => {
  return (
    <>
      <div className="grid h-screen flex-1 grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <Header />
        <main className="flex grow flex-col gap-2 overflow-hidden">
          <p className="text-lg font-semibold">Favourites</p>
          <FavoriteTracks />
        </main>
      </div>
      <PlaylistBar />
    </>
  );
};

export default Page;
