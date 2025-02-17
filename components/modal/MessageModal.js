"use client";
import "./message.scss";
const MessageModal = ({ standings, setStandings }) => {
  return (
    <main>
      <div className="message_container">
        <div className="content">
          <textarea name="" id="" placeholder="Enter a system message..." />
          <a>
            <button>Send a message</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default MessageModal;
