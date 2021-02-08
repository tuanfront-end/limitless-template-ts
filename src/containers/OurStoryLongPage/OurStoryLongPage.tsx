import SectionCTA from "components/SectionCTA/SectionCTA";
import React from "react";
import SectionMission2 from "./SectionStory";

const OurStoryLongPage = () => {
  return (
    <div className="ttnc-OurStoryLongPage bg-white dark:bg-black">
      <div className="space-y-8 pt-28">
        <SectionMission2 data={["2016", "The Dreamer"]} />
        <SectionMission2 data={["2018", "The Believers"]}>
          Imperdiet dui enim egestas aenean. Aenean imperdiet morbi tempor, a.
          Urna senectus sit sit integer malesuada facilisi nullam neque. Lorem
          laoreet maecenas in commodo morbi. Turpis hendrerit neque imperdiet
          aliquet arcu senectus sed.
        </SectionMission2>
        <SectionMission2 data={["2019", "The Helpers"]}>
          Mattis netus viverra egestas integer. Eu auctor proin a, sed. In sit
          feugiat pellentesque posuere amet. Sit ut cursus iaculis urna, lectus.
          Vestibulum quis nibh lorem volutpat sagittis, egestas eros
          pellentesque commodo. Ultrices cras massa faucibus mattis. Ut quam
          integer egestas vehicula. Purus ornare quam vitae sit vestibulum,
          facilisi. Diam pulvinar diam netus cum turpis sit vitae nisl. Quis
          quis amet, morbi nisi, eu dolor tincidunt. Vulputate pellentesque
          semper sed aliquet at pretium. Viverra in diam proin velit hendrerit
          habitant.
        </SectionMission2>
        <SectionMission2 data={["2020", "The Present"]}>
          Etiam dolor ac etiam sed in egestas elementum. Commodo est, dictum
          turpis hac pulvinar volutpat. Feugiat vulputate nisi, sed ut sit cum
          facilisis. Quis placerat et condimentum viverra imperdiet sem aliquam
          feugiat nibh. Libero sit viverra condimentum commodo. Nibh quis nam
          eget justo nisi, dui. Ut praesent id ipsum, nulla orci, sed
          ullamcorper. Sed semper a, iaculis facilisi aliquam pulvinar dignissim
          enim. Justo, mattis quis netus sem purus tincidunt nisi, leo tellus.{" "}
        </SectionMission2>
        <SectionMission2 data={["tomorrow", "The Future"]}>
          Quis malesuada et quis egestas dignissim ante eu id. Posuere egestas
          non diam maecenas orci imperdiet dignissim. Ac pellentesque amet enim
          mi dictum hac. Id habitant sagittis a odio elit lectus ultrices. Netus
          quam elementum ac egestas praesent. Nisi, cras pellentesque nulla at
          tristique nisi, a tempus. Arcu nec nec blandit lobortis neque neque
          risus dignissim libero. Integer ac vel nisi at aliquet sed sagittis.{" "}
        </SectionMission2>
      </div>
      <SectionCTA />
    </div>
  );
};

export default OurStoryLongPage;
