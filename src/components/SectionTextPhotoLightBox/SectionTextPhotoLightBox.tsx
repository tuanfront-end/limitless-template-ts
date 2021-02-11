import Button from "components/Button/Button";
import NextPrev from "components/NextPrev/NextPrev";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionTextPhotoLightBox = () => {
  return (
    <div className="ttnc-SectionTextPhotoLightBox py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <div className="md:row-start-1 flex justify-end">
          <div className="max-w-screen-sm p-4 md:p-10 text-black dark:text-white space-y-6 lg:space-y-10">
            <h2 className="text-f2 lg:text-f1 font-bold">
              About <span className="text-primary">Warmbeat</span>
            </h2>
            <span className="block text-paragraph-small lg:text-paragraph-base font-semibold">
              Warmbeat is a budding non-profit based in Boise, ID founded by
              Abel Hancock in 2018.
              <br />
              <br />
              Abel's experience as an emerging adult in a complicated world
              inspired him to make a difference for other emerging adults.
              <br />
              <br />
              After searching in vain for an organization or community to help
              emerging adults adapt to change and be successful he realized it
              was an ongoing need with no solution. It inspired him to found
              Warmbeat – the non-profit organization with a mission to help
              emerging adults.
            </span>
            <Button size="large">our mission</Button>
          </div>
        </div>
        <div className="glide row-start-1 relative aspect-w-3 aspect-h-4 md:aspect-none">
          <div className="glide__track w-full h-full" data-glide-el="track">
            <ul className="glide__slides w-full h-full">
              <li className="glide__slide w-full h-full relative">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </li>
              <li className="glide__slide w-full h-full relative">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={_getImgHightQualityRd()}
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="py-4 hidden md:block">
            <NextPrev />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTextPhotoLightBox;
