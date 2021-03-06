import Button from "components/Button/Button";
import { _getImgHightQualityRd, _getTitleRd } from "contains/fakeData";
import React from "react";

export interface SectionMissionProps {
  img?: string;
  title?: string;
}

const SectionMission: React.FC<SectionMissionProps> = ({
  children,
  img,
  title,
}) => {
  return (
    <div className="ttnc-SectionMission overflow-hidden">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 my-20">
        <div className="relative aspect-w-3 aspect-h-3 md:aspect-none">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img || _getImgHightQualityRd()}
            alt=""
          />
        </div>
        <div className="flex items-center justify-start">
          <div className="max-w-screen-sm px-4 md:px-0 md:my-16 text-black dark:text-white space-y-6 lg:space-y-10">
            <h2 className="text-f1 xl:text-d-small font-bold">
              {title || _getTitleRd()}
            </h2>
            {children || (
              <span className="block text-paragraph-small lg:text-paragraph-base">
                Orci bibendum tellus eget risus. Habitasse lorem orci viverra
                sed sagittis, risus elementum. Nulla leo sed sed in quam.
                Posuere mauris nulla massa platea ornare dignissim eu. Tellus
                lacus, neque erat aenean sed faucibus sit. In venenatis quam et
                vel scelerisque feugiat in vel. Non, egestas justo, lacinia sem
                facilisis eget semper. Arcu elementum tempor proin vitae sed.
                Praesent sit dui augue tincidunt volutpat vulputate ligula.
                <br /> <br />
                Tellus aliquet suscipit senectus ipsum urna, nisl nunc ultricies
                massa. Elementum, ornare massa quisque aenean consequat amet.
                Diam enim, ac fermentum, ullamcorper id placerat ac, dictumst.
                Suspendisse blandit posuere id pharetra, ultrices consectetur
                enim ut. Nunc imperdiet at turpis sollicitudin vulputate velit.
                Commodo augue dolor ornare purus lobortis dui. Nisl mollis
                sodales porta vitae nulla pharetra amet, duis.
              </span>
            )}
            <Button size="large" url="/our-mission">
              our mission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMission;
