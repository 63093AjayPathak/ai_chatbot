import MessageBody from "./building-blocks/message-body";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import URL from "./building-blocks/config";

const Translate = ({ state, methodToChange }) => {
  const [language, setLanguage] = useState("Spanish");
  const [inputValue, setInputValue] = useState("");

  const callOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const callOnEnter = (event) => {
    if (event.key === "Enter") {
      senduserMessage(inputValue);
      setInputValue("");
    }
  };

  const chat = state;
  const setCurrentChat = methodToChange;

  const senduserMessage = (message) => {
    console.log(message);
    console.log(language);
    if (/^\s*$/.test(message)) {
      toast.warn(`Please type something valid`);
    } else {
      const body = {
        user: "user",
        message: `${message}`,
      };
      setCurrentChat(body);
      axios
        .post(URL + "/translate", {
          expected_lang: language,
          message: message,
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          const b = { user: "ai", message: `${response.data}` };
          setCurrentChat(b);
        })
        .catch((e) => {
          console.log(e);
          toast.error(
            `Something seems to be wrong from our side, please try again later`
          );
        });
    }
  };

  return (
    <div>
      <div className="chat-log" style={{ overflowY: "auto" }}>
        <div
          className="text-box"
          style={{
            marginLeft: "20%",
            marginRight: "20%",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <div className="select-div">
            <label className="select-label">
              Choose the language
              <select
                className="select-tag"
                style={{ backgroundColor: "rgba(247,247,248,0.3)" }}
                onChange={onChangeLanguage}
              >
                <option className="select-option" style={{}} value="Spanish">
                  Spanish
                </option>
                <option className="select-option" value="Italy">
                  Italy
                </option>
                <option className="select-option" value="French">
                  French
                </option>
                <option className="select-option" value="Hindi">
                  Hindi
                </option>
                <option className="select-option" value="English">
                  English
                </option>
                <option className="select-option" value="Russian">
                  Russian
                </option>
                <option className="select-option" value="Chinese">
                  Chinese
                </option>
                <option className="select-option" value="German">
                  German
                </option>
                <option className="select-option" value="Urdu">
                  Urdu
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="container">
          {chat?.map((message) => {
            return (
              <MessageBody
                key={message.index}
                user={message.user}
                message={message.message}
              />
            );
          })}
        </div>
      </div>
      <div className="text-box">
        <input
          className="text-input"
          placeholder="Write what you want to translate and Press Enter to send"
          value={inputValue}
          rows={1}
          onKeyDown={callOnEnter}
          onChange={callOnChange}
        ></input>
      </div>
    </div>
  );
};

export default React.memo(Translate);
