import Button from "components/Button/Button";
import ButtonScroll from "components/ButtonScroll/ButtonScroll";
import { _getImgHightQualityRd, _getTitleRd } from "contains/fakeData";
import React from "react";

export interface SectionMissionNextPrevProps {
  img?: string;
  title?: string;
  scrollUpId?: string;
  scrollDownId?: string;
  scrollUpText?: string;
  scrollDownText?: string;
  id: string;
}

const SectionMissionNextPrev: React.FC<SectionMissionNextPrevProps> = ({
  children,
  img,
  title,
  scrollDownId,
  scrollUpId,
  scrollUpText,
  scrollDownText,
  id,
}) => {
  return (
    <div
      className="ttnc-SectionMissionNextPrev min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 py-20"
      id={id}
    >
      <div className="relative aspect-w-3 aspect-h-3 md:aspect-none">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={img || _getImgHightQualityRd()}
          alt=""
        />
      </div>
      <div className="flex items-center justify-start">
        <div className="max-w-screen-sm px-4 md:px-0 md:my-16 text-black dark:text-white space-y-6 lg:space-y-10">
          {scrollUpId && (
            <a className="block" href={scrollUpId}>
              <ButtonScroll isUp />
            </a>
          )}
          {scrollUpText && (
            <span className="block uppercase text-secondary text-small-caps">
              {scrollUpText}
            </span>
          )}
          <h2 className="text-f1 2xl:text-d-small font-bold">
            {title || _getTitleRd()}
          </h2>
          {children && (
            <span className="block text-paragraph-small lg:text-paragraph-base font-semibold">
              {children ||
                `Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}
            </span>
          )}
          {scrollDownText && (
            <span className="block uppercase text-secondary text-small-caps">
              {scrollDownText}
            </span>
          )}
          {scrollDownId && (
            <a className="block" href={scrollDownId}>
              <ButtonScroll />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionMissionNextPrev;
