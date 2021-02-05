import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import React from "react";

const Dropdowns = () => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger />
        <DropdownPanel>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </DropdownPanel>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
