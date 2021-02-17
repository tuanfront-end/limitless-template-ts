import {
  facesHightQlt,
  _getAvatarRd,
  _getPersonNameRd,
} from "contains/fakeData";
import React from "react";
export interface CardPersonProps {
  img?: string;
}
const CardPerson: React.FC<CardPersonProps> = ({ img }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <img
        className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover block"
        src={
          img || facesHightQlt[Math.floor(Math.random() * facesHightQlt.length)]
        }
        alt={_getPersonNameRd()}
      />
      <div className="flex flex-col items-center space-y-2">
        <span className="text-f4 md:text-f3 text-black dark:text-white font-bold text-center">
          {_getPersonNameRd()}
        </span>
        <span className="block uppercase text-neutral-300">CO-FOUNDER</span>
        <span className="text-paragraph-small md:text-paragraph-base text-neutral-200 dark:text-neutral-800">
          Voluptates necessitatibus voluptas asperiores. Natus consequuntur illo
          officia aliquam. Minus illum voluptat
        </span>
      </div>
    </div>
  );
};

export default CardPerson;
