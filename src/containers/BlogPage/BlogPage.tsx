import Button from "components/Button/Button";
import CardVertical from "components/CardVertical/CardVertical";
import NextPrev from "components/NextPrev/NextPrev";
import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionHero from "components/SectionHero/SectionHero";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import React from "react";

const BlogPage = () => {
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-black">
      <SectionHero
        renderFooter={<Button>Read more</Button>}
        title="How COVID-19 changed our outlook on helping from a distance."
        subTitle="FEATURED POST"
        isRight
      />
      <div className="container py-16 lg:py-20 space-y-20">
        <h2 className="text-f1 font-bold mt-8 text-center text-black dark:text-white">
          All posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          <CardVertical />
          <CardVertical />
          <CardVertical />
          <CardVertical />
          <CardVertical />
          <CardVertical />
          <CardVertical />
          <CardVertical />
        </div>
        <div className="flex items-center justify-center space-x-8">
          <Button size="small">Previous</Button>
          <Button size="small">Next</Button>
        </div>
      </div>
      <SectionCTA />
    </div>
  );
};

export default BlogPage;
