import React from "react";
import "./message.css";

const chatMessage = () => {
    return (
        <div className="chatMessageblock">
            <div className="message_whatsap">
                <Link className="return" href="/profile">
                    <div className="lft_arro">
                    <img src="./placement/svg/left arrow.svg" alt="" />
                    </div>
                    <p>Return</p>
                </Link>
                <div className="send_msg">
                    <label htmlFor="">Send message to WhatsApp</label>
                    <textarea
                    name="message"
                    id="message"
                    placeholder="Enter a text message..."
                    />
                    <a href="">
                    <button>Send a message</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default chatMessage;