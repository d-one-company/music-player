import { GLOBAL_TOP_50_PLAYLIST_ID } from './constants';
import spotifyApi from './spotify';

export async function getTrendingTracks() {
  return await spotifyApi.playlists.getPlaylist(GLOBAL_TOP_50_PLAYLIST_ID);
}
