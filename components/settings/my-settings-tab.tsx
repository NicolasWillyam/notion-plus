import React from "react";
import HeadContent from "./_components/head-content";
import TabContainer from "./_components/tab-container";
import MySettings from "./_components/my-settings";
import StartUp from "./_components/start-up";
import DateTime from "./_components/date-time";
import Privacy from "./_components/privacy";

const MySettingsTab = () => {
  return (
    <TabContainer>
      <MySettings />
      <StartUp />
      <DateTime />
      <Privacy />
    </TabContainer>
  );
};

export default MySettingsTab;
