import React from "react";
import { Alerts } from "./Alerts";
import { Avatars } from "./Avatars";
import { Buttons } from "./Buttons";

export const ComponentsPage: React.FC = () => {
  return (
    <div className="container">
      <div className="space-y-8 md:space-y-9">
        {/* <Alerts /> */}
        {/* <Avatars /> */}
        <Buttons />
      </div>
    </div>
  );
};
