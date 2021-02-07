import NextPrev from "components/NextPrev/NextPrev";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionImageCarousel = () => {
  const _renderItem = () => {
    return (
      <li className="glide__slide h-full">
        <img
          className="h-full w-full object-cover"
          src={_getImgHightQualityRd()}
          alt=""
        />
      </li>
    );
  };

  return (
    <div className="ttnc-SectionImageCarousel h-screen my-10 py-10">
      <div className="glide-peek h-full flex flex-col">
        <div className="glide__track flex-grow" data-glide-el="track">
          <ul className="glide__slides h-full">
            {_renderItem()}
            {_renderItem()}
            {_renderItem()}
            {_renderItem()}
            {_renderItem()}
          </ul>
        </div>
        <div className="mt-8 text-center flex-shrink-0">
          <NextPrev />
        </div>
      </div>
    </div>
  );
};

export default SectionImageCarousel;
