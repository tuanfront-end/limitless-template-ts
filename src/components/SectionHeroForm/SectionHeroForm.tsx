import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import { _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const SectionHeroForm = () => {
  return (
    <div className="ttc-SectionHeroForm">
      <div className="grid tnnc-grid-col-section-hero min-h-screen py-20">
        <div className="col-start-1 col-end-4 lg:col-end-3 row-start-1 flex items-center justify-end z-10 p-8 lg:p-0">
          <div className="max-w-screen-lg p-8 md:p-20 lg:my-16 bg-white dark:bg-black grid grid-cols-1 gap-4">
            <h1 className="text-f2 lg:text-f1 font-bold text-black dark:text-white">
              Contact Us
            </h1>
            <span className="text-paragraph-base font-bold text-black dark:text-white">
              We'd love to get in touch with you! Send us a message below and
              we'll contact you in the next 24 hours. Thanks!
            </span>
            <form method="POST" className="grid grid-cols-1 gap-3 mt-4">
              <Input name="name" placeholder="Jane Pollock" label="Name" />
              <Input
                name="email"
                type="email"
                placeholder="jane@example.com"
                label="Email Address"
              />
              <Textarea
                placeholder="How can we help?"
                name="message"
                label="Message"
              />
              <Button size="small" containerClassName="mt-2">
                Send
              </Button>
            </form>
          </div>
        </div>
        <div className="relative col-start-1 lg:col-start-2 col-end-4 row-start-1">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={_getImgHightQualityRd()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroForm;