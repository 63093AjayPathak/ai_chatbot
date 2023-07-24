import "./stylesheets/chat-complete.css";
import React, { useState, useCallback } from "react";
import Chat from "./chat";
import Translate from "./translate";
import CodeTranslate from "./code-translate";
import { toast } from "react-toastify";

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

  // to be used in rendering the component chosen and clearing the chat of chosen component
  const [chosenButton, setChosenButton] = useState("chat");

  // for setting the chosen option among chat/translate/code_translate
  const changeButton = (value) => {
    setChosenButton(value);
  };

  // for setting the current chat
  const setCurrentChat = useCallback(
    (body) => {
      setChat((prevChat) => [...prevChat, body]);
    },
    [chat]
  );

  // for clearing current chat
  const clearChat = useCallback(() => {
    setChat([{ user: "ai", message: "How can I help you?" }]);
  }, [chat]);

  // for setting chat of translations
  const setTranslateChat = useCallback(
    (body) => {
      setTranslate((prevTranslate) => [...prevTranslate, body]);
    },
    [translate]
  );

  // for clearing state of translations
  const clearTranslate = useCallback(() => {
    setTranslate([{ user: "ai", message: "How can I help you?" }]);
  }, [translate]);

  // for setting state of code translations
  const setCurrentTranslateCode = useCallback(
    (body) => {
      setTranslateCode((prevTranslateCode) => [...prevTranslateCode, body]);
    },
    [translateCode]
  );

  // for clearing state of code translations
  const clearTranslateCode = useCallback(() => {
    setTranslateCode([{ user: "ai", message: "How can I help you?" }]);
  }, [translateCode]);

  // setting state (chosenButton to various values according to the option chosen in UI)
  const setToChat = () => {
    changeButton("chat");
  };

  const setToTranslate = () => {
    changeButton("translate");
  };

  const setToCodeTranslate = () => {
    changeButton("code");
  };

  // clearing conversation on the basis of chosenButton
  const clearConvo = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear the conversation?"
    );

    if (isConfirmed) {
      if (chosenButton === "chat") {
        clearChat();
      } else if (chosenButton === "translate") {
        clearTranslate();
      } else {
        clearTranslateCode();
      }
      toast.info("Conversation cleared");
    }
  };

  // conditional rendering of component according to chosenButton
  const componentToRender = () => {
    if (chosenButton === `chat`) {
      return <Chat state={chat} methodToChange={setCurrentChat} />;
    } else if (chosenButton === `translate`) {
      return <Translate state={translate} methodToChange={setTranslateChat} />;
    } else {
      return (
        <CodeTranslate
          state={translateCode}
          methodToChange={setCurrentTranslateCode}
        />
      );
    }
  };

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
        <aside className="conversations">
          <div
            className={
              chosenButton === `chat`
                ? `toggle-button-selected`
                : `toggle-button`
            }
            onClick={setToChat}
          >
            Chat
          </div>
          <div
            className={
              chosenButton === `translate`
                ? `toggle-button-selected`
                : `toggle-button`
            }
            onClick={setToTranslate}
          >
            Translator
          </div>
          <div
            className={
              chosenButton === `code`
                ? `toggle-button-selected`
                : `toggle-button`
            }
            onClick={setToCodeTranslate}
          >
            Code Translator
          </div>
          <div className="toggle-button" onClick={clearConvo}>
            Clear Chat
          </div>
        </aside>
        <section className="chat-box" style={{ overflowY: "auto" }}>
          {componentToRender(chat, setCurrentChat, clearChat)}
        </section>
      </div>
    </div>
  );
};

export default React.memo(Home);
