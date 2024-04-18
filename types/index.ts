export type Track = {
  url: string;
  title: string;
  artist: string;
  image: string;
  duration: string;
};

export type Playlist = {
  title: string;
  image: string;
  tracks?: Track[];
};
