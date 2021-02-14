import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionHero from "components/SectionHero/SectionHero";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import React from "react";

const OurTeamPage = () => {
  return (
    <div className="ttnc-OurTeamPage bg-white dark:bg-black">
      <SectionHero
        renderFooter={<span className="sr-only">Our Team</span>}
        title="Meet the people who make it happen."
        subTitle="Our Team"
        img="https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />

      <SectionTeamWBio
        haveBtnShowAll={false}
        authNumber={8}
        renderTitle={
          <h2 className="text-f1 md:text-d-small font-bold mb-4">
            We're stronger{" "}
            <span className="ttnc-title-underline">together</span>
          </h2>
        }
      />
      <SectionCTA />
    </div>
  );
};

export default OurTeamPage;
