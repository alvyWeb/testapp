const UpcomingScore = ({ tournament }) => {
  const {
    event_first_player_logo,
    event_first_player,
    event_final_result,
    event_second_player,
    event_second_player_logo,
    scores,
    event_time,
  } = tournament || {};
  return (
    <div className="stream_  _head_c">
      <div className="_stream">
        <div className="stream_head">
          <p>
            <span className="_live">ESTIMATED START: {event_time}</span>
          </p>
          <p>
            <span>Rnd of 10</span>
          </p>
        </div>
      </div>
      {/* STREAM.1/1*/}
      <div className="_live_playing">
        <div className="_profile">
          <div className="profile_img">
            <div className="im_con">
              <span className="pro_img">
                {event_first_player_logo ? (
                  <img src={event_first_player_logo} alt="" />
                ) : (
                  <img src="/icon/player.png" alt="" />
                )}
              </span>
              {/* <span className="pro_img side">
                <img src="./Stock/Group 26086987.svg" alt="" />
              </span> */}
            </div>
          </div>
          <div className="nam_turn">
            <p>-</p>
            <p>{event_first_player}</p>
          </div>
        </div>
        <div className="round_socre">
          <p className="_round">-</p>
        </div>
      </div>
      {/* STREAM.1/2*/}
      <div className="_live_playing border_top">
        <div className="_profile">
          <div className="profile_img">
            <div className="im_con">
              <span className="pro_img">
                {event_second_player_logo ? (
                  <img src={event_second_player_logo} alt="" />
                ) : (
                  <img src="/icon/player.png" alt="" />
                )}
              </span>
              {/* <span className="pro_img side">
                <img src="./Stock/Group 26086987.svg" alt="" />
              </span> */}
            </div>
          </div>
          <div className="nam_turn">
            <p>-</p>
            <p>{event_second_player}</p>
          </div>
        </div>
        <div className="round_socre">
          <p className="_round">-</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingScore;
