import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Doc } from "@/convex/_generated/dataModel";
import { timeSolved } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import React from "react";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Edited = ({ initialData }: PublishProps) => {
  const { user } = useUser();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className="text-muted-foreground/70 cursor-default text-sm mr-1">
            {timeSolved(initialData.updateTime.toString()) !== "0m"
              ? `Edited ${timeSolved(initialData.updateTime.toString())} ago`
              : "Edited just now"}
          </p>
        </TooltipTrigger>
        <TooltipContent
          align="start"
          className="text-xs p-1.5 px-2.5 text-muted-foreground space-y-0.5"
        >
          <p>
            Edited by{" "}
            <span className="text-primary font-medium">{user?.username} </span>
            {timeSolved(initialData.updateTime.toString())} ago
          </p>
          <p>
            Created by{" "}
            <span className="text-primary font-medium">{user?.username} </span>
            {timeSolved(initialData._creationTime.toString())} ago
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Edited;
