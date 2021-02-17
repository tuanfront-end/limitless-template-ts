import Dropdown from "components/Dropdown/Dropdown";
import React from "react";

export interface PostInfoAndShareProps {
  isHorizontal?: boolean;
}

export default function PostInfoAndShare({
  isHorizontal,
}: PostInfoAndShareProps) {
  return (
    <div
      className={`grid gap-2 ${
        isHorizontal ? "grid-cols-4" : "grid-cols-1"
      } md:gap-3 text-white text-paragraph-xs-small lg:pb-8`}
    >
      <div className="flex flex-col items-center justify-center bg-secondary w-14 h-14 rounded-lg">
        <i className="las la-arrow-up text-f5 leading-none mb-1"></i>
        <span className="truncate leading-none">4k3</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-secondary w-14 h-14 rounded-lg">
        <i className="las la-comment text-f5 leading-none mb-1"></i>
        <span className="truncate leading-none">213</span>
      </div>
      <button className="flex flex-col items-center justify-center bg-transparent w-14 p-2px">
        <span className="uppercase text-paragraph-tiny text-gray-800 dark:text-gray-100 font-bold">
          Save
        </span>
        <i className="las la-bookmark text-f5 leading-none text-gray-900 dark:text-gray-100"></i>
      </button>
      <div className="flex flex-col items-center justify-center w-14 text-center">
        <Dropdown containerClassName="items-center justify-center">
          <Dropdown.DropdownTrigger>
            <div className="flex flex-col items-center justify-center bg-transparent text-center p-2px">
              <span className="uppercase text-paragraph-tiny  text-gray-800 dark:text-gray-100 font-bold">
                Share
              </span>
              <i className="las la-share text-f5 leading-none text-gray-900 dark:text-gray-100"></i>
            </div>
          </Dropdown.DropdownTrigger>
          <Dropdown.DropdownPanel minWidth="auto" containerClassName="">
            <div className="text-gray-900 text-f6 py-1 space-y-1">
              <a
                href="#root"
                className="flex items-center justify-center bg-white hover:bg-gray-200 w-9 h-9 border border-gray-300 rounded-full"
              >
                <i className="text-body lab la-facebook-f"></i>
              </a>
              <a
                href="#root"
                className="flex items-center justify-center bg-white hover:bg-gray-200 w-9 h-9 border border-gray-300 rounded-full"
              >
                <i className="text-body lab la-twitter"></i>
              </a>
              <a
                href="#root"
                className="flex items-center justify-center bg-white hover:bg-gray-200 w-9 h-9 border border-gray-300 rounded-full"
              >
                <i className="text-body lab la-instagram"></i>
              </a>
            </div>
          </Dropdown.DropdownPanel>
        </Dropdown>
      </div>
    </div>
  );
}
