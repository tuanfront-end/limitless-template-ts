import { _getImgHightQualityRd, _getTitleRd } from "contains/fakeData";
import React from "react";
import { Link } from "react-router-dom";
export interface CardHorizontalProgram2Props {
  isRight?: boolean;
  img?: string;
}
const CardHorizontalProgram2: React.FC<CardHorizontalProgram2Props> = ({
  isRight = false,
  img,
}) => {
  const title = _getTitleRd();

  return (
    <div
      className={`ttnc-CardHorizontalProgram2 md:flex space-y-10 md:space-y-0 ${
        isRight ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className={`block object-cover flex-shrink-0 h-auto md:w-6/12 ${
          isRight ? "md:pl-8 lg:pl-10" : "md:pr-8 lg:pr-10"
        }`}
        src={img || _getImgHightQualityRd()}
        alt={title}
      />
      <div
        className={`flex items-start justify-center flex-col space-y-4 md:py-32 lg:py-48 md:w-6/12 ${
          isRight ? "md:pr-8 lg:pr-10" : "md:pl-8 lg:pl-10"
        }`}
      >
        <h2 className="text-f3 lg:text-f2 font-semibold text-black dark:text-white capitalize">
          {title}
        </h2>
        <span className="text-neutral-100 dark:text-neutral-800 ttnc-line-clamp-4">
          Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
          quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
          interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
          aliquet urna quis.
        </span>
        <Link
          className="block uppercase shadow-link-thin hover:shadow-link-tick text-black dark:text-white text-link-medium lg:text-link-large font-bold tracking-wider px-1"
          to="/program-single"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CardHorizontalProgram2;
