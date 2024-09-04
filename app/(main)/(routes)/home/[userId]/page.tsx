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
import DocumentsList from "../_components/documents-list";
import Head from "next/head";

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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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

          <DocumentsList documents={documents} />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
