import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionHeroFullImage from "components/SectionHeroFullImage/SectionHeroFullImage";
import SectionImageCarousel from "components/SectionImageCarousel/SectionImageCarousel";
import SectionMission from "components/SectionMission/SectionMission";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionSubscribe from "components/SectionSubscribe/SectionSubscribe";
import SectionTeam from "components/SectionTeam/SectionTeam";
import SectionTextSectionPhoto from "components/SectionTextSectionPhoto/SectionTextSectionPhoto";
import React from "react";

export default function HomePage() {
  return (
    <div className="ttnc-home-page bg-white dark:bg-black">
      <SectionHeroFullImage />
      <SectionTextSectionPhoto />
      <SectionProgram />
      <SectionMission>
        <span className="sr-only">Our mission</span>
      </SectionMission>
      <SectionSubscribe />
      <SectionTeam />
      <SectionBlog />
      <SectionImageCarousel />
    </div>
  );
}
