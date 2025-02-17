import './scores.scss';

const Scores = ({ standings, setStandings }) => {
  return (
    <main className="score_app">
      <div className="s_container">
        <div className="main_score">
          {/* LIVE HEAD */}
          <div className="live_head">
            {/* GAME_PLAYER */}
            <div className="score_player_available">
              <div className="player_available m_enter">
                <p>25/10</p>
              </div>
              <div className="player_available _bord_no">
                <p className="_selected">26/10</p>
                <span className="select">
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#145E94" />
                  </svg>
                </span>
              </div>
              <div className="player_available">
                <p>27/10</p>
              </div>
              <div className="player_available">
                <p>28/10</p>
              </div>
              <div className="player_available">
                <p>29/10</p>
              </div>
            </div>
            {/* GAME_LIST */}
            <div className="_game_list">
              <div className="game_sm_playlist">
                <p>
                  <span className="_all">All</span>
                  <span className="_live">Live</span>
                </p>
              </div>
              <div className="game_lg_playlist">
                <p>
                  <span className="_all">All</span>
                  <span className="_live">Single</span>
                  <span className="_live">Doubles</span>
                </p>
              </div>
            </div>
          </div>
          {/* LIVE_STREAM. */}
          <div className="tennis">
            {/* GLOBAL. */}
            {/* TENNIS STREAM_1 */}
            <div className="tennis_stream">
              <div className="stream_">
                <div className="heading_stream">
                  <h1>Court Central</h1>
                </div>
              </div>
              {/* STREAM-1 */}
              <div className="stream_">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">LIVE</span>
                      <span className="_live_item"><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
                      </svg>
                      </span> <span className="_live_item">Rnd of 10</span>
                    </p>
                    <p>
                      <span>35m</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                      <span><img src="./Stock/Group.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">6</p>
                    <p className="_score">0</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. M</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">4</p>
                    <p className="_score">0</p>
                  </div>
                </div>
              </div>
              {/* STREAM-2 */}
              <div className="stream_  _head_c">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">ESTIMATED START: 16:00</span>
                    </p>
                    <p>
                      <span>Rnd of 10</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">-</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. M</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">-</p>
                  </div>
                </div>
              </div>
              {/* STREAM-3 */}
              <div className="stream_ _head_c_d">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">FINAL</span>
                      <span className="_live_item"><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
                      </svg>
                      </span> <span className="_live_item">Rnd of 10</span>
                    </p>
                    <p>
                      <span>2h 35m</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                      <span><img src="./Stock/Vector.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round"><span className="_match">6</span></p>
                    <p className="_round _square">
                      <span>6</span>
                      <span className='_square_s'>5</span>
                    </p>
                    <p className="_round _scores">3</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Ellipse 170.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn _disable">
                      <p>Penn. M</p>
                    </div>
                  </div>

                  <div className="round_socre">
                    <p className="_round">4</p>
                    <p className="_round _square">
                      <span className='_active'>7</span>
                      <span className='_square_s _active'>7</span>
                    </p>
                    <p className="_round _scores">6</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TENNIS STREAM_2 */}
            <div className="tennis_stream">
              {/* STREAM-1 */}
              <div className="stream_">
                <div className="heading_stream">
                  <h1>Court #1</h1>
                </div>
                {/* STREAM.1/2*/}
              </div>
              {/* FINAL STREAM */}
              <div className="stream_ _head_c_d">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">FINAL</span>
                      <span className="_live_item"><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
                      </svg>
                      </span> <span className="_live_item">Rnd of 10</span>
                    </p>
                    <p>
                      <span>2h 35m</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                      <span><img src="./Stock/Vector.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round"><span className="_match">6</span></p>
                    <p className="_round _square">
                      <span>6</span>
                      <span className='_square_s'>5</span>
                    </p>
                    <p className="_round _scores">3</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Ellipse 170.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn _disable">
                      <p>Penn. M</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">4</p>
                    <p className="_round _square">
                      <span className='_active'>7</span>
                      <span className='_square_s _active'>7</span>
                    </p>
                    <p className="_round _scores">6</p>
                  </div>
                </div>
              </div>
              {/* FINAL STREAM */}
              <div className="stream_ _head_c_d">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">FINAL</span>
                      <span className="_live_item"><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
                      </svg>
                      </span> <span className="_live_item">Rnd of 10</span>
                    </p>
                    <p>
                      <span>2h 35m</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                      <span><img src="./Stock/Vector.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round"><span className="_match">6</span></p>
                    <p className="_round _square">
                      <span>6</span>
                      <span className='_square_s'>5</span>
                    </p>
                    <p className="_round _scores">3</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Ellipse 170.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn _disable">
                      <p>Penn. M</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">4</p>
                    <p className="_round _square">
                      <span className='_active'>7</span>
                      <span className='_square_s _active'>7</span>
                    </p>
                    <p className="_round _scores">6</p>
                  </div>
                </div>
              </div>
              {/* FINAL STREAM */}
              <div className="stream_ _head_c_d">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">FINAL</span>
                      <span className="_live_item"><svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#FCFAFA" />
                      </svg>
                      </span> <span className="_live_item">Rnd of 10</span>
                    </p>
                    <p>
                      <span>2h 35m</span>
                    </p>
                  </div>
                </div>
                {/* STREAM.1/1*/}
                <div className="_live_playing">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn">
                      <p>Penn. N</p>
                      <span><img src="./Stock/Vector.svg" alt="" /></span>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round"><span className="_match">6</span></p>
                    <p className="_round _square">
                      <span>6</span>
                      <span className='_square_s'>5</span>
                    </p>
                    <p className="_round _scores">3</p>
                  </div>
                </div>
                {/* STREAM.1/2*/}
                <div className="_live_playing border_top">
                  <div className="_profile">
                    <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Ellipse 170.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                    <div className="nam_turn _disable">
                      <p>Penn. M</p>
                    </div>
                  </div>
                  <div className="round_socre">
                    <p className="_round">4</p>
                    <p className="_round _square">
                      <span className='_active'>7</span>
                      <span className='_square_s _active'>7</span>
                    </p>
                    <p className="_round _scores">6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Scores;

