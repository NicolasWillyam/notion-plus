import Image from "next/image";
import React from "react";
import { BsBook } from "react-icons/bs";

interface TemplateItemProps {
  imgUrl: string;
  label: string;
  time: string;
}

const TemplateItem = ({ imgUrl, label, time }: TemplateItemProps) => {
  return (
    <div className="w-60 h-[150px] border border-border/70 rounded-xl hover:scale-110 transition-all duration-300 delay-150 cursor-pointer pt-3.5 pl-6 overflow-hidden">
      <div className="font-normal">
        <p className="text-sm text-primary truncate">{label}</p>
        <p className="text-xs text-muted-foreground">By Notion</p>
      </div>

      <Image
        src={imgUrl}
        width={240}
        height={150}
        alt="image"
        className="ml-2 mt-6 scale-110 rounded-md border border-border/50 shadow"
      />
    </div>
  );
};

export default TemplateItem;
