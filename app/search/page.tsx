import Header from '@/components/Header';
import PlaylistBar from '@/components/PlaylistBar/PlaylistBar';
import AllTracks from '@/components/Search/AllTracks';

const Page = () => {
  return (
    <div className="flex h-full flex-1 basis-[500px]">
      <div className="grid flex-1 grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <Header />
        <main className="flex grow flex-col overflow-hidden">
          <p className="mb-2 text-lg font-semibold">Browse tracks</p>
          <div className="w-full scroll-shadow scroll-shadow-size-5 scroll-shadow-background">
            <div className="flex w-full flex-col overflow-y-auto py-5">
              <AllTracks />
            </div>
          </div>
        </main>
      </div>
      <PlaylistBar />
    </div>
  );
};

export default Page;
