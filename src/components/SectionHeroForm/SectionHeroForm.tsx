import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

export interface SectionHeroFormProps {
  isRight?: boolean;
  title?: string;
  desc?: string;
  img?: string;
}

const SectionHeroForm: React.FC<SectionHeroFormProps> = ({
  isRight = false,
  desc,
  title = "Contact Us",
  img,
}) => {
  return (
    <div className="ttc-SectionHeroForm">
      <div className="grid tnnc-grid-col-section-hero min-h-screen py-20">
        <div
          className={` row-start-1 flex items-center z-10 p-8 lg:p-0 ${
            isRight
              ? "col-start-1 lg:col-start-2 col-end-4 justify-start"
              : "col-start-1 col-end-4 lg:col-end-3 justify-end"
          }`}
        >
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black grid grid-cols-1 gap-4">
            <h2 className="text-f2 lg:text-f1 font-bold text-black dark:text-white">
              {title}
            </h2>
            <span className="text-paragraph-base font-bold text-black dark:text-white">
              {desc ||
                `We'd love to get in touch with you! Send us a message below and
              we'll contact you in the next 24 hours. Thanks!`}
            </span>
            <form method="POST" className="grid grid-cols-1 gap-3 mt-4">
              <Input name="heroName" placeholder="Jane Pollock" label="Name" />
              <Input
                name="heroEmail"
                type="email"
                placeholder="jane@example.com"
                label="Email Address"
              />
              <Textarea
                placeholder="How can we help?"
                name="heroMessage"
                label="Message"
              />
              <Button size="small" containerClassName="mt-2">
                Send
              </Button>
            </form>
          </div>
        </div>
        <div
          className={`relative ${
            isRight
              ? "col-start-1 col-end-4 lg:col-end-3 row-start-1"
              : "col-start-1 lg:col-start-2 col-end-4 row-start-1"
          }`}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img || _getImgHightQualityRd()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroForm;
