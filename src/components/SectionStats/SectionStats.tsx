import React from "react";

const SectionStats = () => {
  return (
    <div className="ttnc-SectionStats py-20">
      <div className="flex items-center justify-center bg-secondary bg-opacity-70 md:text-f5 text-white">
        <div className="container px-4 py-20 md:py-40 text-center">
          <h2 className="text-f3 md:text-f1 font-bold mb-4">
            Fundraising for the people and programs
          </h2>
          <span className="block mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            eos ipsa reiciendis earum, veniam nulla voluptates sapiente
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-f2 md:text-6xl block font-bold">12K+</span>
              <span className="">Total Our Valunteer</span>
            </div>
            <div>
              <span className="text-f2 md:text-6xl block font-bold">7K+</span>
              <span className="">People Rised</span>
            </div>
            <div>
              <span className="text-f2 md:text-6xl block font-bold">11M+</span>
              <span className="">People Rised</span>
            </div>
            <div>
              <span className="text-f2 md:text-6xl block font-bold">200+</span>
              <span className="">Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStats;
