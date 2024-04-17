import { env } from '@/env';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const spotifyApi = SpotifyApi.withClientCredentials(
  env.SPOTIFY_CLIENT_ID,
  env.SPOTIFY_CLIENT_SECRET
);

export default spotifyApi;
