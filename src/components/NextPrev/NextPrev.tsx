import React, { FC } from "react";

export interface NextPrevProps {
  btnClass?: string;
}

const NextPrev: FC<NextPrevProps> = ({ btnClass = "" }) => {
  return (
    <div
      className="inline-flex items-center text-white text-xl"
      data-glide-el="controls"
    >
      <button
        className={`${btnClass}-prev flex items-center justify-center h-10 w-10 rounded-full bg-primary mr-10px `}
        data-glide-dir="<"
      >
        <i className="las la-long-arrow-alt-left"></i>
      </button>
      <button
        className={`${btnClass}-next flex items-center justify-center h-10 w-10 rounded-full bg-primary `}
        data-glide-dir=">"
      >
        <i className="las la-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default NextPrev;
