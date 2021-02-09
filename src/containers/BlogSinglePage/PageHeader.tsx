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
  const title = _getTitleRd();
  return (
    <div
      className={`md:flex space-y-10 md:space-y-0 py-20 ${
        isRight ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className={`block object-cover flex-shrink-0 h-auto md:w-6/12 ${
          isRight ? "md:pl-8 lg:pl-10" : "md:pr-8 lg:pr-10"
        }`}
        src="https://images.pexels.com/photos/6647971/pexels-photo-6647971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // src={_getImgHightQualityRd()}
        alt={title}
      />
      <div
        className={`flex items-start justify-center flex-col my-10 space-y-5 md:w-6/12 ${
          isRight ? "md:pr-8 lg:pr-10" : "md:pl-8 lg:pl-10"
        }`}
      >
        <span className="uppercase text-secondary tracking-wide">Story</span>
        <h2 className="text-f3 lg:text-f2 font-bold text-black dark:text-white capitalize">
          {title}
        </h2>
        <span className="font-light">By {_getPersonNameRd()}</span>
      </div>
    </div>
  );
};

export default PageHeader;
