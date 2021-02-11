import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";
export interface SectionHeroProps {
  renderFooter?: React.ReactNode;
  title?: string;
  subTitle?: string;
  isRight?: boolean;
}
const SectionHero: React.FC<SectionHeroProps> = ({
  renderFooter,
  title,
  subTitle,
  isRight = false,
}) => {
  return (
    <div className="ttnc-SectionHero py-20">
      <div className="grid tnnc-grid-col-section-hero min-h-screen">
        <div
          className={`flex items-center z-10 p-8 lg:p-0 row-start-1 ${
            isRight
              ? "col-start-1 lg:col-start-2 col-end-4 justify-start"
              : "col-start-1 col-end-4 lg:col-end-3 justify-end"
          }`}
        >
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black space-y-8">
            <span className="uppercase text-small-caps font-bold text-primary">
              {subTitle || "Warmbeat"}
            </span>
            <h2 className="text-f2 xl:text-f1 font-bold text-black dark:text-white">
              {title || "Enabling emerging adults to adapt and succeed."}
            </h2>
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
        <div
          className={`relative row-start-1 ${
            isRight
              ? "col-start-1 col-end-4 lg:col-end-3"
              : "col-start-1 lg:col-start-2 col-end-4"
          }`}
        >
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
