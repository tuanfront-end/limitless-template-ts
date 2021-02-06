import ButtonScroll from "components/ButtonScroll/ButtonScroll";
import CardEvent from "components/CardEvent/CardEvent";
import NextPrev from "components/NextPrev/NextPrev";
import TagBadge from "components/TagBadge/TagBadge";
import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-body mx-auto">
      <h1>HomePage</h1>
      <CardEvent />
      <ButtonScroll />
      <NextPrev />
      <div className="space-y-2 space-x-2">
        <TagBadge />
        <TagBadge />
        <TagBadge />
      </div>
    </div>
  );
}
