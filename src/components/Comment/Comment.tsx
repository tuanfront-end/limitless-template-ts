import Avatar from "components/Avatar/Avatar";
import Dropdown from "components/Dropdown/Dropdown";
import { _getPersonNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface CommentProps {
  avatarSize?: string;
  avatarRadius?: string;
}

const Comment: FC<CommentProps> = ({
  avatarSize = "w-10 lg:w-12 h-10 lg:h-12",
  avatarRadius = "rounded-full",
}) => {
  return (
    <div>
      <div className=" text-paragraph-small relative">
        <div className="flex items-center space-x-4 pr-8 font-medium mb-3">
          <Avatar sizeClass={avatarSize} radius={avatarRadius} />
          <div>
            <a
              className="block text-black font-semibold dark:text-gray-100 text-body leading-tight"
              href="#root"
            >
              {_getPersonNameRd()}
            </a>
            <span className="block text-gray-600 dark:text-gray-400 text-base leading-tight">
              2 days ago
            </span>
          </div>
        </div>
        <div className="mb-3 text-base text-gray-700 dark:text-gray-300">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            id totam ipsa mollitia maiores repellendus, saepe eius modi deserunt
            unde culpa? Cupiditate, dolorem reiciendis minima ullam placeat
            fugiat neque sapiente?
          </span>
        </div>
        <div className=" font-medium text-paragraph-xs-small text-gray-700 dark:text-gray-300 flex items-center leading-none">
          <a href="#root">
            <i className="las la-thumbs-up text-body leading-none mr-2px"></i>
            <span className="mr-3 leading-none">20</span>
          </a>
          <a href="#root">
            <i className="las la-thumbs-down text-body leading-none mr-2px"></i>
            <span className="mr-5 leading-none">1</span>
          </a>
          <a href="#root">Reply</a>
        </div>

        <div className="absolute right-0 top-0">
          <Dropdown>
            <Dropdown.DropdownTrigger>
              <i className="text-2xl las la-ellipsis-h leading-none text-gray-700 dark:text-gray-300"></i>
            </Dropdown.DropdownTrigger>
            <Dropdown.DropdownPanel popperPlacement="bottom-end">
              <div className="text-base text-gray-700 py-2 leading-tight">
                <a href="#root" className="block px-5 py-2 hover:bg-gray-300 ">
                  <i className="text-body leading-none mr-2 las la-edit"></i>
                  Edit
                </a>
                <a href="#root" className="block px-5 py-2 hover:bg-gray-300 ">
                  <i className="text-body leading-none mr-2 las la-reply"></i>
                  Reply
                </a>
                <a href="#root" className="block px-5 py-2 hover:bg-gray-300 ">
                  <i className="text-body leading-none mr-2 las la-flag"></i>
                  Report
                </a>
                <a href="#root" className="block px-5 py-2 hover:bg-gray-300 ">
                  <i className="text-body leading-none mr-2 las la-trash-alt"></i>
                  Delete
                </a>
              </div>
            </Dropdown.DropdownPanel>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Comment;
