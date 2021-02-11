import Button from "components/Button/Button";
import IconDotVertical from "components/IconDotVertical/IconDotVertical";
import IconLikeCard from "components/IconLikeCard/IconLikeCard";
import IconShareCard from "components/IconShareCard/IconShareCard";
import { _getImgRd, _getTitleRd } from "contains/fakeData";
import React from "react";
export interface CardHorizontalProps {
  enableLeading?: boolean;
  enableFooter?: boolean;
  enableFooterRight?: boolean;
  imageSize?: "small" | "large";
}
const CardHorizontal: React.FC<CardHorizontalProps> = ({
  enableLeading = true,
  enableFooter = true,
  enableFooterRight = true,
  imageSize = "small",
}) => {
  const title = _getTitleRd();
  const _renderFooter = () => {
    return (
      <div className="flex items-center justify-between space-x-4 mt-6">
        <a href="#root">
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
      <div
        className={`flex-shrink-0 ${imageSize === "small" ? "py-6 pl-6" : ""}`}
      >
        <a href="#root">
          <img
            className={`rounded object-cover ${
              imageSize === "small" ? "w-20 h-20" : "w-40 h-40"
            }`}
            src={img}
            alt={title}
          />
        </a>
      </div>
    );
  };

  return (
    <div className="ttnc-CardHorizontal md:flex">
      {_renderImageFeatured()}
      <div className="px-6">
        {enableLeading && (
          <span className="text-small-caps text-neutral-200 dark:text-neutral-800 font-bold mb-1">
            Card Leading
          </span>
        )}
        <h2 className="text-f5 font-bold text-black dark:text-white mb-3 capitalize">
          <a href="#root"> {title}</a>
        </h2>
        <span className="text-paragraph-small font-normal text-neutral-200 dark:text-neutral-800 ttnc-line-clamp-4">
          Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
          quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
          interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
          aliquet urna quis.
        </span>
        {enableFooter && _renderFooter()}
      </div>
    </div>
  );
};

export default CardHorizontal;
