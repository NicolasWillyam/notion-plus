"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Title } from "./title";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { Banner } from "./banner";
import { timeSolved } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@clerk/clerk-react";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();
  const { user } = useUser();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <nav className="h-11 bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="h-11 bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />
          <div className="flex items-center gap-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-muted-foreground/70 cursor-default text-sm">
                    {timeSolved(document.updateTime.toString()) !== "0m"
                      ? `Edited ${timeSolved(document.updateTime.toString())} ago`
                      : "Edited just now"}
                  </p>
                </TooltipTrigger>
                <TooltipContent
                  align="start"
                  className="text-xs p-2 px-2.5 text-muted-foreground space-y-0.5"
                >
                  <p>
                    Edited by{" "}
                    <span className="text-primary font-medium">
                      {user?.username}{" "}
                    </span>
                    {timeSolved(document.updateTime.toString())} ago
                  </p>
                  <p>
                    Created by{" "}
                    <span className="text-primary font-medium">
                      {user?.username}{" "}
                    </span>
                    {timeSolved(document._creationTime.toString())} ago
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Publish initialData={document} />
            <Menu documentId={document._id} />
          </div>
        </div>
      </nav>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};
