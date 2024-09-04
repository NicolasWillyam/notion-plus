import React from "react";

interface TitleContentProps {
  title: string | null;
  subtitle: string | undefined;
  children: React.ReactNode;
}

const TitleContent = ({ title, subtitle, children }: TitleContentProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-2/3 text-sm ">
        <p>{title}</p>
        <p className="text-muted-foreground text-xs my-0.5">{subtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default TitleContent;
