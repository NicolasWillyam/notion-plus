import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import React from "react";
import { FaVideo } from "react-icons/fa6";

const UpcomingEvents = () => {
  const now = new Date();
  const currentMonth = now.toLocaleString("default", { month: "short" });
  const currentDay = new Date().getDate();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowStr = tomorrow.toLocaleDateString("default", {
    weekday: "short",
  });
  return (
    <div className="w-full space-y-4 text-muted-foreground">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-muted-foreground">
          <CalendarDays size={24} className="mx-2.5 text-muted-foreground/80" />
          <p className="w-full text-left text-xs font-medium">
            Upcomming events
          </p>
        </div>
      </div>
      <div className="w-full h-60 overflow-hidden grid grid-cols-2 rounded-xl border border-border/50">
        <div className="py-9 px-6 flex flex-col justify-center gap-4 border-r-[1px] border-border/50">
          <div className="ml-2 space-y-4">
            <CalendarDays className="w-9 h-9 text-muted-foreground/70" />
            <p className="text-sm text-muted-foreground/80">
              See you upcoming events and join meetings from Home.
            </p>
          </div>
          <Button
            className="w-fit text-blue-500 hover:bg-blue-100 hover:text-blue-500"
            variant={"ghost"}
            size={"sm"}
          >
            Connect to Google Calendar
          </Button>
        </div>
        <div className="pt-8 px-6 space-y-6 opacity-50">
          <div className="flex gap-3">
            <div className="w-24 text-xs text-muted-foreground space-y-1 font-medium">
              <p>Today</p>
              <p>
                {currentMonth} {currentDay}
              </p>
            </div>
            <div className="w-full space-y-4">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-border rounded-full"></div>
                  <div className="text-sm">
                    <p className="font-medium">My first mettings</p>
                    <p>9AM - Office</p>
                  </div>
                </div>
                <Button variant={"secondary"} size={"sm"}>
                  <FaVideo className="mr-2" />
                  Join meeting
                </Button>
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-border rounded-full"></div>
                  <div className="text-sm">
                    <p className="font-medium">Launch</p>
                    <p>1PM - Restaurant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-24 text-xs text-muted-foreground space-y-1 font-medium">
              <p>{tomorrowStr}</p>
              <p>
                {currentMonth} {currentDay + 1}
              </p>
            </div>
            <div className="w-full space-y-4">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-border rounded-full"></div>
                  <div className="text-sm">
                    <p className="font-medium">Grocery shopping</p>
                    <p>11AM - Store</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-10 bg-border rounded-full"></div>
                  <div className="text-sm">
                    <p className="font-medium">Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
