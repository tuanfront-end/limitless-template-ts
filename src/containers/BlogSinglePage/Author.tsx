import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import React from "react";

export default function Author() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap font-medium mb-10">
      <div className="flex space-x-5 mr-4">
        <Avatar sizeClass="w-20 h-20" radius="rounded-2.5xl" />
        <div>
          <span className="block uppercase text-xs tracking-wider">
            written by
          </span>
          <a
            className="block text-black font-semibold dark:text-gray-100 text-paragraph-base"
            href="#root"
          >
            Elliana Palacios
          </a>
          <span className="text-paragraph-small text-gray-700 dark:text-gray-200">
            Quisque non pulvinar sem. Donec urna felis, suscipit eu fermentum
            nec, rutrum vel nisl{" "}
            <a className="shadow-link-thin hover:shadow-link-tick" href="#root">
              continue reading
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
