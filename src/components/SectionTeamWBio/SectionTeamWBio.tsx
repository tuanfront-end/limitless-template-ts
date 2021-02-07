import Button from "components/Button/Button";
import CardPerson from "components/CardPerson/CardPerson";
import React from "react";

const SectionTeamWBio = () => {
  return (
    <div className="ttnc-sectionTeamWBio py-20 container space-y-20">
      <div className="max-w-screen-md mx-auto text-black dark:text-white text-center">
        <h2 className="text-f1 md:text-d-small font-bold mb-4">
          Our <span className="ttnc-title-underline">Team</span>
        </h2>
        <span className="block">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
      </div>
      <div className="text-center">
        <Button size="large">all team members</Button>
      </div>
    </div>
  );
};

export default SectionTeamWBio;
