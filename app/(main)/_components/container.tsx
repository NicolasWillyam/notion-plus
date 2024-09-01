import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:max-w-4xl lg:max-w-5xl mx-auto">{children}</div>;
};

export default Container;
