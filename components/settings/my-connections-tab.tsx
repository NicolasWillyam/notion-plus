import React from "react";
import TabContainer from "./_components/tab-container";
import LearnDocs from "../learn-docs";
import HeadContent from "./_components/head-content";
import { ArrowUpRight, CircleHelp, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import MyConnections from "./_components/my-connections";
import Slack from "@/public/icons/slack.webp";
import GoogleDrive from "@/public/icons/google-drive.png";

const MyConnectionsTab = () => {
  return (
    <div className="overflow-y-hidden">
      <div>
        <p className="text-base font-medium">Discover new connections</p>
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          <MyConnections
            name="Slack"
            desc="Notifications, live links, and workflows between Notion and Slack"
            logo={Slack}
          />
          <MyConnections
            name="Google Drive"
            desc="Add previews of files."
            logo={GoogleDrive}
          />
          <MyConnections
            name="Figma"
            desc="View Figma designs directly in Notion"
            logo={Slack}
          />
        </div>
      </div>

      <div className="w-fit flex flex-col">
        <p className="text-muted-foreground text-sm hover:underline hover:underline-offset-2 hover:text-blue-500 my-5">
          See all
        </p>

        <div className="flex flex-col space-y-0.5">
          <LearnDocs
            href={"#"}
            label="Browse connections in Gallery"
            icon={ArrowUpRight}
          />
          <LearnDocs
            href={"#"}
            label="Develop or manage integrations"
            icon={ArrowUpRight}
          />
          <LearnDocs
            href={"#"}
            label="Learn more about connections"
            icon={CircleHelp}
          />
          <LearnDocs href={"#"} label="Notion AI connectors" icon={Sparkles} />
        </div>
      </div>
    </div>
  );
};

export default MyConnectionsTab;
