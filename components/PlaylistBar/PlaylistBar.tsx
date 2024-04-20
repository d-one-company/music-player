import Player from '../Player/Player';
import Queue from '../Queue/Queue';

const PlaylistBar = () => {
  return (
    <div className="grid h-screen min-w-[350px] shrink-0 grid-rows-content gap-5 border bg-muted/50 py-8 sm:gap-8">
      <div className="row-start-2 flex flex-col overflow-hidden">
        <Queue />
        <Player />
      </div>
    </div>
  );
};

export default PlaylistBar;
