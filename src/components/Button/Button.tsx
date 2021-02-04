import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  type?: "filled" | "ghost" | "borderless" | "round";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "neutral";
  disabled?: boolean;
  isOnlyIcon?: boolean;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "",
  type = "filled",
  size = "large",
  color = "primary",
  disabled = false,
  isOnlyIcon = false,
  children,
}) => {
  let classes = containerClassName;

  switch (type) {
    case "filled":
      classes +=
        " uppercase font-bold shadow-button hover:bg-opacity-90 disabled:bg-opacity-70";
      break;
    case "round":
      classes +=
        " font-semibold shadow-button hover:bg-opacity-90 disabled:bg-opacity-70 rounded-full";
      break;
    case "ghost":
      classes +=
        " font-bold uppercase shadow-button hover:bg-opacity-90 disabled:opacity-70";
      break;
    case "borderless":
      classes +=
        " font-semibold border-transparent disabled:border-transparent border-2 disabled:opacity-70";
      break;
    default:
      break;
  }

  switch (size) {
    case "large":
      classes += ` text-button-large ${isOnlyIcon ? "p-4" : "px-6 py-5"}`;
      break;
    case "medium":
      classes += ` text-button-medium ${isOnlyIcon ? "p-3" : "px-5 py-4"}`;
      break;
    case "small":
      classes += ` text-button-small ${isOnlyIcon ? "p-2" : "px-3 py-2"}`;
      break;
    default:
      break;
  }

  function _getColorClass(type: ButtonProps["type"]) {
    if (type === "filled" || type === "round") {
      switch (color) {
        case "primary":
          return "text-white bg-primary";
        case "secondary":
          return "text-white bg-secondary";
        default:
          return "";
      }
    }
    if (type === "ghost") {
      switch (color) {
        case "primary":
          return "text-primary border-primary border-2";
        case "secondary":
          return "text-secondary border-secondary border-2";
        default:
          return "";
      }
    }
    if (type === "borderless") {
      switch (color) {
        case "primary":
          return "text-primary hover:border-primary";
        case "secondary":
          return "text-secondary hover:border-secondary";
        default:
          return "";
      }
    }
  }

  classes += ` ${_getColorClass(type)}`;

  return (
    <button
      disabled={disabled}
      className={`ttnc-button ${classes} inline-flex items-center justify-center text-center  mb-2`}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
