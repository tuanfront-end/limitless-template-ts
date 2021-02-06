import React from "react";

export interface DropdownPanelProps {
  containerClassName?: string;
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({
  children,
  containerClassName = "",
}) => {
  return (
    <div
      className={`ttnc-dropdown__panel hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 ${containerClassName}`}
      style={{ minWidth: "12rem" }}
    >
      {children}
    </div>
  );
};

export default DropdownPanel;
