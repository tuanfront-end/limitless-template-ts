import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";
export interface SectionHeroProps {
  renderFooter?: React.ReactNode;
  title?: string;
  subTitle?: string;
}
const SectionHero: React.FC<SectionHeroProps> = ({
  renderFooter,
  title,
  subTitle,
}) => {
  return (
    <div className="ttnc-SectionHero py-20">
      <div className="grid tnnc-grid-col-section-hero min-h-screen">
        <div className="col-start-1 col-end-4 lg:col-end-3 row-start-1 flex items-center justify-end z-10 p-8 lg:p-0">
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black space-y-8">
            <span className="uppercase text-small-caps font-bold text-primary">
              {subTitle || "Limitless"}
            </span>
            <h1 className="text-f2 lg:text-f1 font-bold text-black dark:text-white">
              {title || " Enabling emerging adults to adapt and succeed."}
            </h1>
            {renderFooter || (
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9">
                <Button type="ghost" size="medium">
                  Donate
                </Button>
                <Button size="medium">Get this template</Button>
              </div>
            )}
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

export default SectionHero;
