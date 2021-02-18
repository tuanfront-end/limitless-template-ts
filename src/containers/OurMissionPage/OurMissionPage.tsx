import SectionMission from "components/SectionMission/SectionMission";
import SectionMissionNextPrev from "components/SectionMissionNextPrev/SectionMissionNextPrev";
import { imgHigtQualitys } from "contains/fakeData";
import React from "react";

const OurMissionPage = () => {
  return (
    <div className="ttnc-OurMissionPage bg-white dark:bg-black py-20 space-y-20">
      <SectionMissionNextPrev
        title="We exist for your success."
        id="first"
        scrollDownId="#second"
        scrollUpText="Our Mission"
        img={imgHigtQualitys[5]}
      >
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
        quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
        imperdiet. Nunc ut sem vitae risus tristique posuere.
      </SectionMissionNextPrev>
      {/* === */}
      <SectionMissionNextPrev
        title="Help young adults "
        id="second"
        scrollUpText="What We Do"
        scrollUpId="#first"
        scrollDownId="#third"
        img={imgHigtQualitys[2]}
      >
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
        quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
        imperdiet. Nunc ut sem vitae risus tristique posuere.
      </SectionMissionNextPrev>
      {/* === */}
      <SectionMissionNextPrev
        title="Mentorship, Support, Programs "
        id="third"
        scrollUpText="How We Do It"
        scrollUpId="#second"
        scrollDownId="#fourth"
        img={imgHigtQualitys[4]}
      >
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
        quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
        imperdiet. Nunc ut sem vitae risus tristique posuere.
      </SectionMissionNextPrev>
      {/* === */}
      <SectionMissionNextPrev
        title="Because we believe."
        id="fourth"
        scrollUpText="Why we do it"
        scrollUpId="#third"
        scrollDownId="#fifth"
        img={imgHigtQualitys[1]}
      >
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
        quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
        imperdiet. Nunc ut sem vitae risus tristique posuere.
      </SectionMissionNextPrev>
      {/* === */}
      <SectionMissionNextPrev
        title="How you can help"
        id="fifth"
        scrollUpText="Get Involved"
        scrollUpId="#fourth"
        img={imgHigtQualitys[3]}
      >
        We exist for your success.
      </SectionMissionNextPrev>
    </div>
  );
};

export default OurMissionPage;
