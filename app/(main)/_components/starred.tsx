"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { toast } from "sonner";

interface PublishProps {
  initialData: Doc<"documents">;
}

const Starred = ({ initialData }: PublishProps) => {
  const [starred, setStarred] = useState(initialData.isStared);
  const update = useMutation(api.documents.update);

  const onStarred = () => {
    setStarred(true);

    const promise = update({
      id: initialData._id,
      isStared: true,
    });

    toast.promise(promise, {
      loading: "Starred",
      success: "Add note to favorite",
      error: "Failed to publish note.",
    });
  };

  const onUnStarred = () => {
    setStarred(!starred);

    const promise = update({
      id: initialData._id,
      isStared: false,
    });

    toast.promise(promise, {
      loading: "Unstarred",
      success: "Remove note from favorite",
      error: "Failed to publish note.",
    });
  };

  return (
    <>
      {starred === true ? (
        <Button
          onClick={onUnStarred}
          variant={"ghost"}
          size={"icon"}
          className="rounded-sm"
        >
          <IoStar className="w-5 h-5 text-yellow-400" />
        </Button>
      ) : (
        <Button
          onClick={onStarred}
          variant={"ghost"}
          size={"icon"}
          className="rounded-sm"
        >
          <IoStarOutline className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default Starred;
