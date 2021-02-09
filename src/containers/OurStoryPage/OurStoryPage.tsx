import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionMission from "components/SectionMission/SectionMission";
import React from "react";

const OurStoryPage = () => {
  return (
    <div className="ttnc-OurStoryPage bg-white dark:bg-black">
      <div>
        <SectionMission />
        <SectionCTA />
      </div>
    </div>
  );
};

export default OurStoryPage;
