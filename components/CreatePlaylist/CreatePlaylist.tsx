'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { playlists } from '@/lib/playlists';
import useTrackStore from '@/lib/store';
import { Track } from '@/types';
import { Tooltip } from '@radix-ui/react-tooltip';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { TooltipContent, TooltipTrigger } from '../ui/tooltip';
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
        <Tooltip>
          <TooltipTrigger asChild>
            <Plus className="flex size-6 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" />
          </TooltipTrigger>
          <TooltipContent side="right">Create Playlist</TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create Playlist</DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-7 overflow-hidden">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePlaylist;
