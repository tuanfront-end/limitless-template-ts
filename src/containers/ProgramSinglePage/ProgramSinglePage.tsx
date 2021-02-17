import Container from "components/Container/Container";
import TagBadge from "components/TagBadge/TagBadge";
import React, { FC } from "react";
import DetailContent from "./Typographys";
import PageHeader from "./PageHeader";
import Button from "components/Button/Button";
import PostInfoAndShare from "components/PostInfoAndShare/PostInfoAndShare";

export interface ProgramSinglePageProps {
  sidebarEnable?: boolean;
}

const ProgramSinglePage: FC<ProgramSinglePageProps> = ({
  sidebarEnable = true,
}) => {
  const _renderRightSidebar = () => {
    return (
      <div className="p-8 bg-primary bg-opacity-10">
        <h2 className="text-f4 font-semibold text-black dark:text-white mb-4 text-left">
          Want to get involved or join the program?
        </h2>
        <div className="flex space-x-4 md:space-x-6">
          <Button size="small" type="ghost" url="#root">
            Volunteer
          </Button>
          <Button size="small" url="#root">
            Join the program
          </Button>
        </div>
      </div>
    );
  };

  const _renderDetailInfoAndSharing = () => {
    if (sidebarEnable) {
      return (
        <div className="hidden md:flex items-start flex-shrink-0 xl:absolute right-full xl:top-0 xl:h-full w-20 2xl:w-24 z-0">
          <div className="sticky top-6">
            <PostInfoAndShare />
          </div>
        </div>
      );
    }
    return (
      <div className="hidden md:flex items-start flex-shrink-0 lg:absolute right-full lg:top-0 lg:h-full w-20 2xl:w-24 z-0">
        <div className="sticky top-8">
          <PostInfoAndShare />
        </div>
      </div>
    );
  };

  return (
    <div className={`ttnc-ProgramSinglePage bg-white dark:bg-gray-800 py-13`}>
      <div>
        <PageHeader />
        <div className="container">
          <div
            className={`grid grid-cols-1 ${
              sidebarEnable ? "lg:grid-cols-3 gap-5 xl:gap-8" : ""
            } pb-12`}
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
                  <PostInfoAndShare isHorizontal />
                </div>
              </div>
            </div>
            {sidebarEnable && (
              <div className="">
                <div className="sticky top-6">{_renderRightSidebar()}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSinglePage;
