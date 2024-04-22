import { usePlayerContext } from '@/providers/PlayerContext';
import { Playlist } from '@/types';
import { Pause, Play, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type Props = { playlist: Playlist; setSearch: (value: string) => void };

const PlaylistControls = ({ playlist, setSearch }: Props) => {
  const { isPlaying, togglePlay, setCurrentAndPlayPlaylist } =
    usePlayerContext();

  return (
    <div className="mb-10 flex w-full items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
          onClick={() => {
            togglePlay();
            if (isPlaying) return;
            setCurrentAndPlayPlaylist(playlist);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Search className="size-5 text-gray-200/80" />
        <Input
          placeholder="Search..."
          className="w-[200px] focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PlaylistControls;
