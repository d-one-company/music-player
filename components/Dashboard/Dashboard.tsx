import Profile from '../Profile/Profile';
import RecentFavourites from '../RecentFavourites/RecentFavourites';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import Trending from '../Trending/Trending';
import UsersPlaylists from './UsersPlaylists';

export function Dashboard() {
  return (
    <div className="flex h-screen flex-1 basis-[500px]">
      <Sidebar />
      <div className="grid flex-1 grid-rows-content gap-5 bg-background px-4 pt-4 sm:gap-8 sm:px-8 sm:pt-8">
        <header className="flex h-14 items-center gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent">
          <Search />
          <Profile />
        </header>
        <main className="flex grow flex-col overflow-hidden">
          <div className="flex flex-col space-y-10">
            <div className="flex w-full flex-col space-y-2">
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
