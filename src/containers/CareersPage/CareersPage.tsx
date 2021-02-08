import CardCareers from "components/CardCareers/CardCareers";
import React from "react";

const CareersPage = () => {
  return (
    <div className="ttnc-CareersPage container bg-white dark:bg-black py-20">
      <div className="max-w-screen-md mx-auto space-y-20">
        <h2 className="text-f1 xl:text-d-small font-bold text-black dark:text-white text-center">
          Careers
        </h2>
        <CardCareers />
        <CardCareers />
        <CardCareers />
        <CardCareers />
      </div>
    </div>
  );
};

export default CareersPage;
