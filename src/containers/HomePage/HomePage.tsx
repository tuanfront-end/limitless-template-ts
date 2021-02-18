import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionHeroFullImage from "components/SectionHeroFullImage/SectionHeroFullImage";
import SectionImageCarousel from "components/SectionImageCarousel/SectionImageCarousel";
import SectionLogoPartner from "components/SectionLogoPartner/SectionLogoPartner";
import SectionMission from "components/SectionMission/SectionMission";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionStats from "components/SectionStats/SectionStats";
import SectionSubscribe from "components/SectionSubscribe/SectionSubscribe";
import SectionTeam from "components/SectionTeam/SectionTeam";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import SectionTextSectionPhoto from "components/SectionTextSectionPhoto/SectionTextSectionPhoto";
import React from "react";

export default function HomePage() {
  return (
    <div className="ttnc-home-page bg-white dark:bg-black">
      <SectionHeroFullImage />
      <SectionTextSectionPhoto img="https://images.pexels.com/photos/6141092/pexels-photo-6141092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <span>
          Warmbeat is a budding non-profit based in Boise, ID founded by Abel
          Hancock in 2018. <br />
          <br />
          Abel's experience as an emerging adult in a complicated world inspired
          him to make a difference for other emerging adults.
          <br />
          <br /> After searching in vain for an organization or community to
          help emerging adults adapt to change and be successful he realized it
          was an ongoing need with no solution. It inspired him to found
          Limitless – the non-profit organization with a mission to help
          emerging adults.
        </span>
      </SectionTextSectionPhoto>
      <SectionProgram />

      <SectionStats />
      <SectionLogoPartner />
      <SectionMission
        img="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="We exist for your success."
      >
        <span className="sr-only">Our mission</span>
      </SectionMission>
      <SectionSubscribe />
      <SectionTeam />

      <SectionBlog />
      <SectionImageCarousel />
    </div>
  );
}
