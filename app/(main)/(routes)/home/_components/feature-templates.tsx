import { TableProperties } from "lucide-react";
import { FaShapes } from "react-icons/fa";
import React from "react";
import TemplateItem from "./template-item";

const FeatureTemplates = () => {
  return (
    <div className="w-full space-y-4 text-muted-foreground">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-muted-foreground">
          <FaShapes size={16} className="mx-2.5 text-muted-foreground/80" />
          <p className="w-full text-left text-xs font-medium">
            Feature templates
          </p>
        </div>
      </div>
      <div className="w-full flex gap-4 text-sm font-medium">
        <TemplateItem
          imgUrl="https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/2c6067ed-ebd3-4256-8b75-4109404b574e/desktop.png"
          label="Life Wiki"
          time="5m"
        />
        <TemplateItem
          imgUrl="https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/7ccd8a29-5eff-4d4c-b682-deb3080284fd/desktop.png"
          label="Joural"
          time="9m"
        />
        <TemplateItem
          imgUrl="https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/ca61fb57-1062-4074-903c-47194bad256c/desktop.png"
          label="To-do List"
          time="8m"
        />
      </div>
    </div>
  );
};

export default FeatureTemplates;
