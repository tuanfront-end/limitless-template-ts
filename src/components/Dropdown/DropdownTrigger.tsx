import React from "react";
export interface DropdownTriggerProps {
  containerClassName?: string;
  text?: string;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  containerClassName = "",
  text = "Dropdowns",
}) => {
  return (
    <button
      type="button"
      className={`ttnc-dropdown__btn ${containerClassName}`}
    >
      {children || (
        <div className="w-full flex items-center justify-between border border-neutral-500 px-4 py-3 text-paragraph-base text-neutral-400 dark:text-white">
          {text}
          <i className="las la-angle-down ml-4"></i>
        </div>
      )}
    </button>
  );
};

export default DropdownTrigger;
