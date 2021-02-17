import { Alert } from "components/Alert/Alert";
import React from "react";

const ComponentAlertsPage = () => {
  return (
    <section className="ttnc-ComponentAlertsPage bg-white dark:bg-black">
      <div className="py-20 px-4 max-w-body mx-auto space-y-8">
        <h1 className="text-f2 dark:text-white font-bold">Alert</h1>
        <Alert />
        <Alert type="info" />
        <Alert type="success" />
        <Alert type="warning" />
        <Alert type="error" />
      </div>
    </section>
  );
};

export default ComponentAlertsPage;
