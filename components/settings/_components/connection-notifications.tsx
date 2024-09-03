import React from "react";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
import { Switch } from "@/components/ui/switch";

const ConnectionNotifications = () => {
  return (
    <div>
      <HeadContent label="Connection notifications" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Slack"
          subtitle="Receive notifications in your Slack workspace when you're mentioned in a page, database property, or comment"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
        <TitleContent
          title="Google Drive"
          subtitle="Receive notifications in your Google Drive workspace when you're mentioned in a page, database property, or comment"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
      </div>
    </div>
  );
};

export default ConnectionNotifications;
