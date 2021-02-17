import Message from "components/Message/Message";
import React from "react";

const ComponentMessagesPage = () => {
  return (
    <div className="ttnc-ComponentMessagesPage bg-white dark:bg-black">
      <div className="py-20 px-4 max-w-body mx-auto space-y-8">
        <h2 className="text-f2 dark:text-white font-bold mb-12">Messages</h2>
        <Message type="success" />
        <Message type="error" />
        <Message type="warning" />
        <Message type="info" />
      </div>
    </div>
  );
};

export default ComponentMessagesPage;
