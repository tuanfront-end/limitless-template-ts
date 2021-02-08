import TagBadge from "components/TagBadge/TagBadge";
import { _getTitleRd } from "contains/fakeData";
import React from "react";

const CardEvent = () => {
  const _renderDateBox = () => {
    return (
      <div className="w-16 h-16 lg:w-24 lg:h-24 absolute top-1/2 transform -translate-y-1/2 left-0 lg:-left-12 bg-white flex items-center justify-center flex-col text-primary font-bold text-center">
        <span className="text-small-caps-medium lg:text-small-caps mb-1 mt-2">
          DEC
        </span>
        <span className="text-f4 lg:text-f3">31</span>
      </div>
    );
  };

  return (
    <div className="ttnc-CardEvent relative py-10 pr-10 pl-24 bg-primary bg-opacity-10 dark:bg-neutral-100">
      <div className="space-y-6">
        <TagBadge />
        <h2 className="text-f3 lg:text-f2 font-semibold text-black dark:text-white capitalize">
          {_getTitleRd()}
        </h2>
        <a
          className="uppercase shadow-link-thin hover:shadow-link-tick text-black dark:text-white text-link-medium lg:text-link-large font-bold tracking-wider px-1"
          href="//#endregion"
        >
          Learn More
        </a>
      </div>
      {_renderDateBox()}
    </div>
  );
};

export default CardEvent;
