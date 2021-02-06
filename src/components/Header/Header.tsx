import Annoucement from "components/Annoucement/Annoucement";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <div className="fixed text-right top-1/2 transform -translate-y-1/2 right-1 z-max">
        <SwithNightMode />
      </div>
      <div>
        <Annoucement />
      </div>
    </div>
  );
}
