import Profile from '../Profile/Profile';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import TrendingTracks from '../TrendingSongs/TrendingSongs';
import UsersPlaylists from './UsersPlaylists';

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col px-4 pt-4">
      <Sidebar />
      <div className="flex flex-col bg-background sm:gap-4 sm:py-4 sm:pl-20">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Search />
          <Profile />
        </header>
        <main className="ml-6 mt-4 flex grow flex-col space-y-10 md:max-w-[950px] 2xl:max-w-[1400px]">
          <div className="flex w-full flex-col space-y-2">
            <p className="text-lg font-semibold">Your Playlists</p>
            <UsersPlaylists />
          </div>
          <div className="flex w-full flex-col space-y-2 ">
            <p className="text-lg font-semibold">Trending Right Now</p>
            <TrendingTracks />
          </div>
        </main>
      </div>
    </div>
  );
}
