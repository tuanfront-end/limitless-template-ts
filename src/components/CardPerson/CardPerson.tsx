import { _getAvatarRd, _getPersonNameRd } from "contains/fakeData";
import React from "react";
export interface CardPersonProps {}
const CardPerson = () => {
  const faces = [
    "https://images.pexels.com/photos/3602640/pexels-photo-3602640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3760733/pexels-photo-3760733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2930260/pexels-photo-2930260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];
  return (
    <div className="flex flex-col items-center space-y-6">
      <img
        className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover block"
        src={faces[Math.floor(Math.random() * faces.length)]}
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
