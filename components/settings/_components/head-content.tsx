import React from "react";

interface HeadContentProps {
  label: string;
}

const HeadContent = ({ label }: HeadContentProps) => {
  return (
    <div>
      <p className="text-base font-medium">{label}</p>
      <hr className="mt-3 mb-4" />
    </div>
  );
};

export default HeadContent;
