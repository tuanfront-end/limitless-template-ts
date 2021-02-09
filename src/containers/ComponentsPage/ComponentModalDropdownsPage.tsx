import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import Modal from "components/Modal/Modal";
import React from "react";

const ComponentModalDropdownsPage = () => {
  return (
    <div className="ttnc-ComponentModalDropdownsPage bg-white dark:bg-black">
      <div className="py-20 px-4 max-w-body mx-auto">
        <h2 className="text-f2 dark:text-white mb-10">Dropdown</h2>
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

        {/*  */}
        <h2 className="text-f2 dark:text-white mt-20 mb-10">Modal</h2>
        <Modal id="ttnc-modal-demo2" />
      </div>
    </div>
  );
};

export default ComponentModalDropdownsPage;
