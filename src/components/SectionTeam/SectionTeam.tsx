import Button from "components/Button/Button";
import CardPersonSmall from "components/CardPersonSmall/CardPersonSmall";
import React from "react";

const SectionTeam = () => {
  return (
    <div className="container ttnc-SectionTeam py-20 lg:flex items-center">
      <div className="lg:w-5/12 mb-10 space-y-8 lg:mb-0 md:pr-14 text-black dark:text-white">
        <h1 className="text-f1 font-bold">
          Our <span className="ttnc-title-underline">Team</span>
        </h1>
        <span className="block text-paragraph-base">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </span>
        <Button size="medium">All Team Member</Button>
      </div>
      <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        <CardPersonSmall />
        <CardPersonSmall />
        <CardPersonSmall />
        <CardPersonSmall />
        <CardPersonSmall />
        <CardPersonSmall />
      </div>
    </div>
  );
};

export default SectionTeam;
