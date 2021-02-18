import React from "react";
import themeforestPng from "themeforest.png";
import img_4101 from "img_4101.png";
import envato from "envato-market-black.png";
import Button from "components/Button/Button";

const SectionLogoPartner = () => {
  return (
    <div className="ttnc-SectionStats py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start text-black dark:text-white space-y-8 ">
            <h2 className="text-f1 font-bold">
              <span className="ttnc-title-underline">Trusted</span> by over 6
              very average small business
            </h2>
            <span className="block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              doloremque rerum aliquam quas temporibus unde possimus dolorum
              praesentium id alias?
            </span>
            <Button size="medium" url="/contact">
              Contact Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <img className="w-52 opacity-40" src={envato} alt="envato" />
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <img src={img_4101} alt="img_4101" className="w-52 opacity-40" />
            </div>
            <div className="bg-gray-100 px-8 py-10 flex items-center justify-center">
              <img className="w-52 opacity-40" src={img_4101} alt="img_4101" />
            </div>
            <div className="bg-gray-100  px-8 py-10 flex items-center justify-center">
              <img className="w-52 opacity-40" src={envato} alt="envato" />
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <img
                src={themeforestPng}
                alt="themeforestPng"
                className="w-52 opacity-40"
              />
            </div>
            <div className="bg-gray-100  px-8 py-10 flex items-center justify-center">
              <img className="w-52 opacity-40" src={img_4101} alt="img_4101" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLogoPartner;
