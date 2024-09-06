import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { useMutation } from "convex/react";
import {
  Check,
  ChevronDown,
  ChevronsLeftRight,
  MoreHorizontal,
  SquarePen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import AccountCard from "./account-card";

const UserItem = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };
  return (
    <div className="flex items-center justify-between hover:bg-primary/5 rounded-sm">
      <Popover>
        <PopoverTrigger asChild>
          <div
            role="button"
            className="h-8 flex items-center justify-between text-sm p-1.5 pl-2.5 w-full"
          >
            <div className="flex items-center">
              <div className="gap-x-2 flex items-center max-w-[150px]">
                <div className="relative">
                  <Avatar className="h-5 w-5 rounded-sm">
                    <AvatarImage src={user?.imageUrl} />
                  </Avatar>
                  <div className="h-2 w-2 border-[1px] border-background rounded-full absolute bg-red-500 -top-0.5 -right-0.5"></div>
                </div>

                <span className="text-start font-medium line-clamp-1 capitalize">
                  {user?.username}
                </span>
              </div>
              <ChevronDown className="ml-2 text-muted-foreground h-4 w-4" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 p-0"
          align="start"
          alignOffset={4}
          forceMount
        >
          <div className="flex flex-col">
            <div className="py-2.5">
              <div className="flex items-center justify-between px-3 pb-2">
                <p className="text-xs font-medium leading-none text-muted-foreground text-[11px] ">
                  {user?.emailAddresses[0].emailAddress}
                </p>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
              <AccountCard
                name={user?.fullName}
                typePlan="free"
                typeAccount="user"
                member={1}
                isActived={true}
              />
              <AccountCard
                typeAccount="workspace"
                name="Hanoi University of Science and Technology (HUST)"
                typePlan="pro"
                member={2308}
                isActived={false}
              />
            </div>
            <hr />
            <div className="w-full text-muted-foreground p-1.5">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-xs w-full justify-start px-3"
              >
                Create work account
              </Button>
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-xs w-full justify-start px-3"
              >
                Add another account
              </Button>
              <SignOutButton>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="text-xs w-full justify-start px-3"
                >
                  Logout
                </Button>
              </SignOutButton>
            </div>
            <hr />
            <div className="w-full text-muted-foreground p-1.5">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-xs w-full justify-start px-3 h-7"
              >
                Get Mac app
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="h-8 w-8 flex items-center justify-center">
        <SquarePen className="w-4 h-4 cursor-pointer" onClick={onCreate} />
      </div>
    </div>
  );
};

export default UserItem;
