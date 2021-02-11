import ButtonClose from "components/ButtonClose/ButtonClose";
import React from "react";

const Annoucement = () => {
  return (
    <div
      id="top-annoucement"
      className="bg-secondary py-2 px-10 text-center relative"
    >
      <span className="text-paragraph-xs-small lg:text-paragraph-base text-white md:mr-6 mb-2 md:mb-0 block md:inline-block">
        Purus consectetur feugiat consectetur imperdiet ante ac pulvinar nec.
      </span>
      <a
        className="uppercase no-underline shadow-none text-xs lg:text-button-small text-white border-2 border-white py-2 px-3 hover:shadow-none hover:text-white hover:opacity-90"
        href="#root"
        target="_blank"
        rel="noopener noreferrer"
      >
        learn more
      </a>
      <span
        id="top-annoucement-close"
        className="absolute top-1/2 transform -translate-y-2/4 right-4"
      >
        <ButtonClose containerClassName="text-white" />
      </span>
    </div>
  );
};

export default Annoucement;
