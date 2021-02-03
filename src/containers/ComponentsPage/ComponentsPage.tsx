import React from "react";
import { Alerts } from "./Alerts";
import { Avatars } from "./Avatars";

export const ComponentsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="space-y-8 md:space-y-9">
        <Alerts />
        <Avatars />
      </div>
    </div>
  );
};
