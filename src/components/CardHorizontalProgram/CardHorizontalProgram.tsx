import Button from "components/Button/Button";
import IconDotVertical from "components/IconDotVertical/IconDotVertical";
import IconLikeCard from "components/IconLikeCard/IconLikeCard";
import IconShareCard from "components/IconShareCard/IconShareCard";
import { _getImgRd, _getTitleRd } from "contains/fakeData";
import React from "react";
export interface CardHorizontalProgramProps {
  enableFooterRight?: boolean;
}
const CardHorizontalProgram: React.FC<CardHorizontalProgramProps> = ({
  enableFooterRight = false,
}) => {
  const title = _getTitleRd();
  const _renderFooter = () => {
    return (
      <div className="flex items-center justify-between space-x-4 mt-4">
        <a href="#">
          <Button size="small">Small Button </Button>
        </a>
        {enableFooterRight && (
          <div className="flex-shrink-0 flex items-center space-x-4">
            <IconLikeCard />
            <IconShareCard />
            <IconDotVertical />
          </div>
        )}
      </div>
    );
  };

  const _renderImageFeatured = () => {
    const img = _getImgRd();

    return (
      <div className="flex-shrink-0">
        <a href="//#endregion">
          <img
            className="rounded object-cover w-52 h-52"
            src={img}
            alt={title}
          />
        </a>
      </div>
    );
  };

  return (
    <div className="ttnc-CardHorizontalProgram md:flex">
      {_renderImageFeatured()}
      <div className="px-6 overflow-hidden">
        <h2 className="text-f3 font-bold text-black dark:text-white mb-3 capitalize truncate">
          <a href="//#endregion"> {title}</a>
        </h2>
        <span className="text-paragraph-small font-normal text-gray-200 dark:text-gray-800">
          Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
          quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
          interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
          aliquet urna quis.
        </span>
        {_renderFooter()}
      </div>
    </div>
  );
};

export default CardHorizontalProgram;
