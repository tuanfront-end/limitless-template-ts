import React, { FC } from "react";
import DetailContent from "./Typographys";
import Button from "components/Button/Button";
import PostInfoAndShare from "components/PostInfoAndShare/PostInfoAndShare";

export interface CareerSinglePageProps {
  sidebarEnable?: boolean;
}

const CareerSinglePage: FC<CareerSinglePageProps> = ({
  sidebarEnable = true,
}) => {
  const _renderRightSidebar = () => {
    return (
      <div className="flex justify-center">
        <Button size="medium" url={"#Career-Apply-Form" as any}>
          Apply now
        </Button>
      </div>
    );
  };

  const _renderDetailInfoAndSharing = () => {
    if (sidebarEnable) {
      return (
        <div className="hidden md:flex items-start flex-shrink-0 xl:absolute right-full xl:top-0 xl:h-full w-20 2xl:w-24 z-0">
          <div className="sticky top-6">
            <PostInfoAndShare hasCommentsNumber={false} />
          </div>
        </div>
      );
    }
    return (
      <div className="hidden md:flex items-start flex-shrink-0 lg:absolute right-full lg:top-0 lg:h-full w-20 2xl:w-24 z-0">
        <div className="sticky top-8">
          <PostInfoAndShare hasCommentsNumber={false} />
        </div>
      </div>
    );
  };

  return (
    <div className={`ttnc-CareerSinglePage bg-white dark:bg-gray-800 py-13`}>
      <div className="py-20">
        {/* <PageHeader /> */}
        <div className="container">
          <div
            className={`grid grid-cols-1 ${
              sidebarEnable ? " lg:grid-cols-3 gap-5 xl:gap-8" : ""
            }`}
          >
            <div className={sidebarEnable ? "lg:col-span-2" : ""}>
              <div
                className={`max-w-body ${
                  sidebarEnable
                    ? "mr-auto lg:mr-0 ml-auto 2xl:mr-auto"
                    : "mx-auto"
                }`}
              >
                {/* <!-- start entry-content --> */}
                <div className="relative flex">
                  {_renderDetailInfoAndSharing()}
                  <DetailContent />
                </div>
                {/* <!-- .entry-content --> */}

                <div className="flex md:hidden mb-10">
                  <PostInfoAndShare hasCommentsNumber={false} isHorizontal />
                </div>
              </div>
            </div>
            {sidebarEnable && (
              <div className="hidden lg:block">
                <div className="sticky top-6">{_renderRightSidebar()}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSinglePage;
