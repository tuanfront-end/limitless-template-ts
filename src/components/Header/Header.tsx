import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";

export default function Header() {
  return (
    <div className="flex container justify-between">
      <h2>Header</h2>
      <SwithNightMode />
    </div>
  );
}
