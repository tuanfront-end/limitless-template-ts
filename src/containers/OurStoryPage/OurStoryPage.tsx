import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionMission from "components/SectionMission/SectionMission";
import React from "react";

const OurStoryPage = () => {
  return (
    <div className="ttnc-OurStoryPage bg-white dark:bg-black">
      <div>
        <SectionMission
          img="https://images.pexels.com/photos/3182785/pexels-photo-3182785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="It started with an idea"
        />
        <SectionCTA />
      </div>
    </div>
  );
};

export default OurStoryPage;
