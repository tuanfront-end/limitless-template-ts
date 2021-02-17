import Button from "components/Button/Button";
import CardVertical from "components/CardVertical/CardVertical";
import NextPrev from "components/NextPrev/NextPrev";
import SectionBlog from "components/SectionBlog/SectionBlog";
import SectionCTA from "components/SectionCTA/SectionCTA";
import SectionHero from "components/SectionHero/SectionHero";
import SectionTeamWBio from "components/SectionTeamWBio/SectionTeamWBio";
import { featuredImgs } from "contains/fakeData";
import React from "react";

const BlogPage = () => {
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-black">
      <SectionHero
        renderFooter={<Button url="/blog-single">Read more</Button>}
        title="How COVID-19 changed our outlook on helping from a distance."
        subTitle="FEATURED POST"
        isRight
      />
      <div className="container py-16 lg:py-20 space-y-20">
        <h2 className="text-f1 font-bold mt-8 text-center text-black dark:text-white">
          All posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          <CardVertical imgSrc={featuredImgs[0]} />
          <CardVertical imgSrc={featuredImgs[1]}>
            Create a clean, unique, easy to use website! Jumpstart your
            non-profit website design or modernize up your existing 501c3 with
            this clean, lively template for any non-profit!
          </CardVertical>
          <CardVertical imgSrc={featuredImgs[2]}>
            Consequatur quia dicta veniam voluptate dolorem quia at. Incidunt
            non velit pariatur magnam et libero magnam qui. Aspernatur amet
            libero dolores quod nobis rerum id.
          </CardVertical>
          <CardVertical imgSrc={featuredImgs[3]} />
          <CardVertical imgSrc={featuredImgs[4]}>
            Accusantium veritatis voluptatem aut. Vero at veniam ipsa qui
            beatae. Hic quis similique totam magni. Ratione amet numquam sit.
          </CardVertical>
          <CardVertical imgSrc={featuredImgs[5]}>
            Nesciunt tempora adipisci sit ad doloremque impedit magni animi. Est
            deserunt voluptatem molestiae quo modi minima autem dolor
            reprehenderit. Odio enim est. Nobis qui
          </CardVertical>
          <CardVertical imgSrc={featuredImgs[6]} />
          <CardVertical imgSrc={featuredImgs[7]}>
            Quos deserunt porro quis tempora voluptates. Id et dolorem. Ipsum
            amet quis ut expedita ea. Quidem aut natus nulla nisi
          </CardVertical>
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
