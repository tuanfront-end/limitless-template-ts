import React from "react";
import { Link } from "react-router-dom";
import { LocationStates } from "routers/types";

interface NavItemType {
  id: number;
  name: string;
  //   link: keyof LocationStates;
  link: string;
  children?: NavItemType[];
  isActive?: boolean;
}
const DATABASE: NavItemType[] = [
  { id: 1, name: "Home", link: "/", isActive: true },
  {
    id: 11,
    name: "search",
    link: "/search",
    children: [
      { id: 2, name: "search articles", link: "/search" },
      { id: 20, name: "search categories", link: "/searchCategories" },
      { id: 21, name: "search authors", link: "/searchAuthors" },
      { id: 22, name: "search tags", link: "/searchTags" },
    ],
  },
  {
    id: 13,
    name: "author",
    link: "/author",
    children: [
      { id: 3, name: "author articles", link: "/author" },
      { id: 32, name: "author About", link: "/authorAbout" },
      { id: 33, name: "author saved", link: "/authorSaved" },
      { id: 34, name: "author follower", link: "/authorFollower" },
      { id: 35, name: "author following", link: "/authorFollowing" },
    ],
  },
  {
    id: 14,
    name: "detail",
    link: "/detail",
    children: [
      { id: 2, name: "Detail 1", link: "/detail" },
      { id: 20, name: "Detail 2", link: "/detail2" },
      { id: 21, name: "Detail 3", link: "/detail3" },
    ],
  },
];
const DATA: NavItemType[] = [
  ...DATABASE,
  {
    id: 16,
    name: "more",
    link: "/",
    children: [
      { id: 15, name: "404 page", link: "/404" as any },
      {
        id: 16,
        name: "Level 2",
        link: "/",
        children: [
          { id: 15, name: "404 page", link: "/404" as any },
          { id: 16, name: "404 page", link: "/404" as any },
        ],
      },
    ],
  },
];

function Navigation() {
  const _renderMenuChild = (item: NavItemType, className = "top-full") => {
    return (
      <div className={`sub-menu absolute py-3 px-2 z-50 w-60 ${className}`}>
        <div
          className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {item.children?.map((i) => (
            <div key={i.id} className="relative menu-item-has-children">
              <Link
                to={i.link}
                className="block px-4 py-2 hover:bg-gray-100 text-link-medium"
                role="menuitem"
              >
                {i.name}
                {i.children && <i className="ml-1 las la-angle-down"></i>}
              </Link>
              {i.children && _renderMenuChild(i, "left-full -top-4")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const _renderItem = (item: NavItemType) => {
    const classN = item.isActive
      ? "text-primary"
      : "text-gray-900 dark:text-white";
    return (
      <div key={item.id} className="relative menu-item-has-children ">
        <Link
          className={`${classN} inline-flex items-center py-2 px-4 text-link-medium font-semibold uppercase`}
          to={item.link}
        >
          {item.name}
          {item.children && <i className="ml-1 mb-1 las la-angle-down"></i>}
        </Link>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return (
    <nav className="flex flex-wrap text-sm lg:text-base font-medium capitalize">
      {DATA.map(_renderItem)}
    </nav>
  );
}

export default Navigation;
