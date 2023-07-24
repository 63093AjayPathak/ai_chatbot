import "./stylesheets/chat-complete.css";
import React from "react";
import MessageBody from "./building-blocks/message-body";

const Chat = () => {
  return (
    <div>
      <div className="chat-log" style={{ overflowY: "auto" }}>
        <div className="container">
          <MessageBody user="ai" message="Hello , how can I help you" />
        </div>
      </div>
      <div className="text-box">
        <input
          className="text-input"
          placeholder="Got something to say, type here. Press Enter to send"
          rows={1}
        ></input>
      </div>
    </div>
  );
};

export default React.memo(Chat);
