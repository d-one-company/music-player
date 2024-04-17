import { X } from 'lucide-react';
import Player from '../Player/Player';
import Queue from '../Queue/Queue';
import { Button } from '../ui/button';

const PlaylistBar = () => {
  return (
    <div className="relative flex min-h-screen shrink-0 grow flex-col items-center justify-center border bg-muted/50 p-8 pt-24 md:w-[350px]">
      <Button
        variant="ghost"
        className="group absolute right-6 top-6 h-12 w-12 rounded-full p-2"
      >
        <X className="h-9 w-9 text-muted-foreground transition-colors group-hover:text-primary" />
      </Button>

      <div className="flex w-full">
        <p className="pb-2 text-left text-lg font-semibold">Queue</p>
      </div>
      <Queue />
      <Player />
    </div>
  );
};

export default PlaylistBar;
