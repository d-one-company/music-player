'use client';

import { Input } from '@/components/ui/input';
import { usePlayerContext } from '@/providers/PlayerContext';
import { Search as SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Search = () => {
  const { search, setSearch } = usePlayerContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!inputRef.current) return;

    setSearch('');
    if (pathname === '/search') inputRef.current.focus();
  }, [pathname, setSearch]);

  return (
    <div className="relative flex flex-1 items-center gap-2">
      <SearchIcon className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
      <Input
        value={search}
        ref={inputRef}
        onChange={e => setSearch(e.target.value)}
        onFocus={() => pathname === '/' && router.push('/search')}
        type="search"
        placeholder="Search for tracks, artists, lyrics..."
        className="h-11 w-full rounded-full bg-muted pl-10"
      />
    </div>
  );
};

export default Search;
