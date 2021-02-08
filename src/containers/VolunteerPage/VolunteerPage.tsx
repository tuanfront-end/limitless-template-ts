import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import React from "react";

const VolunteerPage = () => {
  return (
    <div className="ttnc-VolunteerPage bg-white dark:bg-black">
      <SectionHeroForm isRight title="Volunteer with us!" />
      <SectionSocialsCard />
    </div>
  );
};

export default VolunteerPage;
