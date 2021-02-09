import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import Input from "components/Input/Input";
import Radio from "components/Radio/Radio";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Upload from "components/Upload/Upload";
import React from "react";

const ComponentFormsLayoutPage = () => {
  return (
    <div className="ttnc-ComponentFormsLayoutPage bg-white dark:bg-black">
      <div className="py-20 px-4 max-w-body mx-auto space-y-8">
        <h2 className="text-f2 font-bold text-black dark:text-white mb-2">
          Form Layout
        </h2>
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    name="ip1"
                    label="First name"
                    placeholder="Type First Name"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    name="ip2"
                    label="Last name"
                    placeholder="Type Last Name"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <Input
                    name="ip3"
                    label="Email address"
                    placeholder="Type Email address"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <Select name="Country" label="Country / Region">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </Select>
                </div>

                <div className="col-span-6">
                  <Input
                    name="ip3"
                    label="Street address"
                    placeholder="Type Street address"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <Input name="ip5" label="City" />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <Input name="ip6" label="State / Province" />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <Input name="ip7" label="ZIP / Postal" />
                </div>
                <div className="col-span-6">
                  <Textarea
                    name="textarea"
                    label="About"
                    placeholder="your-mail@example.com"
                    desc="Brief description for your profile. URLs are hyperlinked."
                  />
                </div>
                <div className="col-span-6">
                  <Upload name="upload1" label="Cover photo" />
                </div>
              </div>
            </div>
            <div className="px-4 py-5 space-y-6 sm:p-6">
              <fieldset>
                <div className="mt-4 space-y-4">
                  <Checkbox
                    name="Comments"
                    label="Comments"
                    subLabel="Get notified when someones posts a comment on a posting."
                  />
                  <Checkbox
                    name="Candidates"
                    label="Candidates"
                    subLabel="Get notified when a candidate applies for a job."
                  />
                  <Checkbox
                    name="dOffers"
                    label="Offers"
                    subLabel="Get notified when a candidate accepts or rejects an offer."
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="mt-4 space-y-4">
                  <Radio
                    id="rad1"
                    name="push_notifications"
                    label="Everything"
                  />
                  <Radio
                    id="rad3"
                    name="push_notifications"
                    label="Same as email"
                  />
                  <Radio
                    id="rad2"
                    name="push_notifications"
                    label="No push notifications"
                  />
                </div>
              </fieldset>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <Button size="small">Save</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComponentFormsLayoutPage;
