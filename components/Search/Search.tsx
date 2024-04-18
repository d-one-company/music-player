import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="relative flex flex-1 items-center gap-2">
      <SearchIcon className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for tracks, artists, lyrics..."
        className="h-11 w-full rounded-full bg-muted pl-10"
      />
    </div>
  );
};

export default Search;
