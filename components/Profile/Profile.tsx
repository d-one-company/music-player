import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { generateFakeImage } from '@/lib/fakeData';
import { BellDot, ChevronDown } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const Profile = async () => {
  const session = await getServerSession();

  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" variant="ghost">
        <BellDot />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex gap-2.5 overflow-hidden rounded-full px-3 py-4"
          >
            <Image
              src={
                session?.user?.image ??
                generateFakeImage({ width: 36, height: 36 })
              }
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
            <span>{session?.user?.name ?? 'Alex'}</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
