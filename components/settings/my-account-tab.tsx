import React from "react";
import MyProfile from "./_components/my-profile";
import AccountSecurity from "./_components/account-security";
import MyAccountSupport from "./_components/my-account-support";
import TabContainer from "./_components/tab-container";

const MyAccountTab = () => {
  return (
    <TabContainer>
      <MyProfile />
      <AccountSecurity />
      <MyAccountSupport />
    </TabContainer>
  );
};

export default MyAccountTab;
