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
          <div>
            <div className="py-1">
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Edit
              </a>
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Duplicate
              </a>
            </div>
            <div className="py-1">
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Archive
              </a>
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Move
              </a>
            </div>
            <div className="py-1">
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Share
              </a>
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Add to favorites
              </a>
            </div>
            <div className="py-1">
              <a
                href="//#endregion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Delete
              </a>
            </div>
          </div>
        </DropdownPanel>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
