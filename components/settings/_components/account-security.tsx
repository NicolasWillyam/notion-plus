import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import TitleContent from "./title-content";
import HeadContent from "./head-content";

const AccountSecurity = () => {
  const { user } = useUser();
  return (
    <div>
      <HeadContent label="Account security" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Email"
          subtitle={user?.emailAddresses[0]?.emailAddress}
        >
          <Button variant={"outline"} size={"sm"}>
            Change email
          </Button>
        </TitleContent>

        <TitleContent
          title="Password"
          subtitle="Set a permanent password to login to your account."
        >
          <Switch />
        </TitleContent>

        <TitleContent
          title="2-step verification"
          subtitle="Add an additional layer of security to your account during login."
        >
          <Switch />
        </TitleContent>
      </div>
    </div>
  );
};

export default AccountSecurity;
