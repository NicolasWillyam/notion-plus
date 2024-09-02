"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Book, Clock, File, PlusCircle } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import UserItem from "@/app/(main)/_components/user-item";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Container from "@/app/(main)/_components/container";
import Link from "next/link";

interface HomePageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const HomePage = ({ params }: HomePageProps) => {
  const router = useRouter();
  const { user } = useUser();
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

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: params.documentId,
  });

  console.log(documents);

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center space-y-4 md:p-16 md:py-24 p-8 py-16 text-muted-foreground">
        <Image
          src="/hero-illo.webp"
          height="400"
          width="400"
          alt="Empty"
          className="dark:hidden"
        />
        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="Empty"
          className="hidden dark:block"
        />
        <h2 className="text-2xl font-semibold">
          Welcome to Notion, {user?.firstName}
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a note
        </Button>

        <div className="w-full flex justify-between items-center pt-20">
          <div className="flex items-center">
            <Clock className="w-6 h-6 mx-2" />
            <p className="w-full text-left text-sm font-medium">
              Recent Visited
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8 text-sm font-medium">
          {documents?.map((_, id) => (
            <Link key={id} href={`/documents/${_._id}`}>
              <div className="w-full h-full rounded-xl bg-primary/5 hover:outline hover:outline-2 outline-primary/20">
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

                  <p className="py-3">{_.title}</p>
                  <div className="">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                      <Avatar className="h-4 w-4">
                        <AvatarImage src={user?.imageUrl} />
                      </Avatar>
                      <span className="text-start font-medium line-clamp-1 text-xs text-muted-foreground">
                        {user?.fullName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
