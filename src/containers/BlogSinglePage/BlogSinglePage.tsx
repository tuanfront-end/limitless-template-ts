import Container from "components/Container/Container";
import TagBadge from "components/TagBadge/TagBadge";
import React, { FC } from "react";
import Author from "./Author";
import CommentArea from "./CommentArea";
import DetailContent from "./Typographys";
import PageHeader from "./PageHeader";
import RelatedPosts from "./RelatedPosts";
import PostInfoAndShare from "components/PostInfoAndShare/PostInfoAndShare";

export interface BlogSinglePageProps {
  sidebarEnable?: boolean;
}

const BlogSinglePage: FC<BlogSinglePageProps> = ({ sidebarEnable = false }) => {
  const _renderDetailInfoAndSharing = () => {
    if (sidebarEnable) {
      return (
        <div className="hidden md:flex items-start flex-shrink-0 xl:absolute right-full xl:top-0 xl:h-full w-20 2xl:w-24 z-0">
          <div className="sticky top-8">
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
    <div
      className={`ttnc-detail-page ${
        !sidebarEnable
          ? "wil-detail-page--full"
          : "wil-detail-page--has-sidebar"
      } bg-white dark:bg-gray-800 py-13`}
    >
      <Container>
        <PageHeader />
        <div
          className={`grid grid-cols-1 ${
            sidebarEnable ? " lg:grid-cols-3 gap-5 xl:gap-8" : ""
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
              <div className="my-10">
                <TagBadge containerClassName="mr-2 mb-1 border border-gray-300" />
                <TagBadge containerClassName="mr-2 mb-1 border border-gray-300" />
                <TagBadge containerClassName="mr-2 mb-1 border border-gray-300" />
                <TagBadge containerClassName="mr-2 mb-1 border border-gray-300" />
              </div>
              <div className="flex md:hidden mb-10">
                <PostInfoAndShare isHorizontal />
              </div>
              <Author />
              <hr className="w-full border-t-2 border-gray-200 mb-8" />
              <CommentArea />
            </div>
          </div>
        </div>
      </Container>
      <RelatedPosts />
    </div>
  );
};

export default BlogSinglePage;
