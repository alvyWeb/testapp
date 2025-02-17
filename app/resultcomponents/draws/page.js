import './draws.scss';

const Draws = ({ standings, setStandings }) => {

  return (
    <main className="atprank_app">
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
          <div className="match_content">
            {/* STREAM WRAPE */}
          <div className="stream_container">
            {/* STREAM-1 */}
          <div className="stream_ _head_c_d _main_stream">
            <div className="_stream">
              <div className="stream_head">
                <p>
                  <span className="_live">Court #1</span>
                </p>
              </div>
            </div>
            {/* STREAM.1/1*/}
            <div className="_live_playing">
              <div className="_profile">
                <div className="profile_img">
                <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                </div>
                <div className="nam_turn">
                  <p>6 | Penn. N</p>
                </div>
              </div>
              <span>
                <img src="./Stock/Vector.svg" alt="" />
              </span>
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
                  <p>Penn. N</p>
                </div>
              </div>
            </div>
          </div>
            {/* STREAM-1 */}
          <div className="stream_ _head_c_d _main_stream">
            <div className="_stream">
              <div className="stream_head">
                <p>
                  <span className="_live">Court #1</span>
                </p>
              </div>
            </div>
            {/* STREAM.1/1*/}
            <div className="_live_playing">
              <div className="_profile">
                <div className="profile_img">
                <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                </div>
                <div className="nam_turn">
                  <p>6 | Penn. N</p>
                </div>
              </div>
              <span>
                <img src="./Stock/Vector.svg" alt="" />
              </span>
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
                  <p>Penn. N</p>
                </div>
              </div>
            </div>
          </div>
          </div>{/* STREAM WRAPE */}
          <div className="stream_container">
            {/* STREAM-1 */}
          <div className="stream_ _head_c_d _main_stream">
            <div className="_stream">
              <div className="stream_head">
                <p>
                  <span className="_live">Court #1</span>
                </p>
              </div>
            </div>
            {/* STREAM.1/1*/}
            <div className="_live_playing">
              <div className="_profile">
                <div className="profile_img">
                <div className="im_con">
                      <span className="pro_img">
                        <img src="./Stock/Group 26086934.png" alt="" />
                      </span>
                      <span className="con_svg">
                        <img src="./Stock/Frame.svg" alt="" />
                      </span>
                    </div>
                </div>
                <div className="nam_turn">
                  <p>6 | Penn. N</p>
                </div>
              </div>
              <span>
                <img src="./Stock/Vector.svg" alt="" />
              </span>
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
                  <p>Penn. N</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="match_make">
          <img src="./Stock/public/Stock/Frame.svg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Draws;

