import Profile from '../Profile/Profile';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent">
      <Search />
      <Profile />
    </header>
  );
};

export default Header;
