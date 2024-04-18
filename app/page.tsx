import { Dashboard } from '@/components/Dashboard/Dashboard';
import PlaylistBar from '@/components/PlaylistBar/PlaylistBar';
import { PlayerProvider } from '@/providers/PlayerContext';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <PlayerProvider>
        <Dashboard />
        <PlaylistBar />
      </PlayerProvider>
    </div>
  );
}
