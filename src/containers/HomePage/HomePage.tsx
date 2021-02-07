import SectionHeroFullImage from "components/SectionHeroFullImage/SectionHeroFullImage";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionTextSectionPhoto from "components/SectionTextSectionPhoto/SectionTextSectionPhoto";
import React from "react";

export default function HomePage() {
  return (
    <div className="ttnc-home-page space-y-8 bg-white dark:bg-black">
      <SectionHeroFullImage />
      <SectionTextSectionPhoto />
      <SectionProgram />
    </div>
  );
}
