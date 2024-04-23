import { Track } from '@/types';
import { Input } from '../ui/input';
import Image from 'next/image';

type Props = {
  addedTracks: Track[];
  name: string;
  setName: (name: string) => void;
};

const InfoHeader = ({ addedTracks, name, setName }: Props) => {
  return (
    <div className="flex w-full items-end gap-5">
      <Image
        src="https://utfs.io/f/e614b606-8a85-430a-87a3-fc836e92a428-p2gkcd.jpg"
        alt="Playlist Cover"
        width={65}
        height={65}
        className="aspect-square"
      />
      <div className="flex flex-col items-start gap-2">
        <p>
          {addedTracks.length} {addedTracks.length !== 1 ? 'tracks' : 'track'}{' '}
          added
        </p>
        <Input
          placeholder="Playlist name"
          value={name}
          className="focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
          onChange={e => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InfoHeader;
