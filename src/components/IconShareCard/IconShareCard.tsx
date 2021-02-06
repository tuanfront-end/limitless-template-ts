import React from "react";
export interface IconShareCardProps {}
const IconShareCard = () => {
  return (
    <button className="ttnc-IconShareCard w-6 h-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-neutral-500 hover:text-neutral-300 mt-2px"
      >
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
    </button>
  );
};

export default IconShareCard;
