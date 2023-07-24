import "./stylesheets/chat-complete.css";
import React from "react";
import { useState } from "react";

const Home = () => {
  // states for our whole client side
  const [chat, setChat] = useState([
    { user: "ai", message: "How can I help you?" },
  ]);

  const [translate, setTranslate] = useState([
    { user: "ai", message: "How can I help you?" },
  ]);

  const [translateCode, setTranslateCode] = useState([
    { user: "ai", message: "How can I help you?" },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textDecorationStyle: "unset",
        font: "caption",
      }}
    >
      <div
        style={{
          backgroundColor: "#282c34",
          color: "whitesmoke",
          height: "70px",
        }}
      >
        <header style={{ padding: "10px", display: "flex" }}>
          <div style={{ textAlign: "left" }}>
            <h3>AI CHATBOT</h3>
          </div>
        </header>
      </div>

      <div className="main-container">
        <aside className="conversations"></aside>
        <section className="chat-box" style={{ overflowY: "auto" }}></section>
      </div>
    </div>
  );
};

export default React.memo(Home);
