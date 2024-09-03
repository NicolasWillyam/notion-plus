import React from "react";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import { ChevronRight, ChevronsLeft } from "lucide-react";

const MyAccountSupport = () => {
  return (
    <div>
      <p className="text-sm font-medium">Support</p>
      <hr className="mt-3 mb-4" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="w-full text-sm">
            <p>Support access</p>
            <p className="text-muted-foreground text-xs my-0.5 w-2/3">
              Grant Notion support temporary access to your account so we can
              troubleshoot problems or recover content on your behalf. You can
              revoke access at any time.
            </p>
          </div>

          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full text-sm">
            <p>Log out of all devices</p>
            <p className="text-muted-foreground text-xs my-0.5 w-2/3">
              Log out of all other active sessions on other devices besides this
              one.
            </p>
          </div>

          <ChevronRight className="text-muted-foreground/50" />
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full text-sm">
            <p className="text-red-500">Delete my account</p>
            <p className="text-muted-foreground text-xs my-0.5 w-2/3">
              Permanently delete the account and remove access from all
              workspaces.
            </p>
          </div>

          <ChevronRight className="text-muted-foreground/50" />
        </div>
      </div>
    </div>
  );
};

export default MyAccountSupport;
