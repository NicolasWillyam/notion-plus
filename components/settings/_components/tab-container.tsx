import React from "react";

const TabContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-12 overflow-y-hidden">{children}</div>
  );
};

export default TabContainer;
