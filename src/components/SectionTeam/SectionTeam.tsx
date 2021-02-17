import Button from "components/Button/Button";
import CardPersonSmall from "components/CardPersonSmall/CardPersonSmall";
import { avatarImgs } from "contains/fakeData";
import React from "react";

const SectionTeam = () => {
  return (
    <div className="container ttnc-SectionTeam py-20 lg:flex items-center">
      <div className="lg:w-5/12 mb-10 space-y-8 lg:mb-0 md:pr-14 text-black dark:text-white">
        <h2 className="text-f1 font-bold">
          Our <span className="ttnc-title-underline">Team</span>
        </h2>
        <span className="block text-paragraph-base">
          We are here for your success! We are a small team of passionate
          individuals ready to help you become the best you can be! We've been
          there before, moving from teen years to young adults is difficult. We
          want to make it easy.
        </span>
        <Button size="medium" url="/our-team">
          All Team Member
        </Button>
      </div>
      <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        <CardPersonSmall img={avatarImgs[0]} />
        <CardPersonSmall img={avatarImgs[1]} />
        <CardPersonSmall img={avatarImgs[2]} />
        <CardPersonSmall img={avatarImgs[3]} />
        <CardPersonSmall img={avatarImgs[4]} />
        <CardPersonSmall img={avatarImgs[5]} />
      </div>
    </div>
  );
};

export default SectionTeam;
