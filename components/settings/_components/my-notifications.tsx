import React from "react";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const MyNotifications = () => {
  return (
    <div>
      <HeadContent label="My settings" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Mobile push notifications"
          subtitle="Receive push notifications on mentions and comments via your mobile app"
        >
          <Switch defaultChecked={true} />
        </TitleContent>
      </div>
    </div>
  );
};

export default MyNotifications;
