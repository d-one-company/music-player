import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getServerAuthSession } from '@/lib/auth';
import { BellDot, ChevronDown, User } from 'lucide-react';

const Profile = async () => {
  const session = await getServerAuthSession();

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
            <Avatar>
              <AvatarImage
                src={session?.user?.image || undefined}
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
              <AvatarFallback className="bg-muted/60 text-gray-500">
                <User />
              </AvatarFallback>
            </Avatar>
            <span>{session?.user?.name}</span>
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
