import { _getTagNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface TagBadgeProps {
  containerClassName?: string;
}

const TagBadge: FC<TagBadgeProps> = ({
  containerClassName = "text-white bg-secondary",
}) => {
  return (
    <a
      href="#root"
      className={`inline-block pt-2 pb-1 px-3 text-paragraph-tiny tracking-wider uppercase font-semibold hover:opacity-90 rounded-full ${containerClassName}`}
    >
      {_getTagNameRd()}
    </a>
  );
};

export default TagBadge;
