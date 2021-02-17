import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

export interface SectionTextSectionPhotoProps {
  img?: string;
}

const SectionTextSectionPhoto: React.FC<SectionTextSectionPhotoProps> = ({
  img,
  children,
}) => {
  const _renderTextBlock = () => {
    return (
      <div className="text-black dark:text-white">
        {children || (
          <span>
            Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
            adipiscing risus pulvinar non sed nullam id integer. Integer quis
            porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
            aliquam pharetra feugiat ante sollicitudin.{" "}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="ttnc-SectionTextSectionPhoto">
      <div className="grid tnnc-grid-col-section-hero min-h-screen py-20">
        <div className="col-start-1 col-end-4 lg:col-end-3 row-start-1 flex items-center justify-end z-10 p-4 lg:p-0">
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black space-y-8">
            <h2 className="text-f2 lg:text-f1 2xl:text-d-small font-bold text-black dark:text-white">
              About <span className="text-primary">Warmbeat</span>
            </h2>
            {_renderTextBlock()}
            <Button size="medium" url="/volunteer">
              Get involved
            </Button>
          </div>
        </div>
        <div className="relative col-start-1 lg:col-start-2 col-end-4 row-start-1">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img || _getImgHightQualityRd()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTextSectionPhoto;
