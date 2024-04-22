'use client';

import { tracks } from '@/lib/tracks';
import { usePlayerContext } from '@/providers/PlayerContext';
import TrackItem from '../Track/TrackItem';
import { useState } from 'react';
import type { Track } from '@/types';
import { getSearchedTracks } from '@/lib/searchUtils';

const AllTracks = () => {
  const { search } = usePlayerContext();

  return getSearchedTracks(tracks, search).map(track => (
    <TrackItem track={track} key={track.id} />
  ));
};

export default AllTracks;
