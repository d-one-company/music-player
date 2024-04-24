import { tracks } from '@/lib/tracks';
import { Track } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import AddTrackItem from './AddTrackItem';

type Props = {
  search: string;
  setAddedTracks: Dispatch<SetStateAction<Track[]>>;
  addedTracks: Track[];
};

const AddTracks = ({ search, addedTracks, setAddedTracks }: Props) => {
  return (
    <div className="scrollbar-sky flex w-full flex-col overflow-y-auto">
      {tracks
        .filter(track =>
          track.title.toLowerCase().includes(search.toLowerCase())
        )
        .map(track => (
          <AddTrackItem
            track={track}
            key={track.id}
            onClick={() => {
              setAddedTracks(prev =>
                prev.includes(track)
                  ? prev.filter(t => t.id !== track.id)
                  : [...prev, track]
              );
            }}
            added={addedTracks.includes(track)}
          />
        ))}
    </div>
  );
};

export default AddTracks;
