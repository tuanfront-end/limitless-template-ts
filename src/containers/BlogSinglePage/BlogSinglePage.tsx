import CardVertical from "components/CardVertical/CardVertical";
import SectionCTA from "components/SectionCTA/SectionCTA";
import React from "react";
import PageHeader from "./PageHeader";
import Typographys from "./Typographys";

const BlogSinglePage = () => {
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-black">
      <div className="container space-y-10 md:space-y-20 mb-20">
        <PageHeader />
        <Typographys />
        <div className="space-y-16">
          <h2 className="text-f2 font-semibold mt-8 text-center text-black dark:text-white">
            Related posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>
      </div>
      <SectionCTA />
    </div>
  );
};

export default BlogSinglePage;
