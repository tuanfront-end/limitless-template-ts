import CardHorizontalProgram from "components/CardHorizontalProgram/CardHorizontalProgram";
import CardHorizontalProgram2 from "components/CardHorizontalProgram2/CardHorizontalProgram2";
import SectionCTA from "components/SectionCTA/SectionCTA";
import { imgHigtQualitys } from "contains/fakeData";
import React from "react";

const ProgramsPage = () => {
  return (
    <div className="ttnc-ProgramsPage bg-white dark:bg-black py-20">
      <div className="space-y-20 container py-20">
        <h2 className="text-f1 xl:text-d-small font-bold text-black dark:text-white text-center">
          All <span className="ttnc-title-underline">Programs</span>
        </h2>
        <div className="space-y-10 lg:-space-y-10">
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[7]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[6]} />
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[5]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[4]} />
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[3]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[2]} />
          <CardHorizontalProgram2 isRight img={imgHigtQualitys[1]} />
          <CardHorizontalProgram2 img={imgHigtQualitys[0]} />
        </div>
      </div>
      <SectionCTA />
    </div>
  );
};

export default ProgramsPage;
