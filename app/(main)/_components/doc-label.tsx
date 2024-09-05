import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import React from "react";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  label: string;
}

export const DocLabel = ({
  parentDocumentId,
  level = 0,
  label,
}: DocumentListProps) => {
  const documents = useQuery(api.documents.getFavDocs, {
    parentDocument: parentDocumentId,
  });
  if (label === "Favorites") {
    const documents = useQuery(api.documents.getFavDocs, {
      parentDocument: parentDocumentId,
    });
  }

  if (label === "Private") {
    const documents = useQuery(api.documents.getSidebar, {
      parentDocument: parentDocumentId,
    });
  }
  return (
    <div>
      {documents !== undefined && documents?.length > 0 && (
        <div
          className={cn(
            "group min-h-[30px] text-xs py-1 px-2 w-full flex items-center text-muted-foreground font-medium"
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default DocLabel;
