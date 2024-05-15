import Player from '../Player/Player';
import Queue from '../Queue/Queue';

const blogUrl = `${process.env['COMPANY_WEBSITE_URL']}/blog/music`;

const PlaylistBar = () => {
  return (
    <div className="grid max-h-full min-w-[350px] max-w-[350px] shrink-0 grid-rows-content gap-5 border-l bg-muted/50 py-8 sm:gap-8">
      <div className="row-start-2 flex flex-col overflow-hidden">
        <Queue />
        <Player />
      </div>
    </div>
  );
};

export default PlaylistBar;
