import ButtonClose from "components/ButtonClose/ButtonClose";
import React from "react";

const Annoucement = () => {
  return (
    <div
      id="top-annoucement"
      className="bg-secondary py-2 px-6 text-center relative"
    >
      <span className="text-paragraph-base text-white mr-6">
        Purus consectetur feugiat consectetur imperdiet ante ac pulvinar nec.
      </span>
      <a
        className="uppercase no-underline shadow-none text-button-small text-white border-2 border-white py-2 px-3 hover:shadow-none hover:text-white hover:opacity-90"
        href="http://#"
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
