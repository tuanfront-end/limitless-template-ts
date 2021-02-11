import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionHeroFullImage = () => {
  return (
    <section className="ttnc-SectionHeroFullImage relative min-h-screen bg-gray-300 text-center flex flex-col items-center justify-center lg:pt-40">
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={_getImgHightQualityRd()}
        alt=""
      />
      <div className="text-center flex flex-col items-center justify-end text-white space-y-6 py-8 lg:py-12 relative z-20">
        <span className="uppercase text-small-caps font-bold">Warmbeat</span>
        <h2 className="max-w-screen-lg mx-auto px-4 text-f2 lg:text-f1 xl:text-d-small font-bold">
          Enabling emerging adults to adapt and succeed.
        </h2>
        <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-9">
          <Button type="ghost" size="medium">
            Donate
          </Button>
          <Button size="medium">Get this template</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionHeroFullImage;
