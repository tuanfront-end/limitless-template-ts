import { Alert } from "components/Alert/Alert";
import React from "react";

export const Alerts = () => {
  return (
    <section className="">
      <div className="space-y-8">
        <h1 className="text-f2 dark:text-white">Alert</h1>
        <Alert />
        <Alert type="info" />
        <Alert type="success" />
        <Alert type="warning" />
        <Alert type="error" />
      </div>
    </section>
  );
};
