import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import hust from "@/public/icons/hust.jpg";
import { StaticImageData } from "next/image";

interface AccountCardProps {
  name: string | null | undefined;
  typePlan: string;
  typeAccount: string;
  member: number;
  isActived: boolean;
}

const AccountCard = ({
  name,
  typePlan,
  typeAccount,
  member,
  isActived,
}: AccountCardProps) => {
  const { user } = useUser();
  const [imgUrl, setImgUrl] = useState<string | undefined>("");

  useEffect(() => {
    switch (typeAccount) {
      case "user":
        setImgUrl(user?.imageUrl);
        break;
      // default:
      case "workspace":
        setImgUrl("/icons/hust.jpg");
        break;
    }
  }, [typeAccount]);

  return (
    <div className="flex items-center justify-between cursor-pointer hover:bg-muted-foreground/10 h-11 pl-4 pr-3">
      <div className="flex items-center">
        <div className="rounded-md bg-secondary mr-3 relative">
          <Avatar className="h-8 w-8 rounded-md border">
            <AvatarImage src={imgUrl} />
          </Avatar>
          {typeAccount === "workspace" && (
            <div className="h-4 w-4 flex items-center justify-center text-white text-[10px] font-medium bg-red-500 absolute -top-1.5 -right-1.5 rounded-sm">
              1
            </div>
          )}
        </div>

        <div className="">
          <p className="text-sm line-clamp-1">{name}</p>
          <p className="text-xs font-normal text-muted-foreground ">
            <span className="capitalize">{typePlan} plan - </span>
            {member > 2 ? `${member} members` : `${member} member`}
          </p>
        </div>
      </div>

      <div className="">{isActived && <Check className="w-4 h-4" />}</div>
    </div>
  );
};

export default AccountCard;
