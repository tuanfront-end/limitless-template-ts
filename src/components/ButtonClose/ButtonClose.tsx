import React from "react";

export interface ButtonClose {
  containerClassName?: string;
}

const ButtonClose: React.FC<ButtonClose> = ({ containerClassName = "" }) => {
  return (
    <button
      className={`text-2xl flex items-center justify-center ${containerClassName}`}
    >
      <i className="las la-times"></i>
    </button>
  );
};

export default ButtonClose;
