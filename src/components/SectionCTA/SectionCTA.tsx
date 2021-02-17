import Button from "components/Button/Button";
import React from "react";

const SectionCTA = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="px-4 max-w-screen-md mx-auto text-center">
        <h2 className="text-f3 md:text-f2 font-bold text-white mb-6">
          Ready to make a difference in the lives of emerging adults?
        </h2>
        <div className="flex justify-center space-x-4 md:space-x-10">
          <Button size="medium" type="ghost" url="/programs">
            Explore Programs
          </Button>
          <Button size="medium" type="ghost" url="/donate">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionCTA;
