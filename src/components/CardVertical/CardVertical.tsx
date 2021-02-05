import Button from "components/Button/Button";
import { _getImgRd, _getTitleRd } from "contains/fakeData";
import React from "react";
export interface CardVerticalProps {}
const CardVertical = () => {
  const title = _getTitleRd();
  return (
    <div>
      <div className="relative aspect-w-4 aspect-h-3">
        <a href="//#endregion">
          <img
            className="object-cover absolute inset-0 w-full h-full"
            src={_getImgRd()}
            alt={title}
          />
        </a>
      </div>
      <div className="mt-6 flex flex-col items-start">
        <span className="text-small-caps font-bold text-gray-200 dark:text-gray-800 mb-1">
          Blog
        </span>
        <h2 className="text-f5 text-black dark:text-white font-bold mb-3 capitalize">
          <a href="//#endregion">{title}</a>
        </h2>
        <span className="text-paragraph-small text-gray-200 dark:text-gray-800 mb-6">
          Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
          quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
          interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
          aliquet urna quis.
        </span>
        <a href="//#endregion">
          <Button size="small">Read now</Button>
        </a>
      </div>
    </div>
  );
};

export default CardVertical;
