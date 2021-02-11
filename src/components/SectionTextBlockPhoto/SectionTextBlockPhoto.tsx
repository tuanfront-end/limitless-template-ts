import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionTextBlockPhoto = () => {
  const _renderTextBlock = () => {
    return (
      <div className="text-black dark:text-white">
        <h3 className="text-f4 font-bold mb-3">Lorem ipsum dolor sit amet</h3>
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
    <div className="ttnc-SectionTextBlockPhoto">
      <div className="grid tnnc-grid-col-section-hero min-h-screen py-20">
        <div className="col-start-1 col-end-4 lg:col-end-3 row-start-1 flex items-center justify-end z-10 p-8 lg:p-0">
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black space-y-8">
            <h1 className="text-f2 lg:text-f1 xl:text-d-small font-bold text-black dark:text-white">
              About <span className="text-primary">Warmbeat</span>
            </h1>
            <div className="space-y-8 lg:space-y-10">
              {_renderTextBlock()}
              {_renderTextBlock()}
              {_renderTextBlock()}
            </div>
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

export default SectionTextBlockPhoto;
