import {
  _getImgHightQualityRd,
  _getPersonNameRd,
  _getTitleRd,
} from "contains/fakeData";
import React from "react";
export interface PageHeaderProps {
  isRight?: boolean;
}
const PageHeader: React.FC<PageHeaderProps> = ({ isRight = true }) => {
  const title = "How COVID-19 changed our outlook on helping from a distance.";
  return (
    <div
      className={`flex flex-col space-y-10 md:space-y-0 py-10 md:py-20 ${
        isRight ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        className={`block object-cover flex-shrink-0 h-auto md:w-6/12 ${
          isRight ? "md:pl-8" : "md:pr-8"
        }`}
        src="https://images.pexels.com/photos/5755613/pexels-photo-5755613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt={title}
      />
      <div
        className={`flex items-start justify-center flex-col my-10 space-y-5 md:w-6/12 text-black dark:text-white ${
          isRight ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <span className="uppercase text-secondary tracking-wide">Story</span>
        <h2 className="text-f3 lg:text-f2 font-bold capitalize">{title}</h2>
        <span className="font-light">
          By {_getPersonNameRd()} • 25th November, 2020
        </span>
      </div>
    </div>
  );
};

export default PageHeader;
