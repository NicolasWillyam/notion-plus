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
import LearnList from "../_components/learn-list";
import UpcomingEvents from "../_components/upcoming-events";
import HomeViews from "../_components/home-views";
import FeatureTemplates from "../_components/feature-templates";

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
        <div className="min-h-screen flex flex-col items-center space-y-11 py-16">
          <h2 className="text-3xl font-semibold">
            Good morning, {user?.firstName}
          </h2>
          <DocumentsList documents={documents} />
          <LearnList />
          <UpcomingEvents />
          <HomeViews />
          <FeatureTemplates />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
