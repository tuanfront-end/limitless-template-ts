import {
  _getImgHightQualityRd,
  _getPersonNameRd,
  _getTitleRd,
} from "contains/fakeData";
import React from "react";
export interface PageHeaderProps {}
const PageHeader: React.FC<PageHeaderProps> = ({}) => {
  const title =
    "Quam dolorum qui rerum ipsum sed sapiente. Aut porro enim fugit magni consequatur delectus est. Sit officiis corporis sit.";
  return (
    <div className="min-h-screen flex items-center justify-center relative mb-20">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={_getImgHightQualityRd()}
        alt=""
      />
      <div className="absolute inset-0 bg-secondary bg-opacity-70 z-10"></div>

      <div className="relative container py-8 z-10 text-center text-white">
        <span className="uppercase font-semibold text-paragraph-small mb-4 block">
          COLLEGE PEER MENTORSHIPS
        </span>
        <h2 className="text-f2 font-semibold mb-10">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
