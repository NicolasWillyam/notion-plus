import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Sun,
  Table,
  TableProperties,
  Utensils,
} from "lucide-react";
import React from "react";
import { FaVideo } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";

const HomeViews = () => {
  return (
    <div className="w-full space-y-4 text-muted-foreground">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-muted-foreground">
          <TableProperties
            size={20}
            className="mx-2.5 text-muted-foreground/80"
          />
          <p className="w-full text-left text-xs font-medium">
            Upcomming events
          </p>
        </div>
      </div>
      <div className="w-full h-60 overflow-hidden grid grid-cols-2 rounded-xl border border-border/50">
        <div className="py-9 px-6 flex flex-col justify-center gap-4 border-r-[1px] border-border/50">
          <div className="ml-2 space-y-4">
            <TableProperties className="w-9 h-9 text-muted-foreground/70" />
            <p className="text-sm text-muted-foreground/80">
              Pin a database view to quickly access it from Home.
            </p>
          </div>
          <Button
            className="w-fit text-blue-500 hover:bg-blue-100 hover:text-blue-500"
            variant={"ghost"}
            size={"sm"}
          >
            Select a database
          </Button>
        </div>
        <div className="pt-8 px-6 opacity-50 text-sm">
          <div className="w-full flex justify-between items-center h-7 my-0.5 text-xs">
            <p>Activity</p>
            <p>Status</p>
          </div>
          <div className="w-full flex justify-between items-center h-7 my-0.5 border-t-[1px]">
            <div className="flex items-center gap-2">
              <IoSunny className="w-3 h-3" />
              <p className="font-medium">Wake up and freshen up</p>
            </div>
            <p>Done</p>
          </div>
          <div className="w-full flex justify-between items-center h-7 my-0.5 border-t-[1px]">
            <div className="flex items-center gap-2">
              <Utensils className="w-3 h-3" />
              <p className="font-medium">Have breakfast</p>
            </div>
            <p>In process</p>
          </div>
          <div className="w-full flex justify-between items-center h-7 my-0.5 border-t-[1px]">
            <div className="flex items-center gap-2">
              <FaBook className="w-3 h-3" />
              <p className="font-medium">Work or study</p>
            </div>
            <p>Not started</p>
          </div>
          <div className="w-full flex justify-between items-center h-7 my-0.5 border-t-[1px]">
            <div className="flex items-center gap-2">
              <IoFastFood className="w-3 h-3" />
              <p className="font-medium">Have lunch</p>
            </div>
            <p>Not started</p>
          </div>
          <div className="w-full flex justify-between items-center h-7 my-0.5 border-t-[1px]">
            <div className="flex items-center gap-2">
              <FaRunning className="w-3 h-3" />
              <p className="font-medium">Excrise</p>
            </div>
            <p>Not started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeViews;
