import { Link, LucideProps } from "lucide-react";
import React from "react";

import { Button } from "./ui/button";

interface LearnDocsProps {
  href: string;
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const LearnDocs = ({ href, label, icon: Icon }: LearnDocsProps) => {
  return (
    <Button
      className="w-fit text-muted-foreground/70 hover:text-muted-foreground/70 h-6 px-1.5 "
      variant={"ghost"}
      size={"sm"}
    >
      <Icon className="mr-1.5 h-3.5 w-3.5" />
      {label}
    </Button>
  );
};

export default LearnDocs;
