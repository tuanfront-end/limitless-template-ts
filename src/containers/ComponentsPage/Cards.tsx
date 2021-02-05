import CardHorizontal from "components/CardHorizontal/CardHorizontal";
import CardHorizontalProgram from "components/CardHorizontalProgram/CardHorizontalProgram";
import CardPerson from "components/CardPerson/CardPerson";
import CardPersonSmall from "components/CardPersonSmall/CardPersonSmall";
import CardVertical from "components/CardVertical/CardVertical";
import React from "react";

const Cards = () => {
  return (
    <div className="max-w-body space-y-8">
      <CardPersonSmall />
      <CardPerson />
      <CardVertical />
      <CardHorizontalProgram />
      <CardHorizontal enableFooter={false} imageSize="large" />
      <CardHorizontal />
      <CardHorizontal enableLeading={false} enableFooter={false} />
    </div>
  );
};

export default Cards;
