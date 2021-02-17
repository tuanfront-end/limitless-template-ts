import Button from "components/Button/Button";
import CardPerson from "components/CardPerson/CardPerson";
import { facesHightQlt } from "contains/fakeData";
import React from "react";
export interface SectionTeamWBioProps {
  haveBtnShowAll?: boolean;
  renderTitle?: React.ReactNode;
  authNumber?: Number;
}
const SectionTeamWBio: React.FC<SectionTeamWBioProps> = ({
  haveBtnShowAll = true,
  authNumber = 4,
  renderTitle,
}) => {
  return (
    <div className="ttnc-sectionTeamWBio py-20 container space-y-20">
      <div className="max-w-screen-lg mx-auto text-black dark:text-white text-center">
        {renderTitle || (
          <h2 className="text-f1 xl:text-d-small font-bold mb-4">
            Our <span className="ttnc-title-underline">Team</span>
          </h2>
        )}

        <span className="block max-w-screen-md mx-auto">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {Array.from(Array(authNumber).keys()).map((_, i) => (
          <CardPerson key={String(i)} img={facesHightQlt[i]} />
        ))}
      </div>
      {haveBtnShowAll && (
        <div className="text-center">
          <Button size="large" url="/our-team">
            all team members
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionTeamWBio;
