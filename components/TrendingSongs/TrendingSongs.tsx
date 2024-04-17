import spotifyApi from '@/lib/spotify';
import TrackItem from '../Track/TrackItem';

const GLOBAL_TOP_50_PLAYLIST_ID =
  '37i9dQZEVXbMDoHDwVN2tF?si=18e6ab1f9a6541a8&nd=1&dlsi=9c44c461677f477f';

const TrendingTracks = async () => {
  const trendingTracks = await spotifyApi.playlists.getPlaylist(
    GLOBAL_TOP_50_PLAYLIST_ID
  );

  return (
    <div className="scrollbar-sky flex max-h-[300px] flex-col space-y-5 overflow-y-scroll">
      {trendingTracks.tracks.items.map(track => (
        <TrackItem track={track} key={track.track.id} />
      ))}
    </div>
  );
};

export default TrendingTracks;
