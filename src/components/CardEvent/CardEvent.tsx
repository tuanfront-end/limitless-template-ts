import TagBadge from "components/TagBadge/TagBadge";
import { _getTitleRd } from "contains/fakeData";
import React from "react";

const CardEvent = () => {
  const _renderDateBox = () => {
    return (
      <div className="w-24 h-24 absolute top-1/2 transform -translate-y-1/2 -left-12 bg-white flex items-center justify-center flex-col text-primary font-bold text-center">
        <span className="text-small-caps mb-1 mt-2">DEC</span>
        <span className="text-f3">31</span>
      </div>
    );
  };

  return (
    <div className="relative py-6 pr-12 pl-24 bg-primary bg-opacity-10 dark:bg-neutral-100">
      {_renderDateBox()}
      <TagBadge />
      <h2 className="text-f2 my-6 font-bold text-black dark:text-white capitalize">
        {_getTitleRd()}
      </h2>
      <a
        className="uppercase shadow-link-thin hover:shadow-link-tick text-black dark:text-white text-link-medium font-bold"
        href="//#endregion"
      >
        Medium hover
      </a>
    </div>
  );
};

export default CardEvent;
