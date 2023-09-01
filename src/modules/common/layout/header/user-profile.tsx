import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex cursor-pointer select-none items-center space-x-2">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1690642143805-34aa01fdbba8?w=300&dpr=2&q=80"
              alt="@johnsnow"
            />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-md font-medium leading-none">Sofia Davis</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs leading-none text-muted-foreground">sofia@davis.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Orders</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
