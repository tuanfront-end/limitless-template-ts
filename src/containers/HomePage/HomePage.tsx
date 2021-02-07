import SectionBgImage from "components/SectionBgImage/SectionBgImage";
import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionHero from "components/SectionHero/SectionHero";
import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionHeroFullImage from "components/SectionHeroFullImage/SectionHeroFullImage";
import SectionImageCarousel from "components/SectionImageCarousel/SectionImageCarousel";
import SectionMisson from "components/SectionMisson/SectionMisson";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import SectionSubscribe from "components/SectionSubscribe/SectionSubscribe";
import SectionTeam from "components/SectionTeam/SectionTeam";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import SectionTextBlockPhoto from "components/SectionTextBlockPhoto/SectionTextBlockPhoto";
import SectionTextPhotoLightBox from "components/SectionTextPhotoLightBox/SectionTextPhotoLightBox";
import SectionTextSectionPhoto from "components/SectionTextSectionPhoto/SectionTextSectionPhoto";
import React from "react";

export default function HomePage() {
  return (
    <div className="ttnc-home-page space-y-8 bg-white dark:bg-black">
      <SectionBgImage />
      <SectionImageCarousel />
      <SectionTextPhotoLightBox />
      <SectionTextSectionPhoto />
      <SectionTextBlockPhoto />
      <SectionMisson />
      <SectionProgram />
      <SectionBlog />
      <SectionTeamWBio />
      <SectionTeam />
      <SectionCTA />
      <SectionSocialsCard />
      <SectionSubscribe />
      <SectionHeroForm />
      <SectionHero />
      <SectionHeroFullImage />
    </div>
  );
}
