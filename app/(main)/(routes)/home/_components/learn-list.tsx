import { BookOpen } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoBook } from "react-icons/io5";
import { BsBook } from "react-icons/bs";
import LearnItem from "./learn-item";

const LearnList = () => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-muted-foreground">
          <IoBook size={24} className="mx-2.5 text-muted-foreground/80" />
          <p className="w-full text-left text-xs font-medium">Learn</p>
        </div>
      </div>
      <div className="w-full flex gap-4 text-sm font-medium">
        <LearnItem
          imgUrl="https://www.notion.so/images/home/learn/the-ultimate-guide-to-notion-templates.png"
          label="The ultimate guide to Notion templates"
          time="5m"
        />
        <LearnItem
          imgUrl="https://www.notion.so/images/home/learn/customize-and-style-your-content.png"
          label="Customize & style your content"
          time="9m"
        />
        <LearnItem
          imgUrl="https://www.notion.so/images/home/learn/getting-started-with-projects-and-tasks.png"
          label="Getting started with projects and tasks"
          time="8m"
        />
      </div>
    </div>
  );
};

export default LearnList;
