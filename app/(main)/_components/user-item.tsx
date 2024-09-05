import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronDown, ChevronsLeftRight, SquarePen } from "lucide-react";
import React from "react";

const UserItem = () => {
  const { user } = useUser();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          role="button"
          className="flex items-center justify-between text-sm p-1.5 pl-2.5 w-full hover:bg-primary/5 rounded-sm"
        >
          <div className="flex items-center">
            <div className="gap-x-2 flex items-center max-w-[150px]">
              <Avatar className="h-5 w-5 rounded-sm">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
              <span className="text-start font-medium line-clamp-1">
                {user?.username}
              </span>
            </div>
            <ChevronDown className="ml-2 text-muted-foreground h-4 w-4" />
          </div>
          <SquarePen className="w-4 h-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-2"
        align="start"
        alignOffset={4}
        forceMount
      >
        <div className="flex flex-col space-y-2">
          <p className="text-xs font-medium leading-none text-muted-foreground p-2">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-4 cursor-pointer px-2 pb-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm line-clamp-1 font-medium">
                {user?.fullName}
              </p>
              <p className="text-xs font-normal text-[10px] text-muted-foreground ">
                Free Plan
              </p>
            </div>
          </div>
          <hr />
          <div className="w-full text-muted-foreground ">
            <Button
              variant={"ghost"}
              size={"sm"}
              className="text-xs w-full justify-start h-8"
            >
              Create work account
            </Button>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="text-xs w-full justify-start h-8"
            >
              Add another account
            </Button>
            <SignOutButton>
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-xs w-full justify-start h-8"
              >
                Logout
              </Button>
            </SignOutButton>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserItem;
