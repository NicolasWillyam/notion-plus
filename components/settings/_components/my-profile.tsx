import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import HeadContent from "./head-content";

const MyProfile = () => {
  const { user } = useUser();
  return (
    <div>
      <HeadContent label="My Profile" />
      <div className="flex gap-x-5 items-center">
        <div className=" flex flex-col gap-2">
          {user?.imageUrl ? (
            <div className="rounded-full border bg-primary/5 h-14 w-14">
              <Avatar className="h-14 w-14">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
          ) : (
            <div className="rounded-full border bg-primary/5 h-14 w-14 flex items-center justify-center text-2xl">
              <p>{user?.fullName?.charAt(0)}</p>
              {/* <Avatar className="h-14 w-14">
                        <AvatarImage src={user?.imageUrl} />
                      </Avatar> */}
            </div>
          )}

          <div className="text-xs mt-2 p-0 text-muted-foreground font-normal">
            Add photo
          </div>
        </div>

        <div className="text-xs flex flex-col gap-1 mb-9">
          <p className="text-muted-foreground">Preferred name</p>
          <Input type="text" value={user?.firstName?.toString()} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
