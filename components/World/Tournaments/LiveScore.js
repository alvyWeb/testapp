const LiveScore = ({ tournament }) => {
  // const [firstTotalScore, secondTotalScore] = calculateTotalScores(scores);
  // const eventTime = calculateTimeDiff(event_time);

  return (
    <div className="stream_">
      <div className="_stream">
        <div className="stream_head">
          <p>
            <span className="_live">LIVE</span>
            <span className="_live_item">
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
              </svg>
            </span>
            <span className="_live_item">Rnd of 10</span>
          </p>
          <p>
            <span>{tournament["Match Length"]}</span>
          </p>
        </div>
      </div>
      {/* STREAM.1/1*/}
      <div className="_live_playing">
        <div className="_profile">
          <div className="profile_img">
            <div className="im_con">
              {/* <span className="pro_img">
                {event_first_player_logo ? (
                  <img src={event_first_player_logo} alt="" />
                ) : (
                  <img src="/icon/player.png" alt="" />
                )}
              </span> */}
              {/* <span className="pro_img side">
                      <img src={event_first_player_logo} alt="" />
                    </span> */}
            </div>
          </div>
          <div className="nam_turn">
            <p>-</p>
            <p>{tournament?.winner}</p>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.51753 9.96476C7.99315 9.96476 9.99991 7.958 9.99991 5.48238C9.99991 3.00676 7.99315 1 5.51753 1C3.04192 1 1.03516 3.00676 1.03516 5.48238C1.03516 7.958 3.04192 9.96476 5.51753 9.96476Z"
                stroke="white"
                stroke-width="0.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.46342 2.10352C7.26796 4.13403 7.26796 6.46173 8.46342 8.86115M2.57178 2.10352C3.76723 4.13403 3.76723 6.46173 2.57178 8.86115"
                stroke="white"
                stroke-width="0.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="round_socre">
          <p className="_round">
            {/* <span className=" _active">{firstTotalScore}</span> */}
          </p>
          {/* <p className="_score">{scores?.length}</p> */}
        </div>
      </div>
      {/* STREAM.1/2*/}
      <div className="_live_playing border_top">
        <div className="_profile">
          <div className="profile_img">
            <div className="im_con">
              {/* <span className="pro_img">
                {event_second_player_logo ? (
                  <img src={event_second_player_logo} alt="" />
                ) : (
                  <img src="/icon/player.png" alt="" />
                )}
              </span> */}
              {/* <span className="pro_img side">
                      <img src="./Stock/Group 26086987.svg" alt="" />
                    </span> */}
            </div>
          </div>
          <div className="nam_turn">
            <p>-</p>
            <p>{tournament?.Loser}</p>
            <svg
              // className={` ${
              //   event_serve === "Second Player"
              //     ? "ball-serve-active"
              //     : "ball-serve"
              // } `}
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.51753 9.96476C7.99315 9.96476 9.99991 7.958 9.99991 5.48238C9.99991 3.00676 7.99315 1 5.51753 1C3.04192 1 1.03516 3.00676 1.03516 5.48238C1.03516 7.958 3.04192 9.96476 5.51753 9.96476Z"
                stroke="white"
                stroke-width="0.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.46342 2.10352C7.26796 4.13403 7.26796 6.46173 8.46342 8.86115M2.57178 2.10352C3.76723 4.13403 3.76723 6.46173 2.57178 8.86115"
                stroke="white"
                stroke-width="0.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="round_socre">
          <p className="_round">
            {/* <span className=" _active">{secondTotalScore}</span> */}
          </p>
          {/* <p className="_score">{scores?.length}</p> */}
        </div>
      </div>
    </div>
  );
};

export default LiveScore;
