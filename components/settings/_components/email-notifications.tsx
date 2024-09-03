import React from "react";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  MoveUpRight,
  SquareArrowOutUpRight,
  SquareArrowRight,
} from "lucide-react";

const EmailNotifications = () => {
  return (
    <div>
      <HeadContent label="Email notifications" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Activity in your workspace"
          subtitle="Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
        <TitleContent
          title="Always send email notifications"
          subtitle="Receive emails about activity in your workspace, even when you're active on the app"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
        <TitleContent
          title="Email digests"
          subtitle="Receive email digests every 8 hours for changes to pages you’re subscribed to"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
        <TitleContent
          title="Announcements and update emails"
          subtitle="Receive occasional emails about product launches and new features from Notion"
        >
          <Button variant={"outline"} size={"sm"} className="gap-2 pl-2">
            <SquareArrowOutUpRight className="w-4 h-4" />
            Manage settings
          </Button>
        </TitleContent>
      </div>
    </div>
  );
};

export default EmailNotifications;
