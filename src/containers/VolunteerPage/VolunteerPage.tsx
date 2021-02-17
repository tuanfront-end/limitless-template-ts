import CardHorizontalProgram2 from "components/CardHorizontalProgram2/CardHorizontalProgram2";
import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import { imgHigtQualitys } from "contains/fakeData";
import React from "react";

const VolunteerPage = () => {
  return (
    <div className="ttnc-VolunteerPage bg-white dark:bg-black">
      <SectionHeroForm
        img="https://images.pexels.com/photos/5304076/pexels-photo-5304076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        isRight
        title="Volunteer with us!"
      />
      <div className="container my-10">
        <h2 className="text-f3 xl:text-f1 font-semibold text-black dark:text-white text-center mb-10">
          We need <span className="ttnc-title-underline">your help</span> to
          make these programs happen!
        </h2>
        <div className="space-y-10 lg:-space-y-10">
          <CardHorizontalProgram2 img={imgHigtQualitys[0]} />
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[1]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[2]} />
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[3]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[4]} />
        </div>
      </div>
      <SectionSocialsCard />
    </div>
  );
};

export default VolunteerPage;
