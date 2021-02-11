import Button from "components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import { LocationStates } from "routers/types";
import NavMobile from "./NavMobile";

export interface NavItemType {
  id: number;
  name: string;
  link: keyof LocationStates | "#";
  // link: string;
  children?: NavItemType[];
  isActive?: boolean;
}
const DATABASE: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    isActive: true,
    children: [
      { id: 3, name: "Home 1", link: "/", isActive: true },
      { id: 2, name: "Home 2", link: "/home2" },
    ],
  },

  {
    id: 4,
    name: "Style Guide",
    link: "#",
    children: [
      { id: 5, name: "Alerts", link: "/c-alerts" },
      { id: 6, name: "Buttons", link: "/c-buttons" },
      { id: 7, name: "Avatars", link: "/c-avatars" },
      { id: 8, name: "Forms Layout", link: "/c-form-layout" },
      { id: 9, name: "Messages", link: "/c-messages" },
      { id: 10, name: "Dropdown - Modal", link: "/c-modal-dropdown" },
    ],
  },
  {
    id: 11,
    name: "About us",
    link: "/our-story",
    children: [
      { id: 12, name: "Our story", link: "/our-story" },
      { id: 13, name: "Our mission", link: "/our-mission" },
      { id: 14, name: "Our Team", link: "/our-team" },
      { id: 15, name: "Contact Us", link: "/contact" },
    ],
  },
  {
    id: 16,
    name: "Getinvolved",
    link: "#",
    children: [
      { id: 17, name: "Volunteer", link: "/volunteer" },
      { id: 18, name: "Events", link: "/events" },
      { id: 19, name: "Programs", link: "/programs" },
      { id: 20, name: "Careers", link: "/careers" },
    ],
  },
  {
    id: 21,
    name: "Blog",
    link: "/the-blog",
    children: [
      { id: 22, name: "Blog", link: "/the-blog" },
      { id: 23, name: "Blog Single", link: "/blog-single" },
    ],
  },
];
const DATA: NavItemType[] = DATABASE;

function Navigation() {
  const navMobileId = "ttnc-nav-mobbile";

  const _renderMenuChild = (item: NavItemType, className = "top-full") => {
    return (
      <div className={`sub-menu absolute py-3 px-2 z-50 w-60 ${className}`}>
        <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1">
          {item.children?.map((i, index) => (
            <div
              key={i.link + index}
              className="relative menu-item-has-children"
            >
              <Link
                to={i.link}
                className="block text-neutral-100 px-4 py-3 hover:bg-gray-100 text-link-small uppercase font-bold tracking-wider"
              >
                {i.name}
                {i.children && (
                  <i className="ml-1 font-bold las la-angle-down"></i>
                )}
              </Link>
              {i.children && _renderMenuChild(i, "left-full -top-4")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    const classN = item.isActive
      ? "text-primary"
      : "text-gray-900 dark:text-white";
    return (
      <div
        key={String(index) + item.link}
        className="relative menu-item-has-children "
      >
        <Link
          className={`${classN} inline-flex items-center py-2 px-4 text-link-small xl:text-link-medium font-bold uppercase tracking-wider`}
          to={item.link}
        >
          {item.name}
          {item.children && (
            <i className="ml-1 mb-1 font-bold las la-angle-down"></i>
          )}
        </Link>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return (
    <div>
      <div className="block lg:hidden">
        <Button size="small" type="ghost" modalToggleId={navMobileId}>
          Menu
        </Button>
        <div
          className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
          id={navMobileId}
        >
          <NavMobile data={DATA} id={navMobileId} />
        </div>
        <div
          className="hidden opacity-25 fixed inset-0 z-40 bg-black"
          id={`${navMobileId}-backdrop`}
          data-ttnc-modal-toggle={navMobileId}
        ></div>
      </div>
      <nav className="hidden lg:flex flex-wrap text-sm lg:text-base font-medium capitalize">
        {DATA.map(_renderItem)}
      </nav>
    </div>
  );
}

export default Navigation;
