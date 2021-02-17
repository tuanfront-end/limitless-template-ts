import React, { FC } from "react";
import DetailContent from "./Typographys";
import Button from "components/Button/Button";
import PostInfoAndShare from "components/PostInfoAndShare/PostInfoAndShare";

export interface EventSinglePageProps {
  sidebarEnable?: boolean;
}

const EventSinglePage: FC<EventSinglePageProps> = ({
  sidebarEnable = true,
}) => {
  const _renderRightSidebar = () => {
    return (
      <div className="p-8 bg-primary bg-opacity-10 space-y-6 text-black dark:text-white">
        <h2 className="text-f4 font-semibold">Event Summary</h2>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-start-1 font-semibold ">Type:</div>
          <div className="col-start-2 col-end-5 font-light">
            Social Outreach
          </div>
          <div className="col-start-1 font-semibold ">Date:</div>
          <div className="col-start-2 col-end-5 font-light">
            Monday, Feb 22, 2021
          </div>
          <div className="col-start-1 font-semibold ">Time:</div>
          <div className="col-start-2 col-end-5 font-light">
            2:00 pm – 4:00 pm
          </div>
          <div className="col-start-1 font-semibold ">Location:</div>
          <div className="col-start-2 col-end-5 font-light">
            <a className="shadow-link-thin hover:shadow-link-tick" href="#root">
              Linen Building
            </a>
          </div>
        </div>
        <Button size="small" url="#root">
          Join us!
        </Button>
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
    <div className={`ttnc-EventSinglePage bg-white dark:bg-gray-800 py-13`}>
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

export default EventSinglePage;
