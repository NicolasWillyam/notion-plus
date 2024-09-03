"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarImage } from "../ui/avatar";
import { cn, timeCreatedSolved } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import {
  Bell,
  Building,
  ChevronsLeft,
  CircleArrowUp,
  CircleUserRound,
  Combine,
  Dock,
  Download,
  Globe,
  Home,
  KeyRound,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  SquareArrowUpRight,
  Users,
} from "lucide-react";
import { Item } from "@/app/(main)/_components/item";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SettingItem } from "../settings/_components/setting-items";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AccountSecurity from "../settings/_components/account-security";
import MyAccountSupport from "../settings/_components/my-account-support";
import MyProfile from "../settings/_components/my-profile";
import MyAccountTab from "../settings/my-account-tab";
import MySettingsTab from "../settings/my-settings-tab";
import MyNotifications from "../settings/my-notifications-tab";
import MyNotificationsTab from "../settings/my-notifications-tab";
import MyConnectionsTab from "../settings/my-connections-tab";
import LanguageAndRegionTab from "../settings/language-and-region-tab";

export const SettingsModal = () => {
  const settings = useSettings();
  const { user } = useUser();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="p-0 max-w-6xl md:w-[90vw] rounded-xl">
        <Tabs defaultValue="account" className="w-full flex p-0">
          <TabsList className="w-[240px] flex flex-col space-y-0.5 rounded-l-xl">
            <div className="flex flex-col space-y-2 pt-3 pb-1.5">
              <p className="text-xs font-medium text-muted-foreground px-4">
                Account
              </p>
              <div className="flex items-center gap-x-2 cursor-pointer px-4">
                <div className="rounded-md bg-secondary">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={user?.imageUrl} />
                  </Avatar>
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm line-clamp-1 font-medium">
                    {user?.fullName}
                  </p>
                  <p className="text-xs font-normal text-[10px] text-muted-foreground truncate">
                    {user?.emailAddresses[0].emailAddress}
                  </p>
                </div>
              </div>
            </div>
            <TabsTrigger value="my-account">
              <SettingItem label="My account" icon={CircleUserRound} />
            </TabsTrigger>

            <TabsTrigger value="my-settings">
              <SettingItem
                label="My settings"
                icon={SlidersHorizontal}
                // onClick={settings.onOpen}
              />
            </TabsTrigger>

            <TabsTrigger value="my-notifications">
              <SettingItem
                label="My notifications"
                icon={Bell}
                // onClick={settings.onOpen}
              />
            </TabsTrigger>

            <TabsTrigger value="my-connections">
              <SettingItem
                label="My Connections"
                icon={SquareArrowUpRight}
                // onClick={settings.onOpen}
              />
            </TabsTrigger>

            <TabsTrigger value="language-and-region">
              <SettingItem
                label="Language & region"
                icon={Globe}
                // onClick={settings.onOpen}
              />
            </TabsTrigger>

            {/* <p className="text-xs font-medium text-muted-foreground pt-4 px-4">
              Workspace
            </p>
            <div className="px-1 flex flex-col space-y-0.5">
              <SettingItem
                label="Upgrade plan"
                icon={CircleArrowUp}
                // onClick={() => {
                //   router.push(`/home/${user?.id}`);
                // }}
              />
              <SettingItem
                label="Settings"
                icon={Settings}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Teamspaces"
                icon={Building}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="People"
                icon={Users}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Sites"
                icon={Dock}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Security & data"
                icon={KeyRound}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Identity & provisioning"
                icon={ShieldCheck}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Connections"
                icon={Combine}
                // onClick={settings.onOpen}
              />
              <SettingItem
                label="Import"
                icon={Download}
                // onClick={settings.onOpen}
              />
            </div> */}
          </TabsList>
          <div className="h-[85vh] bg-background dark:bg-[#1F1F1F] w-full py-8 px-16 text-primary overflow-y-scroll rounded-r-xl">
            <TabsContent value="my-account">
              <MyAccountTab />
            </TabsContent>
            <TabsContent value="my-settings">
              <MySettingsTab />
            </TabsContent>
            <TabsContent value="my-notifications">
              <MyNotificationsTab />
            </TabsContent>
            <TabsContent value="my-connections">
              <MyConnectionsTab />
            </TabsContent>
            <TabsContent value="language-and-region">
              <LanguageAndRegionTab />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
