import SectionHeroForm from "components/SectionHeroForm/SectionHeroForm";
import SectionSocialsCard from "components/SectionSocialsCard/SectionSocialsCard";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="ttnc-ContactUsPage bg-white dark:bg-black">
      <SectionHeroForm img="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <SectionSocialsCard />
    </div>
  );
};

export default ContactUsPage;
