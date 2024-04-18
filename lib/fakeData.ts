import { faker } from '@faker-js/faker';

export function generateFakeTracks({ count = 10 }: { count?: number }) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.music.songName(),
    artist: faker.person.firstName(),
    duration: generateFakeTrackDuration(),
    url: faker.internet.url(),
    image: faker.image.url({ width: 256, height: 256 }),
  }));
}

const generateFakeTrackDuration = () => {
  const minutes = faker.number.int({ min: 0, max: 5 });
  const seconds = faker.number.int({ min: 0, max: 59 });
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export function generateFakeImage({
  width = 64,
  height = 64,
}: {
  width?: number;
  height?: number;
}) {
  return faker.image.url({ width, height });
}

export function generateFakeAlbums({ count = 10 }: { count?: number }) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.music.genre(),
    numberOfTracks: faker.number.int({ min: 20, max: 200 }),
    image: faker.image.url({ width: 256, height: 256 }),
  }));
}
