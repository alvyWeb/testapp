import Link from "next/link";
import "./placement.scss";
import "./toggle.css";

const Placement = ({ standings, setStandings }) => {
  const placementProfile = {
    ragistationTooggle: [
      {
        daysTime: "Tuesday, 20:00 | Individuals",
        heading: "Registration days",
      },
      {
        daysTime: "Tuesday, 20:00 | Individuals",
        heading: "Registration days",
      },
      {
        daysTime: "Tuesday, 20:00 | Individuals",
        heading: "Registration days",
      },
    ],
    previousMatch: [
      {
        dayTime: "Saturday 27.08",
        headTitle: "Yarkon Park, Tel Aviv | Plot #2",
        logo: "./placement/png/peen_group.png",
        matchDate: "February 24 | 14:00",
        myImg: "./user-Image/Sabbir Sagar.png",
        myCountry: "./flags/at.png",
        close: "./placement/svg/close.svg",
        myName: "Penn N.",
        myRank: "(panther)",
        teaMateImg: "./user-Image/Sabbir Sagar.png",
        teaMateCountry: "./flags/at.png",
        teaMateName: "Penn N.",
        teaMateRank: "(panther)",
        "": "",
      },
      {
        dayTime: "Sunday 27.08",
        headTitle: "Yarkon Park, Tel Aviv | Plot #2",
        logo: "./placement/png/peen_group.png",
        matchDate: "February 24 | 14:00",
        myImg: "./user-Image/Sabbir Sagar.png",
        myCountry: "./flags/at.png",
        close: "./placement/svg/close.svg",
        myName: "Penn N.",
        myRank: "(panther)",
        teaMateImg: "./user-Image/Sabbir Sagar.png",
        teaMateCountry: "./flags/at.png",
        teaMateName: "Penn N.",
        teaMateRank: "(panther)",
        "": "",
      },
      {
        dayTime: "Monday 27.08",
        headTitle: "Yarkon Park, Tel Aviv | Plot #2",
        logo: "./placement/png/peen_group.png",
        matchDate: "February 24 | 14:00",
        myImg: "./user-Image/Sabbir Sagar.png",
        myCountry: "./flags/at.png",
        close: "./placement/svg/close.svg",
        myName: "Penn N.",
        myRank: "(panther)",
        teaMateImg: "./user-Image/Sabbir Sagar.png",
        teaMateCountry: "./flags/at.png",
        teaMateName: "Penn N.",
        teaMateRank: "(panther)",
        "": "",
      },
    ],
  };
  return (
    <main>
      <div className="placement_container">
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
        <div className="registration_time">
          <p>Registration days</p>
          {placementProfile.ragistationTooggle.map((item, index) => (
            <div className="day_time">
              <p>{item.daysTime}</p>
              <div className="toggle_img">
                {/* TOGGLE_BUTTON */}
                <div class="toggle">
                  <input type="checkbox" class="check" />
                  <b class="b switch"></b>
                  <b class="b track"></b>
                </div>
                {/* T_BUTTON_END */}
                <img src="./placement/svg/close.svg" alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="weekly_game">
          <div className="days_">
            <p>Create a new weekly game</p>
            <div className="days_choosedate">
              <p>Days</p>
              <div className="select_content">
                <select name="" id="">
                  <option value="">Choose a date</option>
                  <option value="">10/03/2024</option>
                  <option value="">10/04/2024</option>
                  <option value="">10/05/2024</option>
                </select>
                <img src="./placement/svg/bottom_arrow.svg" alt="" />
              </div>
            </div>
            <div className="days_choosedate">
              <p>Hours</p>
              <div className="select_content">
                <select name="" id="">
                  <option value="">Time</option>
                  <option value="">02:30 AM</option>
                  <option value="">04:00 AM</option>
                  <option value="">09:00 AM</option>
                </select>
                <img src="./placement/svg/bottom_arrow.svg" alt="" />
              </div>
            </div>
            <div className="days_choosedate">
              <p>Lavel</p>
              <div className="select_content">
                <select name="" id="">
                  <option value="">Lavel</option>
                  <option value="">10 lv</option>
                  <option value="">20 lv</option>
                  <option value="">30 lv</option>
                </select>
                <img src="./placement/svg/bottom_arrow.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="create_match">
            <div className="couples-singles">
              <a href="">
                <button>Couples</button>
              </a>
              <a href="">
                <button>Singles</button>
              </a>
            </div>
            <a href="">
              <button>Create a game</button>
            </a>
          </div>
        </div>
        <div className="new_game">
          <p>Create a new game</p>
          <div className="create_new_game">
            <div className="date">
              <p>Date</p>
              <div className="date_select">
                <select name="" id="">
                  <option value="">Choose a date</option>
                  <option value="">10/03/2024</option>
                  <option value="">10/04/2024</option>
                  <option value="">10/05/2024</option>
                </select>
              </div>
            </div>
            <div className="date">
              <p>Hour</p>
              <div className="houre_select">
                <select name="" id="">
                  <option value="">20:00</option>
                  <option value="">20:00</option>
                  <option value="">20:00</option>
                  <option value="">20:00</option>
                </select>
              </div>
            </div>
            <div className="location_court">
              <div className="location">
                <input type="text" placeholder="location" />
              </div>
              <div className="court">
                <input type="text" placeholder="court" />
              </div>
            </div>
            <div className="couples_individuals">
              <div className="Couples">
                <input type="text" placeholder="Couples" />
              </div>
              <div className="Couples">
                <input type="text" placeholder="Individuals" />
              </div>
            </div>
            <div className="add_player">
              <div className="player_row">
                <div className="player_img">
                  <a href="">
                    <img src="./placement/svg/add_player.svg" alt="" />
                  </a>
                  <p>Player</p>
                </div>
                <div className="player_img">
                  <a href="">
                    <img src="./placement/svg/add_player.svg" alt="" />
                  </a>
                  <p>Player</p>
                </div>
                <div className="player_img">
                  <a href="">
                    <img src="./placement/svg/add_player.svg" alt="" />
                  </a>
                  <p>Player</p>
                </div>
                <div className="player_img">
                  <a href="">
                    <img src="./placement/svg/add_player.svg" alt="" />
                  </a>
                  <p>Player</p>
                </div>
              </div>
              <div className="create_game">
                <a href="">
                  <button>Create a game</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="placing_match">
          <p className="placing_">Placing games</p>
          {placementProfile.previousMatch.map((item, index) => (
            <div className="bottom_content">
              <p className="placing_day">{item.dayTime}</p>
              <div className="placing_dua_game">
                <div className="game_heading">
                  <p>{item.headTitle}</p>
                  <span>
                    <img src={item.logo} />
                    <p>{item.matchDate}</p>
                  </span>
                </div>
                <div className="game_body">
                  <div className="my_team">
                    <div className="me">
                      <span>
                        <img src={item.myImg} />
                        <img src={item.myCountry} />
                        <img src={item.close} />
                      </span>
                      <p>{item.myName}</p>
                      <p>{item.myRank}</p>
                    </div>
                    <div className="me">
                      <span>
                        <img src={item.teaMateImg} />
                        <img src={item.teaMateCountry} />
                        <img src={item.close} />
                      </span>
                      <p>{item.teaMateName}</p>
                      <p>{item.teaMateRank}</p>
                    </div>
                  </div>
                  <div className="border">
                    <svg
                      width="1"
                      height="107"
                      viewBox="0 0 1 107"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        width="107"
                        height="0.999995"
                        rx="0.499998"
                        transform="rotate(90 1 0)"
                        // fill="#EEEEEE"
                      />
                    </svg>

                    <svg
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 6.63277L14.9776 0.166092C15.0338 0.112851 15.1006 0.0707595 15.174 0.0422533C15.2474 0.0137471 15.326 -0.00060766 15.4053 1.96829e-05C15.4846 0.000647026 15.563 0.0162436 15.6359 0.0459077C15.7088 0.0755718 15.7748 0.118714 15.8301 0.172838C15.8854 0.226962 15.9289 0.290992 15.958 0.361224C15.9872 0.431456 16.0014 0.506495 15.9999 0.581998C15.9984 0.657502 15.9812 0.73197 15.9492 0.801095C15.9173 0.870219 15.8713 0.932627 15.8139 0.984707L8.41816 7.83823C8.30621 7.94196 8.15619 8 8 8C7.84381 8 7.69379 7.94196 7.58184 7.83823L0.186105 0.984706C0.128688 0.932626 0.082686 0.870219 0.0507597 0.801094C0.0188334 0.731969 0.00161767 0.657501 0.00010837 0.581998C-0.00140093 0.506494 0.0128259 0.431455 0.0419666 0.361223C0.0711072 0.290991 0.114582 0.226961 0.169876 0.172837C0.22517 0.118714 0.291186 0.0755711 0.364101 0.045907C0.437017 0.0162429 0.515386 0.000646371 0.594672 1.90355e-05C0.673958 -0.0006083 0.752588 0.0137464 0.826011 0.0422527C0.899435 0.0707589 0.966193 0.11285 1.02242 0.166092L8 6.63277Z"
                        // fill="#B0AAAA"
                      />
                    </svg>
                  </div>
                  <div className="add_player">
                    <div className="teamate">
                      <img src="./placement/svg/add_player.svg" alt="" />
                      <p>Penn N.</p>
                      <p>(panther)</p>
                    </div>
                    <div className="teamate">
                      <img src="./placement/svg/add_player.svg" alt="" />
                      <p>Penn N.</p>
                      <p>(panther)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Placement;
