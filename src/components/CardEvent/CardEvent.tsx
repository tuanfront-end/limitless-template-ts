import TagBadge from "components/TagBadge/TagBadge";
import { _getRdEvents, _getTitleRd } from "contains/fakeData";
import React from "react";
import { Link } from "react-router-dom";

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
          {_getRdEvents()}
        </h2>
        <Link
          className="uppercase shadow-link-thin hover:shadow-link-tick text-black dark:text-white text-link-medium lg:text-link-large font-bold tracking-wider px-1"
          to="/event-single"
        >
          Learn More
        </Link>
      </div>
      {_renderDateBox()}
    </div>
  );
};

export default CardEvent;
