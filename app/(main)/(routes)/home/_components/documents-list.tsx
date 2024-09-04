import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Id } from "@/convex/_generated/dataModel";
import { timeSolved } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import { Clock, File } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DocumentsListProps {
  documents:
    | {
        _id: Id<"documents">;
        _creationTime: number;
        parentDocument?: Id<"documents"> | undefined;
        content?: string | undefined;
        coverImage?: string | undefined;
        icon?: string | undefined;
        title: string;
        userId: string;
        isArchived: boolean;
        isPublished: boolean;
      }[]
    | undefined;
}

const DocumentsList = ({ documents }: DocumentsListProps) => {
  const { user } = useUser();

  return (
    <>
      <div className="w-full flex justify-between items-center pt-20">
        <div className="flex items-center">
          <Clock className="w-6 h-6 mx-2" />
          <p className="w-full text-left text-sm font-medium">Recent Visited</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8 text-sm font-medium">
        {documents?.map((_, id) => (
          <Link key={id} href={`/documents/${_._id}`}>
            <div className="w-full h-full rounded-xl hover:outlie border hover:scale-105 transition-all  duration-300 delay-150">
              {_.coverImage ? (
                <div
                  style={{ backgroundImage: `url("${_.coverImage}")` }}
                  className="h-20 w-full rounded-t-xl bg-cover bg-center"
                />
              ) : (
                <div className="h-20 w-full bg-primary/5 rounded-t-xl" />
              )}

              <div className=" p-3 px-4 space-y-2 flex flex-col justify-between">
                {_.icon ? (
                  <p className="w-9 h-9 -ml-1 flex items-center justify-center -mt-7 text-muted-foreground text-xl border border-muted-foreground/5 rounded-full bg-border">
                    {_.icon}
                  </p>
                ) : (
                  <div className="w-9 h-9 -ml-1 -mt-7 flex items-center justify-center">
                    <File className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}

                <p className="py-3 truncate">{_.title}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="text-left">
                      <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-4 w-4">
                          <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <span className="text-start font-medium line-clamp-1 text-xs text-muted-foreground">
                          {timeSolved(_._creationTime.toString())}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="border-none">
                      <p className="text-xs">Last edited by {user?.fullName}</p>
                      <span className="text-start font-medium line-clamp-1 text-[10px] text-muted-foreground">
                        {new Date(_._creationTime).toLocaleString()}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DocumentsList;
