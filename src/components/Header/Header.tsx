import Annoucement from "components/Annoucement/Annoucement";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import SearchInput from "components/SearchInput/SearchInput";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";

export default function Header() {
  return (
    <div>
      <div>
        <Annoucement />
      </div>
      <div
        className="hidden md:block relative bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        id="ttnc-header-02"
      >
        <div className="container">
          <div className="flex justify-between items-center py-4 space-x-4 lg:space-x-8">
            <div className="flex justify-start flex-shrink-0 lg:w-0 lg:flex-1">
              <Logo />
            </div>

            <div className="flex flex-wrap text-sm lg:text-base font-medium capitalize">
              <Navigation />
            </div>

            <div className="lg:w-0 lg:flex-1 flex-shrink-0 md:flex items-center justify-end text-gray-900 dark:text-gray-100">
              {/* <SearchInput /> */}
              <SwithNightMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
