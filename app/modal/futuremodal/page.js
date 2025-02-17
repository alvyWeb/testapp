"use client";
import { useRef } from "react";
import "./futuremodal.scss";
function FutureModal({ onClose }) {
  const modalRef = useRef();
  const CloseModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <main>
      <div ref={modalRef} onClick={CloseModal} className="content_fixer">
        <div className="main_container">
          <div className="modal_content">
            <div className="head_ontent">
              {/* <svg
                width="120"
                height="5"
                viewBox="0 0 120 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="120" height="5" rx="2.5" fill="#D9D9D9" />
              </svg> */}
              <div className="popup_match">
                <div className="player_profile">
                  <span>
                    <img src="../user-Image/Tafsir.png" />
                    <img src="../flags/km.png" />
                  </span>
                  <p className="name">Oz Y.</p>
                  <p className="rank">(The Wiz)</p>
                </div>
                <p>VS.</p>
                <div className="player_profile">
                  <span>
                    <img src="../user-Image/Tafsir.png" />
                    <img src="../flags/km.png" />
                  </span>
                  <p className="name">Goren S.</p>
                  <p className="rank">(hard)</p>
                </div>
              </div>
            </div>
            <div className="body_content">
              <div className="score">
                <div className="player_score">
                  <p>1</p>
                  <p>1.62</p>
                </div>
                <div className="player_score">
                  <p>1</p>
                  <p>1.62</p>
                </div>
              </div>
              <div className="player_cash">
                <span>
                  <svg
                    width="44"
                    height="1"
                    viewBox="0 0 44 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line y1="0.5" x2="44" y2="0.5" stroke="#B0AAAA" />
                  </svg>
                </span>
                <p>1500</p>
                <p>500</p>
                <p>100</p>
                <p>50</p>
              </div>
              <div className="win_cash">
                <p>Expected win:</p>
                <span>
                  <p>162</p>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0001 12.2145C18.9765 12.2145 22.2001 10.7818 22.2001 9.01445C22.2001 7.24714 18.9765 5.81445 15.0001 5.81445C11.0236 5.81445 7.80009 7.24714 7.80009 9.01445C7.80009 10.7818 11.0236 12.2145 15.0001 12.2145Z"
                      stroke="#145E94"
                      stroke-width="1.12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.80009 9.01416V18.6142C7.80009 20.3742 11.0001 21.8142 15.0001 21.8142C19.0001 21.8142 22.2001 20.3742 22.2001 18.6142V9.01416"
                      stroke="#145E94"
                      stroke-width="1.12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.1999 13.814C22.1999 15.574 18.9999 17.014 14.9999 17.014C10.9999 17.014 7.7999 15.574 7.7999 13.814M14.8399 2.61404C12.9703 1.46024 10.794 0.902228 8.5999 1.01404C4.6159 1.01404 1.3999 2.45404 1.3999 4.21404C1.3999 5.15804 2.3279 6.00604 3.7999 6.61404"
                      stroke="#145E94"
                      stroke-width="1.12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.79995 16.2139C2.32795 15.6059 1.39995 14.7579 1.39995 13.8139V4.21387"
                      stroke="#145E94"
                      stroke-width="1.12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.79995 11.4142C2.32795 10.8062 1.39995 9.95816 1.39995 9.01416"
                      stroke="#145E94"
                      stroke-width="1.12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="bet_button">
              <a href="">
                <button>Make a bet</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FutureModal;
