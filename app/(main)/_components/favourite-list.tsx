"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "convex/react";
import { FileIcon } from "lucide-react";

import { Doc, Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

import { Item } from "./item";

interface FavouriteListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  label?: string;
  data?: Doc<"documents">[];
}

export const FavouriteList = ({
  label,
  parentDocumentId,
  level = 0,
}: FavouriteListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }));
  };

  const documents = useQuery(api.documents.getFavDocs, {
    parentDocument: parentDocumentId,
  });

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      {label && documents.length > 0 && (
        <div
          className={cn(
            "group min-h-[30px] text-xs py-1 px-2 w-full flex items-center text-muted-foreground font-medium"
          )}
        >
          {label}
        </div>
      )}
      {level > 0 && (
        <p
          style={{
            paddingLeft: level ? `${level * 12 + 24}px` : undefined,
          }}
          className={cn(
            "hidden text-sm font-medium text-muted-foreground/80 px-4 py-1",
            expanded && "last:block",
            level === 0 && "hidden"
          )}
        >
          No pages created!
        </p>
      )}
      {documents.map((document) => (
        <div key={document._id}>
          <Item
            id={document._id}
            type="favorite"
            onClick={() => onRedirect(document._id)}
            label={document.title}
            icon={FileIcon}
            documentIcon={document.icon}
            active={params.documentId === document._id}
            level={level}
            onExpand={() => onExpand(document._id)}
            expanded={expanded[document._id]}
          />
          {expanded[document._id] && (
            <FavouriteList parentDocumentId={document._id} level={level + 1} />
          )}
        </div>
      ))}
    </>
  );
};
