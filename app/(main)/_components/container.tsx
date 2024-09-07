import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:max-w-3xl lg:max-w-4xl mx-auto">{children}</div>;
};

export default Container;
