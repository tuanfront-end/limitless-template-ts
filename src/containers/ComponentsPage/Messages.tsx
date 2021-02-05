import Message from "components/Message/Message";
import React from "react";

const Messages = () => {
  return (
    <div className="space-y-8">
      <Message type="success" />
      <Message type="error" />
      <Message type="warning" />
      <Message type="info" />
    </div>
  );
};

export default Messages;
