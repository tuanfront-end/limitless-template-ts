import React from "react";

export interface SearchInputProps {
  containerClassName?: string;
  type?: "type1" | "type2";
}

export default function SearchInput({
  containerClassName = "w-52 xl:w-60",
  type = "type1",
}: SearchInputProps) {
  return (
    <form
      className={`wil-search-form relative flex-shrink-0 ${containerClassName}`}
    >
      <button
        type="submit"
        className={`absolute right-1 mr-1px top-1/2 transform -translate-y-1/2 text-neutral-900 ${
          type === "type1"
            ? "bg-primary"
            : "hover:bg-neutral-100 dark:text-neutral-100"
        } rounded-full w-8 h-8 flex justify-center items-center`}
      >
        <i className="las la-search text-lg leading-none"></i>
      </button>
      <input
        type="text"
        aria-label="Search travel, lifestyle…"
        placeholder="Search travel, lifestyle…"
        className="w-full h-10 lg:h-11 text-sm lg:text-base rounded-full pr-10 text-neutral-900 dark:text-neutral-100 placeholder-neutral-700 dark:placeholder-neutral-300 border-neutral-300 bg-transparent focus:border-primary focus:ring-0"
      />
    </form>
  );
}
