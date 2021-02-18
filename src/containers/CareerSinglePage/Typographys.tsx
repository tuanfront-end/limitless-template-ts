import Button from "components/Button/Button";
import Input from "components/Input/Input";
import React from "react";

const Typographys = () => {
  return (
    <div className="dark:text-gray-100 mb-10">
      <h1 className="text-f3 md:text-f1 font-bold shadow-link-tick px-2 inline-block mb-0">
        Tax Prep Specialist
      </h1>
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto dark:text-gray-100">
        <div>
          <p>
            Reporting to and in partnership with the Executive Director (ED),
            the Development Director (Director) will spearhead development
            efforts as XYZ Nonprofit continues to grow. A new position in the
            organization, the Director will have the opportunity to build the
            development function.
          </p>
          <h3>Responsibilities</h3>
          <ul role="list">
            <li>Develop and execute XYZ Nonprofit's annual fundraising plan</li>
            <li>
              Secure financial support from individuals, foundations and
              corporations
            </li>
            <li>
              Manage the implementation of Raiser's Edge and oversee staff
              responsible for data entry and gift processing
            </li>
            <li>
              Develop and maintain ongoing relationships with major donors
            </li>
            <li>
              Creating and executing a strategy for a large sustained base of
              annual individual donors
            </li>
            <li>Overseeing organization of special events</li>
            <li>
              Developing and tracking proposals and reports for all foundation
              and corporate fundraising
            </li>
          </ul>
          <h3>Qualifications</h3>
          <ul role="list">
            <li>BA (required), MA (a plus)</li>
            <li>Five-plus years experience in development</li>
            <li>
              Demonstrated excellence in organizational, managerial, and
              communication skills
            </li>
            <li>Knowledge of Raiser's Edge</li>
          </ul>
        </div>
      </div>
      <form
        action="#"
        method="POST"
        className="flex flex-col space-y-6 mt-16"
        id="Career-Apply-Form"
      >
        <div className="space-y-4">
          <h2 className="text-f3 md:text-f2 font-bold">
            Apply for this position
          </h2>
          <Input name="Apply-firtName" label="First Name" />
          <Input name="Apply-lastName" label="Last Name" />
          <Input name="Apply-Email" type="email" label="Email Address" />
          <Input name="Apply-phone" label="Phone Number" />
          <Input name="Apply-address" label="City (United States)" />
          <Input name="Apply-Relevant-Experience" label="Relevant Experience" />
          <Input name="Apply-Company" label="Company" />
        </div>
        <Button size="small">apply</Button>
      </form>
    </div>
  );
};

export default Typographys;
