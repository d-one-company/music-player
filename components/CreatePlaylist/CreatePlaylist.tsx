'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { playlists } from '@/lib/playlists';
import useTrackStore from '@/lib/store';
import { tracks } from '@/lib/tracks';
import { Track } from '@/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AddTrackItem from './AddTrackItem';

const CreatePlaylist = () => {
  const [name, setName] = useState('');
  const [addedTracks, setAddedTracks] = useState<Track[]>([]);
  const [search, setSearch] = useState('');

  const { addPlaylist } = useTrackStore();

  const handleCreatePlaylist = () => {
    addPlaylist({
      title: name,
      tracks: addedTracks,
      id: playlists.length + 1,
      image:
        'https://utfs.io/f/e614b606-8a85-430a-87a3-fc836e92a428-p2gkcd.jpg',
    });
    toast('Playlist has been created.');
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Plus className="flex size-6 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" />
      </DialogTrigger>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Playlist</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex w-full flex-col gap-8">
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
                {addedTracks.length}{' '}
                {addedTracks.length !== 1 ? 'tracks' : 'track'} added
              </p>
              <Input
                placeholder="Playlist name"
                value={name}
                className="focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tracks"
            className="focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
          />
          <div className="scrollbar-sky flex max-h-[650px] w-full flex-col overflow-y-auto">
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
          <DialogFooter>
            <DialogClose asChild>
              <Button
                disabled={!addedTracks.length || !name}
                variant="default"
                className="mt-auto"
                type="submit"
                onClick={handleCreatePlaylist}
              >
                Create Playlist
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePlaylist;
