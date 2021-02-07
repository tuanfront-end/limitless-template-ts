import { _getAvatarRd, _getPersonNameRd } from "contains/fakeData";
import React from "react";
export interface CardPersonSmallProps {}
const CardPersonSmall = () => {
  const name = _getPersonNameRd();
  return (
    <div className="flex items-center">
      <img
        className="w-24 h-24 flex-shrink-0 object-cover rounded-full mr-6"
        src={_getAvatarRd()}
        alt={name}
      />
      <div className="flex flex-col">
        <span className="text-f5 md:text-f4 font-bold text-black dark:text-white mb-1">
          {name}
        </span>
        <span className="text-small-caps-medium uppercase text-neutral-200 dark:text-neutral-800">
          {_getPersonNameRd()}
        </span>
      </div>
    </div>
  );
};

export default CardPersonSmall;
