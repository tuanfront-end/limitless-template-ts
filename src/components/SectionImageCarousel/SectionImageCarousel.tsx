import NextPrev from "components/NextPrev/NextPrev";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionImageCarousel = () => {
  return (
    <div className="py-20">
      <div className="glide-peek">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="aspect-w-3 md:aspect-w-5 aspect-h-3 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </div>
            </li>
            <li className="glide__slide">
              <div className="aspect-w-3 md:aspect-w-5 aspect-h-3 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </div>
            </li>
            <li className="glide__slide">
              <div className="aspect-w-3 md:aspect-w-5 aspect-h-3 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </div>
            </li>
            <li className="glide__slide">
              <div className="aspect-w-3 md:aspect-w-5 aspect-h-3 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <NextPrev />
        </div>
      </div>
    </div>
  );
};

export default SectionImageCarousel;
