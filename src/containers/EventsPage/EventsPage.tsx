import CardEvent from "components/CardEvent/CardEvent";
import React from "react";

const EventsPage = () => {
  return (
    <div className="ttnc-EventsPage bg-white dark:bg-black py-20">
      <div className="max-w-screen-md mx-auto px-4 space-y-20">
        <h2 className="text-f1 xl:text-d-small font-bold text-black dark:text-white text-center">
          Upcoming <span className="ttnc-title-underline">Events</span>
        </h2>
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </div>
    </div>
  );
};

export default EventsPage;
