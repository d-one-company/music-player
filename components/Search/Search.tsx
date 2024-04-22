'use client';

import { Input } from '@/components/ui/input';
import { usePlayerContext } from '@/providers/PlayerContext';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const { search, setSearch } = usePlayerContext();

  return (
    <div className="relative flex flex-1 items-center gap-2">
      <SearchIcon className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="search"
        placeholder="Search for tracks, artists, lyrics..."
        className="h-11 w-full rounded-full bg-muted pl-10"
      />
    </div>
  );
};

export default Search;
