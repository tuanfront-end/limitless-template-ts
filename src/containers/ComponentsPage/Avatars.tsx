import Avatar from "components/Avatar/Avatar";
import React from "react";

export const Avatars = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-f2 dark:text-white">Avatar</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-8 grid grid-cols-1">
          <Avatar />
          <Avatar sizeClass="h-8 w-8" />
          <Avatar sizeClass="h-10 w-10" />
          <Avatar sizeClass="h-12 w-12" />
        </div>
        <div className="space-y-8">
          <div className="flex -space-x-2">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <div className="flex -space-x-2">
            <Avatar sizeClass="h-8 w-8" />
            <Avatar sizeClass="h-8 w-8" />
            <Avatar sizeClass="h-8 w-8" />
          </div>

          <div className="flex -space-x-3">
            <Avatar sizeClass="h-10 w-10" />
            <Avatar sizeClass="h-10 w-10" />
            <Avatar sizeClass="h-10 w-10" />
          </div>
          <div className="flex -space-x-3">
            <Avatar sizeClass="h-12 w-12" />
            <Avatar sizeClass="h-12 w-12" />
            <Avatar sizeClass="h-12 w-12" />
          </div>
        </div>
        <div className="space-y-8 grid grid-cols-1">
          <div>
            <div className="relative inline-flex">
              <Avatar />
              <div className="absolute top-0 right-0 -mr-2px -mt-2px w-1 h-1 ring-1 ring-status-error rounded-full bg-status-error"></div>
            </div>
          </div>
          <div>
            <div className="relative inline-flex">
              <Avatar sizeClass="h-8 w-8" />
              <div className="absolute top-0 right-0 -mr-2px -mt-2px w-1 h-1 ring-2 ring-status-error rounded-full bg-status-error"></div>
            </div>
          </div>

          <div>
            <div className="relative inline-flex">
              <Avatar sizeClass="h-10 w-10" />
              <div className="absolute -top-1 -right-1 w-2 h-2 ring-1 ring-status-error rounded-full bg-status-error"></div>
            </div>
          </div>
          <div>
            <div className="relative inline-flex">
              <Avatar sizeClass="h-12 w-12" />
              <div className="absolute -top-1 -right-1 w-2 h-2 ring-2 ring-status-error rounded-full bg-status-error"></div>
            </div>
          </div>
        </div>
        <div className="space-y-8 grid grid-cols-1">
          <div className="relative inline-flex items-center">
            <Avatar />
            <span className="text-paragraph-tiny font-semibold ml-2 truncate dark:text-white">
              Name Lastname
            </span>
          </div>
          <div className="relative inline-flex items-center">
            <Avatar sizeClass="h-8 w-8" />
            <span className="text-paragraph-xs-small font-semibold ml-2 truncate dark:text-white">
              Name Lastname
            </span>
          </div>
          <div className="relative inline-flex items-center">
            <Avatar sizeClass="h-10 w-10" />
            <span className="text-paragraph-small font-semibold ml-2 truncate dark:text-white">
              Name Lastname
            </span>
          </div>
          <div className="relative inline-flex items-center">
            <Avatar sizeClass="h-12 w-12" />
            <span className="text-paragraph-base font-semibold ml-2 truncate dark:text-white">
              Name Lastname
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
