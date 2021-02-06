import React from "react";

export interface SearchInputProps {
  containerClassName?: string;
}

export default function SearchInput({
  containerClassName = "",
}: SearchInputProps) {
  return (
    <form
      className={`ttnc-search-form w-full relative flex-shrink-0 ${containerClassName}`}
    >
      <button
        type="submit"
        className="absolute right-1 mr-1px top-1/2 transform -translate-y-1/2 text-neutral-200 hover:bg-neutral-100 dark:text-neutral-100 rounded-full w-8 h-8 flex justify-center items-center"
      >
        <i className="las la-search text-lg leading-none"></i>
      </button>
      <input
        type="text"
        name="ttnc-search"
        className="focus:ring-action-primary focus:border-primary flex-1 block w-full sm:text-sm border-action-primary rounded-md pl-4 pr-10 py-2"
        placeholder="Search travel, lifestyle…"
      />
    </form>
  );
}
