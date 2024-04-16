import { generateFakeImage, generateFakeTracks } from '@/lib/fakeData';
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  EllipsisVertical,
  Play,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const tracks = generateFakeTracks({ count: 20 });

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
        <p className="pb-2 text-left text-lg font-semibold">
          Next on Chillout Playlist
        </p>
      </div>
      <div className="flex max-h-[calc(100%-320px)] flex-col overflow-y-auto">
        <div className="flex flex-col space-y-6 pt-8">
          {tracks.map(track => (
            <div
              className="flex items-center justify-between"
              key={track.id + 1}
            >
              <div className="flex gap-3">
                <Image
                  src={track.img}
                  alt="track"
                  width={65}
                  height={65}
                  className="grow-0 rounded-sm"
                />
                <div className="flex flex-col justify-center space-y-1">
                  <p className="font-light">{track.title}</p>
                  <p className="text-sm font-light text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="group rounded-full p-2">
                <EllipsisVertical className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-10 flex w-full h-64 items-end rounded-md">
        <Image
          fill
          alt=""
          className="rounded-md"
          src={generateFakeImage({
            width: 256,
            height: 256,
          })}
        />
        <div className="absolute flex h-[60%] w-full items-end px-2 pb-2 ">
          <div className="flex h-full w-full flex-col rounded-sm bg-muted/60 backdrop-blur-lg">
            <div className="flex flex-col justify-center space-y-2.5 py-4 text-center text-sm">
              <div className="flex flex-col space-y-0.5">
                <p>Za kare</p>
                <p className="text-muted-foreground">SB Mafija</p>
              </div>

              <div className="flex items-center justify-center gap-8">
                <Button
                  variant="ghost"
                  className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                >
                  <ArrowLeftToLine />
                </Button>
                <Button
                  variant="ghost"
                  className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                >
                  <Play />
                </Button>
                <Button
                  variant="ghost"
                  className="h-10 w-10 rounded-full p-1 hover:bg-muted-foreground/20"
                >
                  <ArrowRightToLine />
                </Button>
              </div>
              <div className="px-4">
                <Slider defaultValue={[60]} max={100} step={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistBar;
