import CardVertical from "components/CardVertical/CardVertical";
import Container from "components/Container/Container";
import React from "react";

export default function RelatedPosts() {
  return (
    <div className="py-20 container">
      <h2 className="text-f2 font-semibold text-center mb-20 text-black dark:text-white">
        Related posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8">
        <CardVertical />
        <CardVertical />
        <CardVertical />
        <CardVertical />
      </div>
    </div>
  );
}
