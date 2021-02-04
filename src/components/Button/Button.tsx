import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  type?: "filled" | "ghost" | "borderless" | "round";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "neutral";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "",
  type = "filled",
  size = "large",
  color = "primary",
  disabled = false,
  children,
}) => {
  let classes = containerClassName;

  switch (color) {
    case "primary":
      classes += " text-white bg-primary";
      break;
    case "secondary":
      classes += " text-white bg-secondary";
      break;
    default:
      break;
  }
  switch (type) {
    case "filled":
      classes +=
        " uppercase shadow-button hover:bg-opacity-90 disabled:bg-opacity-80";
      break;
    default:
      break;
  }
  switch (size) {
    case "large":
      classes += " text-button-large px-6 py-5";
      break;
    case "medium":
      classes += " text-button-medium px-5 py-4";
      break;
    case "small":
      classes += " text-button-small px-3 py-2";
      break;
    default:
      break;
  }

  return (
    <button
      disabled={disabled}
      className={` ttnc-button ${classes} inline-flex items-center justify-center text-center  mb-2`}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
