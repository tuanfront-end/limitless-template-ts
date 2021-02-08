import SectionBgImage from "components/SectionBgImage/SectionBgImage";
import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionHero from "components/SectionHero/SectionHero";
import SectionImageCarousel from "components/SectionImageCarousel/SectionImageCarousel";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionSubscribe from "components/SectionSubscribe/SectionSubscribe";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import React from "react";

const Home2Page = () => {
  return (
    <div className="ttnc-home2-page bg-white dark:bg-black">
      <SectionHero />
      <SectionProgram />
      <SectionBgImage />
      <SectionTeamWBio />
      <SectionBlog />
      <SectionSubscribe />
      <SectionImageCarousel />
    </div>
  );
};

export default Home2Page;
