import React from "react";

export interface ButtonScrollProps {
  isUp?: boolean;
}
const ButtonScroll: React.FC<ButtonScrollProps> = ({
  isUp = false,
  children = "",
}) => {
  const _renderVector = () => {
    return (
      <svg
        width="30"
        height="41"
        viewBox="0 0 30 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd)">
          <path
            d="M25 18.5L13 34.5L1 18.5M13 27V0"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd"
            x="0.199997"
            y="0"
            width="29.6"
            height="40.1667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="4" dy="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.961818 0 0 0 0 0.680479 0 0 0 0 0.618182 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.943636 0 0 0 0 0.528325 0 0 0 0 0.436364 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  };

  return (
    <div className="relative text-primary flex items-center">
      <span className={isUp ? "transform rotate-180" : ""}>
        {_renderVector()}
      </span>
      {children && (
        <span className="ml-3 text-paragraph-small font-semibold">
          {children}
        </span>
      )}
    </div>
  );
};

export default ButtonScroll;
