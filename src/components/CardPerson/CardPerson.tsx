import { _getImgHightQualityRd, _getPersonNameRd } from "contains/fakeData";
import React from "react";
export interface CardPersonProps {}
const CardPerson = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-64 h-64 rounded-full object-cover mb-8"
        src={_getImgHightQualityRd()}
        alt={_getPersonNameRd()}
      />
      <span className="text-f3 text-black dark:text-white font-bold mb-8">
        {_getPersonNameRd()}
      </span>
      <span className="text-paragraph-base text-gray-200 dark:text-gray-800">
        Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem adipiscing
        risus pulvinar non sed nullam id integer. Integer quis porttitor mauris
        arcu, pretium orci quam. Enim cursus mattis nunc aliquam pharetra
        feugiat ante sollicitudin.
      </span>
    </div>
  );
};

export default CardPerson;
