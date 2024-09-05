"use client";

import {
  ChevronsLeft,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash,
  Home,
  Speaker,
  Sparkles,
  Inbox,
} from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { HiSparkles } from "react-icons/hi2";

import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";

import UserItem from "./user-item";
import { Item } from "./item";
import { DocumentList } from "./document-list";
import { TrashBox } from "./trash-box";
import { Navbar } from "./navbar";
import { useUser } from "@clerk/clerk-react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Provider } from "@radix-ui/react-toast";
import DocLabel from "./doc-label";
import { FavouriteList } from "./favourite-list";

export const Navigation = () => {
  const router = useRouter();
  const settings = useSettings();
  const search = useSearch();
  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const create = useMutation(api.documents.create);

  const { user } = useUser();

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleCreate = () => {
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
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999] border-r-[1px] border-border/50 py-1.5",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "p-1 mr-7 text-muted-foreground rounded-sm hover:bg-muted-foreground/10 hover:text-primary dark:hover:bg-neutral-600 absolute top-2 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-5 w-5" />
        </div>
        <div className="mx-2">
          <UserItem />
          <div className="mt-1.5">
            <Item
              label="Search"
              icon={Search}
              // isSearch
              onClick={search.onOpen}
            />
            <Item
              label="Notion AI"
              icon={Sparkles}
              // isSearch
              onClick={search.onOpen}
            />
            <Item
              label="Home"
              icon={Home}
              onClick={() => {
                router.push(`/home/${user?.id}`);
              }}
            />
            <Item
              label="Inbox"
              icon={Inbox}
              isInbox
              onClick={() => {
                router.push(`/home/${user?.id}`);
              }}
            />

            <Item label="Settings" icon={Settings} onClick={settings.onOpen} />
            <Item onClick={handleCreate} label="New page" icon={PlusCircle} />
          </div>
          <div className="space-y-3.5 mt-3.5">
            <div className="">
              <FavouriteList label={"Favorites"} />
            </div>
            <div className="">
              {/* <DocLabel label={"Private"} /> */}
              <DocumentList label={"Private"} />
            </div>

            <Item onClick={handleCreate} icon={Plus} label="Add a page" />
            <Popover>
              <PopoverTrigger className="w-full mt-4">
                <Item label="Trash" icon={Trash} />
              </PopoverTrigger>
              <PopoverContent
                className="p-0 w-[420px] relative bottom-4 -left-4"
                side={isMobile ? "bottom" : "right"}
              >
                <TrashBox />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        {!!params.documentId ? (
          <Navbar isCollapsed={isCollapsed} onResetWidth={resetWidth} />
        ) : (
          <nav className="bg-transparent px-3 py-2 w-full">
            {isCollapsed && (
              <MenuIcon
                onClick={resetWidth}
                role="button"
                className="h-5 w-5 text-muted-foreground"
              />
            )}
          </nav>
        )}
      </div>
    </>
  );
};
