import SectionBgImage from "components/SectionBgImage/SectionBgImage";
import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionHero from "components/SectionHero/SectionHero";
import SectionImageCarousel from "components/SectionImageCarousel/SectionImageCarousel";
import SectionLogoPartner from "components/SectionLogoPartner/SectionLogoPartner";
import SectionProgram from "components/SectionProgram/SectionProgram";
import SectionStats from "components/SectionStats/SectionStats";
import SectionSubscribe from "components/SectionSubscribe/SectionSubscribe";
import SectionTeam from "components/SectionTeam/SectionTeam";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import React from "react";

const Home2Page = () => {
  return (
    <div className="ttnc-home2-page bg-white dark:bg-black">
      <SectionHero img="https://images.pexels.com/photos/5999865/pexels-photo-5999865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <SectionProgram />
      <SectionBgImage />
      <SectionSubscribe />

      <SectionStats />
      <SectionLogoPartner />
      <SectionTeamWBio />

      <SectionBlog />
      <SectionImageCarousel />
    </div>
  );
};

export default Home2Page;
