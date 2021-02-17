import { _getAvatarRd, _getPersonNameRd, avatarImgs } from "contains/fakeData";
import React from "react";
export interface CardPersonSmallProps {
  img?: string;
  name?: string;
}
const CardPersonSmall: React.FC<CardPersonSmallProps> = ({ img, name }) => {
  const autName = name || _getPersonNameRd();
  return (
    <div className="flex items-center">
      <img
        className="w-24 h-24 flex-shrink-0 object-cover rounded-full mr-6"
        src={img || _getAvatarRd()}
        alt={autName}
      />
      <div className="flex flex-col">
        <span className="text-f5 md:text-f4 font-bold text-black dark:text-white mb-1">
          {autName}
        </span>
        <span className="text-small-caps-medium uppercase text-neutral-200 dark:text-neutral-800">
          {_getPersonNameRd()}
        </span>
      </div>
    </div>
  );
};

export default CardPersonSmall;
