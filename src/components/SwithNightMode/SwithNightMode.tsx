import React from "react";

function SwithNightMode() {
  return (
    <div>
      <button
        id="ttnc-switch-night-mode"
        tabIndex={0}
        className="flex items-center rounded-full border-2 border-primary py-1 px-1 flex-row dark:flex-row-reverse focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span className="sr-only">Enable dark mode</span>
        <span className="bg-primary rounded-full w-7 h-7"></span>
        <span
          id="wil-switch-night-mode-text"
          className="text-gray-900 dark:text-gray-200 px-2 text-paragraph-base font-bold flex items-center justify-center"
        >
          <i className="lar la-sun dark:hidden"></i>
          <i className="lar la-moon hidden dark:block"></i>
        </span>
      </button>
    </div>
  );
}

export default SwithNightMode;
