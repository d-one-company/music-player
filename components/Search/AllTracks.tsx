'use client';

import { getSearchedTracks } from '@/lib/searchUtils';
import { tracks } from '@/lib/tracks';
import { usePlayerContext } from '@/providers/PlayerContext';
import TrackItem from '../Track/TrackItem';

const AllTracks = () => {
  const { search } = usePlayerContext();

  return getSearchedTracks(tracks, search).map(track => (
    <TrackItem track={track} key={track.id} />
  ));
};

export default AllTracks;
