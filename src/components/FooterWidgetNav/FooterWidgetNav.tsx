import React from "react";

export interface FooterWidgetNavProps {
  dataIndex?: number;
}

const FooterWidgetNav: React.FC<FooterWidgetNavProps> = ({ dataIndex = 0 }) => {
  const data = [
    ["Our Story", "Our Mission", "Our Team", "Contact Us"],
    ["Volunteer", "Events", "Partners", "Careers"],
    ["Blog", "Careers", "Donate"],
  ];
  const title = ["About Us", "Get Involved", "Limitless"];

  const _renderItem = (item: string) => {
    return (
      <li>
        <a
          href="//#endregion"
          className="inline-block py-2 capitalize hover:shadow-link-tick hover:text-primary"
        >
          {item}
        </a>
      </li>
    );
  };
  return (
    <div>
      <h2 className="uppercase text-neutral-100 dark:text-neutral-900 font-semibold mb-1">
        {title[dataIndex]}
      </h2>
      <ul className="text-neutral-200 dark:text-neutral-700 font-normal">
        {data[dataIndex].map((item) => _renderItem(item))}
      </ul>
    </div>
  );
};

export default FooterWidgetNav;
