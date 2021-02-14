import NextPrev from "components/NextPrev/NextPrev";
import { imgHigtQualitys } from "contains/fakeData";
import React from "react";

const SectionImageCarousel = () => {
  const _renderItem = (item: string, index: number) => {
    if (index >= 5) return null;
    return (
      <li className="glide__slide h-full" key={String(index)}>
        <img className="h-full w-full object-cover" src={item} alt="" />
      </li>
    );
  };

  return (
    <div className="ttnc-SectionImageCarousel overflow-hidden">
      <div className="py-20 h-screen">
        <div className="glide-peek h-full flex flex-col">
          <div className="glide__track flex-grow" data-glide-el="track">
            <ul className="glide__slides h-full">
              {imgHigtQualitys.map(_renderItem)}
            </ul>
          </div>
          <div className="mt-8 text-center flex-shrink-0">
            <NextPrev />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImageCarousel;
