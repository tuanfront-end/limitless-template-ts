import Button from "components/Button/Button";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionBgImage = () => {
  return (
    <div className="ttnc-SectionBgImage my-20 min-h-screen flex items-center justify-center relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={_getImgHightQualityRd()}
        alt=""
      />
      <div className="absolute inset-0 bg-secondary bg-opacity-70 z-10"></div>

      <div className="relative container py-8 z-10 text-center">
        <h2 className="text-f1 lg:text-d-small font-bold text-white mb-10">
          We exist for your success.
        </h2>
        <Button size="large" type="ghost" url="/our-mission">
          Our Mission
        </Button>
      </div>
    </div>
  );
};

export default SectionBgImage;
