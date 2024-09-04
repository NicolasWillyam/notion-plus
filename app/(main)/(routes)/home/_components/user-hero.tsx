import { useUser } from "@clerk/clerk-react";
import React from "react";

const UserHero = () => {
  const { user } = useUser();
  return (
    <h2 className="text-2xl font-semibold">
      Welcome to Notion, {user?.firstName}
    </h2>
  );
};

export default UserHero;
