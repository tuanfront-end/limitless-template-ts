import Button from "components/Button/Button";
import { _getImgRd, _getTagNameRd, _getTitleRd } from "contains/fakeData";
import React from "react";
export interface CardVerticalProps {
  imgSrc?: string;
}
const CardVertical: React.FC<CardVerticalProps> = ({ imgSrc, children }) => {
  const title = _getTitleRd();
  return (
    <div>
      <div className="relative aspect-w-4 aspect-h-3">
        <a href="#root">
          <img
            className="object-cover absolute inset-0 w-full h-full"
            src={imgSrc || _getImgRd()}
            alt={title}
          />
        </a>
      </div>
      <div className="mt-6 flex flex-col items-start space-y-4">
        <span className="text-small-caps font-bold text-neutral-400 dark:text-neutral-700">
          {_getTagNameRd()}
        </span>
        <h2 className="text-f5 text-black dark:text-white font-bold capitalize">
          <a href="#root">{title}</a>
        </h2>
        <span className="text-paragraph-small text-neutral-200 dark:text-neutral-800">
          {children ||
            `Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
          quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
          interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
          aliquet urna quis.`}
        </span>
        <Button size="small" url="/blog-single">
          Read now
        </Button>
      </div>
    </div>
  );
};

export default CardVertical;
