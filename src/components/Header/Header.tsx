import Annoucement from "components/Annoucement/Annoucement";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <SwithNightMode />
      <div>
        <Annoucement />
      </div>
    </div>
  );
}
