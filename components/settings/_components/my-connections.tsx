import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ConnectionProps {
  logo: StaticImageData;
  name: string;
  desc: string;
}

const MyConnections = ({ name, desc, logo }: ConnectionProps) => {
  return (
    <Button
      variant={"outline"}
      className="p-3 h-auto flex flex-col justify-between items-start space-y-4 text-left text-wrap rounded-xl"
    >
      <div className="flex flex-col gap-1 p-1">
        <Image src={logo} width={28} height={28} alt={name} />
        <p className="font-medium mt-2.5">{name}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
        <p className="text-muted-foreground text-[9px] mt-0.5 px-1.5 py-0.5 bg-primary/10 w-fit leading-none rounded">
          LINK PREVIEW
        </p>
      </div>
      <div className="h-7 w-full bg-blue-400/10 hover:bg-blue-400/20 text-blue-500 rounded-md flex items-center justify-center font-medium">
        Connect
      </div>
    </Button>
  );
};

export default MyConnections;
