import { _getImgHightQualityRd, _getPersonNameRd } from "contains/fakeData";
import React from "react";
export interface CardPersonProps {}
const CardPerson = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:space-y-8">
      <img
        className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
        src={_getImgHightQualityRd()}
        alt={_getPersonNameRd()}
      />
      <span className="text-f4 md:text-f3 text-black dark:text-white font-bold">
        {_getPersonNameRd()}
      </span>
      <span className="text-paragraph-small md:text-paragraph-base text-neutral-200 dark:text-neutral-800">
        Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing
        risus pulvinar non sed nullam id integer. Integer quis porttitor mauris
        arcu, pretium orci quam. Enim cursus mattis nunc aliquam pharetra
        feugiat ante sollicitudin.
      </span>
    </div>
  );
};

export default CardPerson;
