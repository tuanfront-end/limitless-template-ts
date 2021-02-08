import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="ttnc-ContactUsPage bg-white dark:bg-black">
      <SectionHeroForm />
      <SectionSocialsCard />
    </div>
  );
};

export default ContactUsPage;
