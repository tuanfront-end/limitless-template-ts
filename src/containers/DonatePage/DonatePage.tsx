import Button from "components/Button/Button";
import { imgHigtQualitys, _getImgHightQualityRd } from "contains/fakeData";
import React from "react";

const DonatePage = () => {
  return (
    <div className="ttnc-DonatePage bg-white dark:bg-black">
      <div className="container text-center my-20">
        <h1 className="text-f1 xl:text-d-small font-bold mb-20">
          3 way to donate to Warnbeat
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          <div className="flex flex-col items-center justify-between space-y-8">
            <h2 className="text-f2 font-semibold shadow-link-tick">Online</h2>
            <span>
              Make a one-time donation or setup recurring donations through our
              platform.
            </span>
            <Button size="small">Donate now</Button>
          </div>
          <div className="flex flex-col items-center justify-between space-y-8">
            <h2 className="text-f2 font-semibold shadow-link-tick">By Phone</h2>
            <span>Call us to make a payment over the phone.</span>
            <a
              className="text-3xl text-primary shadow-link-thin hover:shadow-link-tick leading-7"
              href="tell: +1 (800) 999-9999"
            >
              +1 (800) 999-9999
            </a>
          </div>
          <div className="flex flex-col items-center justify-between space-y-8">
            <h2 className="text-f2 font-semibold shadow-link-tick">By Mail</h2>
            <span>Send a donation by mail.</span>
            <span className="text-neutral-300 italic font-normal">
              <span className="text-black block">Warmbeat Donations</span> ‍123
              S East Street <br /> San Francisco, CA 90900
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[6]}
            alt=""
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[5]}
            alt=""
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[4]}
            alt=""
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[3]}
            alt=""
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[2]}
            alt=""
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={imgHigtQualitys[1]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
