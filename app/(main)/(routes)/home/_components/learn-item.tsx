import React from "react";
import { BsBook } from "react-icons/bs";

interface LearnItemProps {
  imgUrl: string;
  label: string;
  time: string;
}

const LearnItem = ({ imgUrl, label, time }: LearnItemProps) => {
  return (
    <div className="w-60 border border-border/70 rounded-xl hover:scale-110 transition-all duration-300 delay-150 cursor-pointer">
      <img src={imgUrl} className="h-32 w-full rounded-t-xl" alt="image" />
      <div className="p-3 w-3/4 space-y-3">
        <p>{label}</p>
        <div className="text-xs text-muted-foreground font-normal flex items-center gap-1.5">
          <BsBook className="w-3.5 h-3.5" /> {time} read
        </div>
      </div>
    </div>
  );
};

export default LearnItem;
