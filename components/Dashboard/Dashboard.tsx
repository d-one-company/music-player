import Header from '../Header';
import RecentFavourites from '../RecentFavourites/RecentFavourites';
import Trending from '../Trending/Trending';
import UsersPlaylists from './UsersPlaylists';

export function Dashboard() {
  return (
    <div className="flex h-screen flex-1 basis-[500px] flex-col overflow-auto">
      <div className="grid grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <Header />
        <main className="flex max-w-full grow flex-col overflow-hidden">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold">Your Playlists</p>
              <UsersPlaylists />
            </div>
            <Trending />
          </div>
          <RecentFavourites />
        </main>
      </div>
    </div>
  );
}
