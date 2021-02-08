import React from "react";

export interface SectionStoryProps {
  data: [string, string];
}

const SectionStory: React.FC<SectionStoryProps> = ({ data, children }) => {
  return (
    <div className="max-w-screen-sm mx-auto text-black dark:text-white flex flex-col items-center justify-center ">
      <span className="text-secondary mb-4 uppercase">{data[0]}</span>
      <h2 className="text-f2 font-bold mb-4 capitalize">{data[1]}</h2>
      <span className="mb-8">
        {children ||
          `Nunc imperdiet at turpis sollicitudin vulputate velit. Commodo augue
        dolor ornare purus lobortis dui. Nisl mollis sodales porta vitae nulla
        pharetra amet, duis. Rhoncus tincidunt sollicitudin et sed iaculis
        senectus ornare sagittis. Est leo sed euismod id odio commodo consequat.
        Elit magna vitae ullamcorper posuere sagittis, sed natoque. Eget eget
        vulputate porttitor massa porttitor egestas donec. Id tellus parturient
        sit aliquam neque condimentum auctor. `}
      </span>
      <div className="h-52 2xl:h-64 border-l-2 border-primary"></div>
    </div>
  );
};

export default SectionStory;
