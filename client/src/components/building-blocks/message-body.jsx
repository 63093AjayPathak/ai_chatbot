import "../stylesheets/chat-complete.css";
import SvgComponent from "../icons/ai-icon";

const MessageBody = ({ user, message }) => {
  const messageBodyToggle = (user) => {
    if (user === "ai") {
      return (
        <>
          <div className="message">
            <p>{message}</p>
          </div>
          <div className={`avatar ${user === "ai" && "chatgpt"}`}>
            {user === "ai" && <SvgComponent />}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`avatar ${user === "ai" && "chatgpt"}`}>
            {user === "ai" && <SvgComponent />}
          </div>
          <div className="message">{message}</div>
        </>
      );
    }
  };

  return (
    <>
      <div className={`chat-message ${user === "ai" && "chatgpt"}`}>
        <div className="chat-message-centre">{messageBodyToggle(user)}</div>
      </div>
    </>
  );
};

export default MessageBody;
