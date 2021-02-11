import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionTextSectionPhoto = () => {
  const _renderTextBlock = () => {
    return (
      <div className="text-black dark:text-white">
        <span>
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.{" "}
        </span>
      </div>
    );
  };

  return (
    <div className="ttnc-SectionTextSectionPhoto">
      <div className="grid tnnc-grid-col-section-hero min-h-screen py-20">
        <div className="col-start-1 col-end-4 lg:col-end-3 row-start-1 flex items-center justify-end z-10 p-8 lg:p-0">
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black space-y-8">
            <h1 className="text-f2 lg:text-f1 2xl:text-d-small font-bold text-black dark:text-white">
              About <span className="text-primary">Warmbeat</span>
            </h1>
            {_renderTextBlock()}
            <Button size="medium">Get involved</Button>
          </div>
        </div>
        <div className="relative col-start-1 lg:col-start-2 col-end-4 row-start-1">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={_getImgHightQualityRd()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTextSectionPhoto;
