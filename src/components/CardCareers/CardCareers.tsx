import Button from "components/Button/Button";
import { _getRdEvents, _getTitleRd } from "contains/fakeData";
import React from "react";

const CardCareers = () => {
  const _renderDateBox = () => {
    return (
      <div className="w-16 h-16 lg:w-24 lg:h-24 absolute top-1/2 transform -translate-y-1/2 left-0 lg:-left-12 bg-white flex items-center justify-center flex-col text-primary font-bold text-center">
        <span className="text-small-caps-medium lg:text-small-caps mb-1 mt-2 uppercase">
          open
        </span>
      </div>
    );
  };

  return (
    <div className="ttnc-CardCareers relative py-10 pr-10 pl-24 bg-primary bg-opacity-10 dark:bg-neutral-100 text-black dark:text-white">
      <div className="flex flex-col justify-start items-start space-y-4">
        <h2 className="text-f3 lg:text-f2 font-semibold capitalize">
          {_getRdEvents()}
        </h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2 text-paragraph-xs-small md:text-paragraph-base">
          <div className="opacity-70">Location:</div>
          <div className="opacity-70">Listed on:</div>
          <div>San Francisco</div>
          <div>11/1/2020</div>
        </div>
        <Button size="small" url="/career-single">
          Learn More & Apply
        </Button>
      </div>
      {_renderDateBox()}
    </div>
  );
};

export default CardCareers;
