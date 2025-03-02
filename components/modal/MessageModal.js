"use client";
import "./message.scss";
const MessageModal = ({ standings, setStandings }) => {
  return (
    <main>
      <div className="message_container">
        <div className="content">
          <textarea name="" id="" placeholder="הזן הודעת מערכת..." />
          <a className="submit_button">
            <button>שלח הודעה</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default MessageModal;
