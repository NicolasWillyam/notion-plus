import React from "react";
import TabContainer from "./_components/tab-container";
import MyNotifications from "./_components/my-notifications";
import ConnectionNotifications from "./_components/connection-notifications";
import EmailNotifications from "./_components/email-notifications";
import LearnDocs from "../learn-docs";
import { CircleHelp } from "lucide-react";

const MyNotificationsTab = () => {
  return (
    <TabContainer>
      <MyNotifications />
      <ConnectionNotifications />
      <EmailNotifications />
      <LearnDocs
        href={"#"}
        label="Learn about notifications"
        icon={CircleHelp}
      />
    </TabContainer>
  );
};

export default MyNotificationsTab;
