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
import { generateFakeImage } from '@/lib/fakeData';
import { BellDot, ChevronDown, User } from 'lucide-react';

const Profile = async () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" variant="ghost">
        <BellDot />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex gap-2.5 overflow-hidden rounded-full px-1.5 py-4"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={generateFakeImage({ width: 36, height: 36 })}
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
              <AvatarFallback className="bg-muted/60 text-gray-500">
                <User />
              </AvatarFallback>
            </Avatar>
            <span>Alex</span>
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
