import { _getTagNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface TagBadgeProps {
  containerClassName?: string;
}

const TagBadge: FC<TagBadgeProps> = ({
  containerClassName = "text-white bg-primary",
}) => {
  return (
    <a
      href="//#endregion"
      className={`inline-block pt-2 pb-1 px-3 text-small-caps uppercase font-bold rounded-full hover:opacity-95 ${containerClassName}`}
    >
      {_getTagNameRd()}
    </a>
  );
};

export default TagBadge;
