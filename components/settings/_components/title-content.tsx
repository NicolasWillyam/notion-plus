import React from "react";

interface TitleContentProps {
  title: string;
  subtitle: string | undefined;
  children: React.ReactNode;
}

const TitleContent = ({ title, subtitle, children }: TitleContentProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm">
        <p>{title}</p>
        <p className="text-muted-foreground text-xs my-0.5">{subtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default TitleContent;
