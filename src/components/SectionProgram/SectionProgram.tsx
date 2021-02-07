import CardHorizontalProgram from "components/CardHorizontalProgram/CardHorizontalProgram";
import React from "react";

const SectionProgram = () => {
  return (
    <div className="ttnc-SectionProgram py-20 container space-y-20">
      <div className="max-w-screen-md mx-auto text-black dark:text-white text-center">
        <h2 className="text-f1 xl:text-d-small font-bold mb-4">
          Our <span className="ttnc-title-underline">Programs</span>
        </h2>
        <span className="block">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CardHorizontalProgram />
        <CardHorizontalProgram />
        <CardHorizontalProgram />
        <CardHorizontalProgram />
      </div>
    </div>
  );
};

export default SectionProgram;
