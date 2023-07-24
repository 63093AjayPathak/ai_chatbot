import "./stylesheets/chat-complete.css";
import React from "react";

const Chat = () => {
  return (
    <div>
      <div className="chat-log" style={{ overflowY: "auto" }}>
        <div className="container">
          <p>Here each message will appear</p>
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
