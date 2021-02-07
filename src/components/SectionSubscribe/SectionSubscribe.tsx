import Button from "components/Button/Button";
import Input from "components/Input/Input";
import React from "react";

const SectionSubscribe = () => {
  return (
    <div className="container bg-white dark:bg-black py-10 md:py-20 grid grid-cols-1">
      <h2 className="text-f3 sm:text-f2 text-primary font-bold mb-11 mx-auto">
        Say updated with the latest news!
      </h2>
      <form
        method="POST"
        className="md:flex items-end justify-center md:space-x-4 space-y-4 md:space-y-0"
      >
        <Input
          containerClassName="lg:w-96"
          name="name"
          placeholder="Jane Pollock"
          label="Name"
        />
        <Input
          containerClassName="lg:w-96 pb-2 md:pb-0"
          name="email"
          type="email"
          placeholder="jane@example.com"
          label="Email Address"
        />
        <Button size="small">subscribe</Button>
      </form>
    </div>
  );
};

export default SectionSubscribe;