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
import { Track } from '@/types';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AddTracks from './AddTracks';
import InfoHeader from './InfoHeader';

const CreatePlaylist = () => {
  const [name, setName] = useState('');
  const [addedTracks, setAddedTracks] = useState<Track[]>([]);
  const [search, setSearch] = useState('');

  const { playlists: storedPlaylists, addPlaylist } = useTrackStore();

  const handleCreatePlaylist = () => {
    addPlaylist({
      title: name,
      tracks: addedTracks,
      id: [...playlists, ...storedPlaylists].length + 1,
      image:
        'https://utfs.io/f/e614b606-8a85-430a-87a3-fc836e92a428-p2gkcd.jpg',
    });
    toast('Playlist has been created.');
    setName('');
    setAddedTracks([]);
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
          <InfoHeader addedTracks={addedTracks} name={name} setName={setName} />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tracks"
            className="focus-visible:ring-2 focus-visible:ring-gray-200/50 focus-visible:ring-offset-1"
          />
          <AddTracks
            addedTracks={addedTracks}
            setAddedTracks={setAddedTracks}
            search={search}
          />
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
