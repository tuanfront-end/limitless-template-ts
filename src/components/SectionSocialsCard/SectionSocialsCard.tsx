import React from "react";

const SectionSocialsCard = () => {
  const _renderSocialCard = (icon: string, text: string) => {
    return (
      <div className="bg-white">
        <a
          href="#root"
          className="p-10 bg-primary bg-opacity-10 flex flex-col items-center justify-center transition-all shadow-link-thin hover:shadow-link-tick text-black hover:text-primary"
        >
          <i className={`${icon} text-f3 text-primary mb-2 p-2`}></i>
          <span className="text-f3 font-bold">{text}</span>
        </a>
      </div>
    );
  };
  return (
    <div className="max-w-screen-lg px-4 mx-auto py-20 text-center">
      <h2 className="text-f2 font-bold text-black dark:text-white mb-20">
        Stay in touch
      </h2>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {_renderSocialCard("lab la-instagram", "instagram")}
        {_renderSocialCard("lab la-facebook-f", "facebook")}
        {_renderSocialCard("las la-envelope", "email")}
      </div>
    </div>
  );
};

export default SectionSocialsCard;
