import CardHorizontalProgram2 from "components/CardHorizontalProgram2/CardHorizontalProgram2";
import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import React from "react";

const VolunteerPage = () => {
  return (
    <div className="ttnc-VolunteerPage bg-white dark:bg-black">
      <SectionHeroForm isRight title="Volunteer with us!" />
      <div className="container my-10">
        <h2 className="text-f3 xl:text-f1 font-semibold text-black dark:text-white text-center mb-10">
          We need <span className="ttnc-title-underline">your help</span> to
          make these programs happen!
        </h2>
        <div className="space-y-10 lg:-space-y-10">
          <CardHorizontalProgram2 />
          <CardHorizontalProgram2 isRight />
          <CardHorizontalProgram2 />
          <CardHorizontalProgram2 isRight />
          <CardHorizontalProgram2 />
        </div>
      </div>
      <SectionSocialsCard />
    </div>
  );
};

export default VolunteerPage;
