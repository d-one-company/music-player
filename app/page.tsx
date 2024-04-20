import { Dashboard } from '@/components/Dashboard/Dashboard';
import PlaylistBar from '@/components/PlaylistBar/PlaylistBar';

export default function Home() {
  return (
    <div className="flex h-screen flex-wrap overflow-hidden">
      <Dashboard />
      <PlaylistBar />
    </div>
  );
}
