import "./stylesheets/chat-complete.css";
import React from "react";

const Home = () => {
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

export default Home;
