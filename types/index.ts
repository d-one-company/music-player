export type Track = {
  id: number;
  url: string;
  title: string;
  artist: string;
  image: string;
  duration: string;
  viewsCount: number;
  album: string;
};

export type Playlist = {
  id: number;
  title: string;
  image: string;
  tracks?: Track[];
};
