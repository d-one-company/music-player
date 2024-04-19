import Player from '../Player/Player';
import Queue from '../Queue/Queue';

const PlaylistBar = () => {
  return (
    <div className="relative flex min-h-screen shrink-0 grow flex-col items-center justify-center border bg-muted/50 py-8 md:w-[350px]">
      <Queue />
      <Player />
    </div>
  );
};

export default PlaylistBar;
