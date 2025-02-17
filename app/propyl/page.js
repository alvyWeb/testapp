import "./propyl.scss";
import "./skilbar.css";
const Propyl = ({ standings, setStandings }) => {
  const propylConent = {
    profileBody: [
      {
        name: "Victories",
        counter: "33",
      },
      {
        name: "Losses",
        counter: "8",
      },
      {
        name: "Ties",
        counter: "6",
      },
      {
        name: "Annual success rate",
        counter: "38%",
      },
      {
        name: "Success percentage this month",
        counter: "38%",
      },
      {
        name: "Maximum positive rating",
        counter: "23",
      },
      {
        name: "Minimum negative rating",
        counter: "21",
      },
      {
        name: "Backhand",
        counter: "two hands",
      },
      {
        name: "Game type",
        counter: "Aggressive",
      },
      {
        name: "Annual balance",
        counter: "3",
      },
      {
        name: "Breakeven losses",
        counter: "3",
      },
      {
        name: "Weeks with more than 2 games",
        counter: "3",
      },
      {
        name: "Winning tournaments",
        counter: "3",
      },
      {
        name: "Participation in tournaments",
        counter: "3",
      },
      {
        name: "Amount of retirements",
        counter: "3",
      },
    ],
    awardSelect: [
      {
        awrrdItem1: "AWARDS ACHIEVED-1",
        awrrdItem2: "AWARDS ACHIEVED-2",
        awrrdItem3: "AWARDS ACHIEVED-3",
        awrrdItem4: "AWARDS ACHIEVED-4",
        awrrdItem5: "AWARDS ACHIEVED-5",
        awrrdItem6: "AWARDS ACHIEVED-6",
      },
    ],
    winsWith: [
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
    ],
    winAinst: [
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      ,
    ],
    losesAgainst: [
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
      {
        playerProfile: "./user-Image/Profile_state.jpg",
        playerCountry: "./flags/al.png",
        playerName: "Tomer Mandler",
        wins: "10 wins",
      },
    ],
    mostAgainst: [
      {
        headImg: "./user-Image/Profile_state.jpg",
        headCountry: "./flags/hm.png",
        playerName: "Tomer Mandler",
        match: "10 Games",
        win: "5 Victories",
        losses: "5 Losses",
      },
      {
        headImg: "./user-Image/Profile_state.jpg",
        headCountry: "./flags/hm.png",
        playerName: "Tomer Mandler",
        match: "10 Games",
        win: "5 Victories",
        losses: "5 Losses",
      },
    ],
    closeMatch: [
      {
        closeImg: "./user-Image/breaking-News.png",
        titile: "Yarkon Park, Tel Aviv | Court #2",
        date: "02/24/2023",
        time: "14:00",
      },
      {
        closeImg: "./user-Image/breaking-News.png",
        titile: "Yarkon Park, Tel Aviv | Court #2",
        date: "02/24/2023",
        time: "14:00",
      },
    ],
    lastMatch: [
      {
        squadHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
        share: "../Stock/futuregamesmine/svg/share.svg",
        squadDate: "02/24/2023",
        squadMatchTime: "14:00",
        squadComments: "26 messages",
        myImg: "./user-Image/Tafsir.png",
        myCountryImg: "./flags/ao.png",
        myName: "Mandler T.",
        myRank: "(PRO)",
        myTeaMateImg: "./user-Image/Tafsir.png",
        myTeaMateCountryImg: "./flags/ao.png",
        myTeaMateName: "Oz Y.",
        myTeaMateRank: "(The Wiz)",
        squadCurrentPoint: "1 - 3",
        squadPreviousPoint1: "1 - 0",
        squadPreviousPoint2: "1 - 2",
        squadPreviousPoint3: "4 - 0",
        opPlayerImg: "./user-Image/Tafsir.png",
        opPlayerCountryImg: "./flags/ao.png",
        toffeeIcon: "../Stock/futuregamesmine/svg/toffee.svg",
        cIcon: "../Stock/futuregamesmine/svg/red-c.svg",
        opPlayerName: "Goren S.",
        opPlayerRank: "(hard)",
        opTeaMateImg: "./user-Image/Tafsir.png",
        opTeaMateCountryImg: "./flags/ao.png",
        tennisIcon: "../Stock/futuregamesmine/svg/tennis.svg",
        opTeaMateName: "Penn N.",
        opTeaMateRank: "(panther)",
      },
    ],
  };
  return (
    <main>
      <div className="propyl_container">
        <div className="cover_container">
          <img
            src="./user-Image/Cover-Image.jpg"
            alt=""
            className="cover_img"
          />
          <div className="logo_go">
            <div className="cover_head">
              <img src="./propyl/svg/peen_logo.svg" alt="" />
              <img src="./propyl/svg/left_arrow.svg" alt="" />
            </div>
            <img src="./propyl/svg/add_cover.svg" alt="" />
          </div>
        </div>
        <div className="my_account">
          <div className="my_profile">
            <div className="main_profile">
              <div className="cash">
                <p>200</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_167_145)">
                    <path
                      d="M12.2141 10.1786C15.587 10.1786 18.3212 8.96334 18.3212 7.46429C18.3212 5.96523 15.587 4.75 12.2141 4.75C8.84119 4.75 6.10693 5.96523 6.10693 7.46429C6.10693 8.96334 8.84119 10.1786 12.2141 10.1786Z"
                      stroke="black"
                      stroke-width="0.95"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.10693 7.46436V15.6072C6.10693 17.1001 8.82122 18.3215 12.2141 18.3215C15.6069 18.3215 18.3212 17.1001 18.3212 15.6072V7.46436"
                      stroke="black"
                      stroke-width="0.95"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3211 11.5356C18.3211 13.0284 15.6068 14.2498 12.2139 14.2498C8.82108 14.2498 6.10679 13.0284 6.10679 11.5356M12.0782 2.03556C10.4924 1.05689 8.64646 0.583572 6.78537 0.678415C3.40608 0.678415 0.678223 1.89984 0.678223 3.3927C0.678223 4.19341 1.46537 4.9127 2.71394 5.42841"
                      stroke="black"
                      stroke-width="0.95"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.71394 13.5711C1.46537 13.0554 0.678223 12.3361 0.678223 11.5354V3.39258"
                      stroke="black"
                      stroke-width="0.95"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.71394 9.50007C1.46537 8.98436 0.678223 8.26507 0.678223 7.46436"
                      stroke="black"
                      stroke-width="0.95"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_167_145">
                      <rect width="19" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="profile_img">
                <img src="./user-Image/Profile.jpg" className="profile_img" />
                <div className="add_profile">
                  <img src="./svg/Add-Profile.svg" />
                </div>
                <div className="add_toffe">
                  <img src="./svg/Toffee.svg" />
                </div>
                <div className="change_country">
                  <img src="./flags/ai.png" />
                </div>
              </div>
            </div>
            <div className="lavel_name">
              <p>Noam Penn (Panther)</p>
              {/* SKILLBAR */}{" "}
              <div class="container">
                <div className="_flex">
                  <p>Level 1</p>
                  <p>26/100</p>
                </div>
                <div class="bar front advanced"></div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="rating_container">
            <div className="player_rating">
              <p>ATPenn rating</p>
              <p>5</p>
            </div>
            <div className="player_ability">
              <p>strong hand</p>
              <p>right</p>
            </div>
            <div className="height">
              <p>height</p>
              <p>1.75</p>
            </div>
            <div className="player_age">
              <p>age</p>
              <p>33</p>
            </div>
          </div>
          <div className="weekly_achievements_content">
            <p>Weekly achievements</p>
            <div className="body ">
              <div className="victory _gap">
                <p>Strong player victory</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8154 5.1202C11.0442 5.34908 11.0442 5.7201 10.8154 5.94887L6.88454 9.8798C6.65565 10.1086 6.28475 10.1086 6.05587 9.8798L4.18465 8.00846C3.95576 7.77969 3.95576 7.40868 4.18465 7.17991C4.41341 6.95103 4.78443 6.95103 5.0132 7.17991L6.47015 8.63686L9.98669 5.1202C10.2156 4.89143 10.5866 4.89143 10.8154 5.1202ZM15 7.5C15 11.6456 11.6451 15 7.5 15C3.35438 15 0 11.6451 0 7.5C0 3.35438 3.35495 0 7.5 0C11.6456 0 15 3.35495 15 7.5ZM13.8281 7.5C13.8281 4.00211 10.9974 1.17188 7.5 1.17188C4.00211 1.17188 1.17188 4.00257 1.17188 7.5C1.17188 10.9979 4.00257 13.8281 7.5 13.8281C10.9979 13.8281 13.8281 10.9974 13.8281 7.5Z"
                    fill="#60BF64"
                  />
                </svg>
              </div>
              <div className="victory">
                <p>Bets</p>
                <span className="increase">
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.98624 13.8164L0.211352 10.5403C-0.0713859 10.2949 -0.0703337 9.89798 0.21382 9.65372C0.497937 9.40949 0.957481 9.41043 1.24026 9.65582L3.77419 11.855L3.77419 0.626878C3.77419 0.280654 4.09914 3.00733e-07 4.5 3.18255e-07C4.90086 3.35778e-07 5.22581 0.280654 5.22581 0.626878L5.22581 11.855L7.75974 9.65585C8.04252 9.41046 8.50206 9.40952 8.78618 9.65375C9.07037 9.89802 9.07135 10.295 8.78865 10.5403L5.01445 13.8159C4.73073 14.0614 4.26901 14.0612 3.98624 13.8164Z"
                      fill="#E44C4C"
                    />
                  </svg>

                  <p>38% less</p>
                </span>
              </div>
              <div className="victory">
                <p>victories</p>
                <span className="decrease">
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.98624 0.18359L0.211352 3.45972C-0.0713859 3.70511 -0.0703337 4.10202 0.21382 4.34628C0.497937 4.59051 0.957481 4.58957 1.24026 4.34418L3.77419 2.14497L3.77419 13.3731C3.77419 13.7193 4.09914 14 4.5 14C4.90086 14 5.22581 13.7193 5.22581 13.3731L5.22581 2.145L7.75974 4.34415C8.04252 4.58954 8.50206 4.59048 8.78618 4.34625C9.07037 4.10198 9.07135 3.70504 8.78865 3.45968L5.01445 0.184122C4.73073 -0.0613949 4.26901 -0.0611755 3.98624 0.18359Z"
                      fill="#60BF64"
                    />
                  </svg>

                  <p>38% more</p>
                </span>
              </div>
            </div>
          </div>
          <div className="profiles_bodys">
            <div className="body_content">
              {propylConent.profileBody.map((item) => (
                <div className="content">
                  <p>{item.name}</p>
                  <p>{item.counter}</p>
                </div>
              ))}
            </div>
          </div>
          {propylConent.awardSelect.map((item) => (
            <div className="select_content">
              <select name="" id="">
                <option value="">{item.awrrdItem1}</option>
                <option value="">{item.awrrdItem2}</option>
                <option value="">{item.awrrdItem3}</option>
                <option value="">{item.awrrdItem4}</option>
                <option value="">{item.awrrdItem5}</option>
                <option value="">{item.awrrdItem6}</option>
              </select>
              <svg
                width="24"
                height="13"
                viewBox="0 0 24 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6734 10.1618L21.8549 0.254463C21.937 0.172894 22.0344 0.108408 22.1415 0.0647346C22.2486 0.0210613 22.3634 -0.000930969 22.4791 3.01573e-05C22.5948 0.000991283 22.7091 0.0248861 22.8155 0.0703333C22.9219 0.11578 23.0182 0.181877 23.0989 0.264798C23.1796 0.347719 23.243 0.445817 23.2856 0.553416C23.3281 0.661016 23.3488 0.77598 23.3466 0.891656C23.3444 1.00733 23.3193 1.12142 23.2727 1.22732C23.2261 1.33323 23.159 1.42884 23.0752 1.50863L12.2836 12.0086C12.1202 12.1676 11.9013 12.2565 11.6734 12.2565C11.4455 12.2565 11.2266 12.1676 11.0632 12.0086L0.271573 1.50863C0.187791 1.42884 0.120666 1.33323 0.0740803 1.22732C0.0274942 1.12142 0.00237347 1.00733 0.000171146 0.891655C-0.00203118 0.775979 0.0187283 0.661015 0.0612495 0.553415C0.103771 0.445816 0.167208 0.347718 0.247892 0.264797C0.328575 0.181876 0.424904 0.115779 0.5313 0.0703323C0.637697 0.0248852 0.752051 0.000990329 0.867743 2.92126e-05C0.983436 -0.000931904 1.09817 0.0210604 1.20531 0.0647337C1.31244 0.108407 1.40986 0.172893 1.49191 0.254462L11.6734 10.1618Z"
                  fill="#210C0C"
                />
              </svg>
            </div>
          ))}

          {/*FIRST_MATCH*/}
          <div className="opponent_team">
            <p>Usually wins with</p>
            <div className="items">
              {propylConent.winsWith.map((item) => (
                <div className="opponent_body">
                  <img src={item.playerProfile} alt="" />
                  <img src={item.playerCountry} alt="" />
                  <p>{item.playerName}</p>
                  <p>{item.wins}</p>
                </div>
              ))}
            </div>
          </div>
          {/*SECOND_MATCH*/}
          <div className="opponent_team">
            <p>usually loses against</p>
            <div className="items">
              {propylConent.winsWith.map((item) => (
                <div className="opponent_body">
                  <img src={item.playerProfile} alt="" />
                  <img src={item.playerCountry} alt="" />
                  <p>{item.playerName}</p>
                  <p>{item.wins}</p>
                </div>
              ))}
            </div>
          </div>
          {/*THIRD_MATCH*/}
          <div className="opponent_team">
            <p>Played the most against</p>
            <div className="items">
              {propylConent.winsWith.map((item) => (
                <div className="opponent_body">
                  <img src={item.playerProfile} alt="" />
                  <img src={item.playerCountry} alt="" />
                  <p>{item.playerName}</p>
                  <p>{item.wins}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="most_against">
            <p>Played the most against</p>
            <div className="main_body">
              {propylConent.mostAgainst.map((item) => (
                <div className="body_content">
                  <div className="against_img">
                    <img src={item.headImg} />
                    <img src={item.headCountry} />
                  </div>
                  <div className="item_text">
                    <p>{item.playerName}</p>
                    <p>{item.match}</p>
                    <p>{item.win}</p>
                    <p>{item.losses}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="close_container">
            <p>Close Games</p>
            <div className="main_close">
              {propylConent.closeMatch.map((item) => (
                <div className="close_game">
                  <img src={item.closeImg} />
                  <div className="close_content">
                    <p>{item.titile}</p>
                    <div className="content_row">
                      <span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1876 1.4H11.1875H9.4125V0.5625C9.4125 0.453098 9.36904 0.348177 9.29168 0.270819C9.21432 0.19346 9.1094 0.15 9 0.15C8.8906 0.15 8.78568 0.19346 8.70832 0.270819C8.63096 0.348177 8.5875 0.453098 8.5875 0.5625V1.4H4.4125V0.5625C4.4125 0.453098 4.36904 0.348177 4.29168 0.270819C4.21432 0.19346 4.1094 0.15 4 0.15C3.8906 0.15 3.78568 0.19346 3.70832 0.270819C3.63096 0.348177 3.5875 0.453098 3.5875 0.5625V1.4H1.8125L1.81238 1.4C1.37165 1.40053 0.949125 1.57584 0.637483 1.88748C0.325841 2.19913 0.150528 2.62165 0.15 3.06238V3.0625L0.15 11.1875L0.15 11.1876C0.150528 11.6283 0.325841 12.0509 0.637483 12.3625C0.949125 12.6742 1.37165 12.8495 1.81238 12.85H1.8125H11.1875H11.1876C11.6284 12.8496 12.051 12.6744 12.3627 12.3627C12.6744 12.051 12.8496 11.6284 12.85 11.1876V11.1875V3.0625V3.06242C12.8496 2.62163 12.6744 2.19899 12.3627 1.8873C12.051 1.57561 11.6284 1.40035 11.1876 1.4ZM12.025 11.1875C12.025 11.4096 11.9368 11.6226 11.7797 11.7797C11.6226 11.9368 11.4096 12.025 11.1875 12.025H1.8125C1.59038 12.025 1.37736 11.9368 1.2203 11.7797C1.06324 11.6226 0.975 11.4096 0.975 11.1875V5.975H12.025V11.1875ZM12.025 5.15H0.975V3.0625C0.975 2.60014 1.34907 2.225 1.8125 2.225H3.5875V3.0625C3.5875 3.1719 3.63096 3.27682 3.70832 3.35418C3.78568 3.43154 3.8906 3.475 4 3.475C4.1094 3.475 4.21432 3.43154 4.29168 3.35418C4.36904 3.27682 4.4125 3.1719 4.4125 3.0625V2.225H8.5875V3.0625C8.5875 3.1719 8.63096 3.27682 8.70832 3.35418C8.78568 3.43154 8.8906 3.475 9 3.475C9.1094 3.475 9.21432 3.43154 9.29168 3.35418C9.36904 3.27682 9.4125 3.1719 9.4125 3.0625V2.225H11.1875C11.4096 2.225 11.6226 2.31324 11.7797 2.4703C11.9368 2.62736 12.025 2.84038 12.025 3.0625V5.15Z"
                            fill="#145E94"
                            stroke="#145E94"
                            stroke-width="0.2"
                          />
                        </svg>
                        <p>{item.date}</p>
                      </span>
                      <span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.125 12.25C2.7475 12.25 0 9.5025 0 6.125C0 2.7475 2.7475 0 6.125 0C9.5025 0 12.25 2.7475 12.25 6.125C12.25 9.5025 9.5025 12.25 6.125 12.25ZM6.125 0.875C3.22875 0.875 0.875 3.22875 0.875 6.125C0.875 9.02125 3.22875 11.375 6.125 11.375C9.02125 11.375 11.375 9.02125 11.375 6.125C11.375 3.22875 9.02125 0.875 6.125 0.875Z"
                            fill="#145E94"
                          />
                          <path
                            d="M7.875 8.3125C7.79625 8.3125 7.7175 8.295 7.6475 8.25125L5.46 6.93875C5.39521 6.89981 5.34173 6.8446 5.30489 6.77859C5.26805 6.71259 5.24913 6.63809 5.25 6.5625V3.0625C5.25 2.8175 5.4425 2.625 5.6875 2.625C5.9325 2.625 6.125 2.8175 6.125 3.0625V6.3175L8.1025 7.49875C8.18395 7.54867 8.24691 7.62379 8.28182 7.71271C8.31674 7.80163 8.32171 7.89952 8.29599 7.99152C8.27027 8.08353 8.21525 8.16464 8.13928 8.22256C8.06331 8.28048 7.97053 8.31206 7.875 8.3125Z"
                            fill="#145E94"
                          />
                        </svg>
                        <p>{item.time}</p>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="last_match_container">
            <p>Last games</p>
            {propylConent.lastMatch.map((item) => (
              <div className="everything_body">
                <div className="everything_head_body">
                  <div className="head_body">
                    <p>{item.squadHeadTitle}</p>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1172 12.0177C13.0444 12.0177 12.0912 12.539 11.4973 13.3415L6.38357 10.7282C6.46936 10.4367 6.51562 10.1285 6.51562 9.80963C6.51562 9.37776 6.43096 8.96535 6.27766 8.58785L11.6371 5.36775C12.2351 6.06963 13.125 6.51562 14.1172 6.51562C15.9135 6.51562 17.375 5.05417 17.375 3.25781C17.375 1.46145 15.9135 0 14.1172 0C12.3208 0 10.8594 1.46145 10.8594 3.25781C10.8594 3.673 10.9376 4.0702 11.0798 4.43569L5.70696 7.66382C5.10941 6.98265 4.23302 6.55182 3.25781 6.55182C1.46145 6.55182 0 8.01328 0 9.80963C0 11.606 1.46145 13.0674 3.25781 13.0674C4.34817 13.0674 5.31501 12.529 5.90667 11.704L11.0055 14.3097C10.9106 14.615 10.8594 14.9394 10.8594 15.2755C10.8594 17.0719 12.3208 18.5333 14.1172 18.5333C15.9135 18.5333 17.375 17.0719 17.375 15.2755C17.375 13.4792 15.9135 12.0177 14.1172 12.0177ZM14.1172 1.08594C15.3148 1.08594 16.2891 2.06024 16.2891 3.25781C16.2891 4.45538 15.3148 5.42969 14.1172 5.42969C12.9196 5.42969 11.9453 4.45538 11.9453 3.25781C11.9453 2.06024 12.9196 1.08594 14.1172 1.08594ZM3.25781 11.9815C2.06024 11.9815 1.08594 11.0072 1.08594 9.80963C1.08594 8.61206 2.06024 7.63776 3.25781 7.63776C4.45538 7.63776 5.42969 8.61206 5.42969 9.80963C5.42969 11.0072 4.45538 11.9815 3.25781 11.9815ZM14.1172 17.4474C12.9196 17.4474 11.9453 16.4731 11.9453 15.2755C11.9453 14.0779 12.9196 13.1036 14.1172 13.1036C15.3148 13.1036 16.2891 14.0779 16.2891 15.2755C16.2891 16.4731 15.3148 17.4474 14.1172 17.4474Z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                  <div className="bttom_body">
                    <span>
                      <div className="calender_icon">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1876 2.4H12.1875H10.4125V1.5625C10.4125 1.4531 10.369 1.34818 10.2917 1.27082C10.2143 1.19346 10.1094 1.15 10 1.15C9.8906 1.15 9.78568 1.19346 9.70832 1.27082C9.63096 1.34818 9.5875 1.4531 9.5875 1.5625V2.4H5.4125V1.5625C5.4125 1.4531 5.36904 1.34818 5.29168 1.27082C5.21432 1.19346 5.1094 1.15 5 1.15C4.8906 1.15 4.78568 1.19346 4.70832 1.27082C4.63096 1.34818 4.5875 1.4531 4.5875 1.5625V2.4H2.8125L2.81238 2.4C2.37165 2.40053 1.94913 2.57584 1.63748 2.88748C1.32584 3.19913 1.15053 3.62165 1.15 4.06238V4.0625L1.15 12.1875L1.15 12.1876C1.15053 12.6283 1.32584 13.0509 1.63748 13.3625C1.94913 13.6742 2.37165 13.8495 2.81238 13.85H2.8125H12.1875H12.1876C12.6284 13.8496 13.051 13.6744 13.3627 13.3627C13.6744 13.051 13.8496 12.6284 13.85 12.1876V12.1875V4.0625V4.06242C13.8496 3.62163 13.6744 3.19899 13.3627 2.8873C13.051 2.57561 12.6284 2.40035 12.1876 2.4ZM13.025 12.1875C13.025 12.4096 12.9368 12.6226 12.7797 12.7797C12.6226 12.9368 12.4096 13.025 12.1875 13.025H2.8125C2.59038 13.025 2.37736 12.9368 2.2203 12.7797C2.06324 12.6226 1.975 12.4096 1.975 12.1875V6.975H13.025V12.1875ZM13.025 6.15H1.975V4.0625C1.975 3.60014 2.34907 3.225 2.8125 3.225H4.5875V4.0625C4.5875 4.1719 4.63096 4.27682 4.70832 4.35418C4.78568 4.43154 4.8906 4.475 5 4.475C5.1094 4.475 5.21432 4.43154 5.29168 4.35418C5.36904 4.27682 5.4125 4.1719 5.4125 4.0625V3.225H9.5875V4.0625C9.5875 4.1719 9.63096 4.27682 9.70832 4.35418C9.78568 4.43154 9.8906 4.475 10 4.475C10.1094 4.475 10.2143 4.43154 10.2917 4.35418C10.369 4.27682 10.4125 4.1719 10.4125 4.0625V3.225H12.1875C12.4096 3.225 12.6226 3.31324 12.7797 3.4703C12.9368 3.62736 13.025 3.84038 13.025 4.0625V6.15Z"
                            fill="#145E94"
                            stroke="#145E94"
                            stroke-width="0.2"
                          />
                        </svg>
                      </div>
                      <p>{item.squadDate}</p>
                    </span>
                    <span>
                      <div className="clock_time">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_267_261)">
                            <path
                              d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z"
                              fill="#145E94"
                            />
                            <path
                              d="M8.75003 9.1875C8.67128 9.1875 8.59253 9.17 8.52253 9.12625L6.33503 7.81375C6.27024 7.77481 6.21676 7.7196 6.17992 7.65359C6.14308 7.58759 6.12416 7.51309 6.12503 7.4375V3.9375C6.12503 3.6925 6.31753 3.5 6.56253 3.5C6.80753 3.5 7.00003 3.6925 7.00003 3.9375V7.1925L8.97753 8.37375C9.05898 8.42367 9.12194 8.49879 9.15685 8.58771C9.19177 8.67663 9.19674 8.77452 9.17102 8.86652C9.1453 8.95853 9.09028 9.03964 9.01431 9.09756C8.93834 9.15548 8.84556 9.18706 8.75003 9.1875Z"
                              fill="#145E94"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_267_261">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p>{item.squadMatchTime}</p>
                    </span>
                    <span>
                      <div className="comments_icon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z"
                            stroke="#145E94"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p>{item.squadComments}</p>
                    </span>
                  </div>
                </div>
                <div className="everything_main_body">
                  <div className="f_team">
                    <div className="_player">
                      <span>
                        <img src={item.myImg} />
                        <img src={item.myCountryImg} />
                      </span>
                      <p className="_name">{item.myName}</p>
                      <p className="_ranking">{item.myRank}</p>
                    </div>
                    <div className="_player">
                      <span>
                        <img src={item.myTeaMateImg} />
                        <img src={item.myTeaMateCountryImg} />
                      </span>
                      <p className="_name">{item.myTeaMateName}</p>
                      <p className="_ranking">{item.myTeaMateRank}</p>
                    </div>
                  </div>
                  <div className="team_score">
                    <p className="active">{item.squadCurrentPoint}</p>
                    <p className="point">{item.squadPreviousPoint1}</p>
                    <p className="point">{item.squadPreviousPoint2}</p>
                    <p className="point">{item.squadPreviousPoint3}</p>
                  </div>
                  <div className="s_team">
                    <div className="_player">
                      <span className="_win">
                        <span>
                          <img src={item.opPlayerImg} />
                          <img src={item.opPlayerCountryImg} />
                          <img src={item.toffeeIcon} />
                        </span>
                      </span>
                      <p className="_name">
                        <img src={item.cIcon} />
                        {item.opPlayerName}
                      </p>
                      <p className="_ranking">{item.opPlayerRank}</p>
                    </div>
                    <div className="_player">
                      <span className="_win">
                        <span>
                          <img src={item.opTeaMateImg} />
                          <img src={item.opTeaMateCountryImg} />
                          <img src={item.tennisIcon} />
                        </span>
                      </span>
                      <p className="_name">{item.opTeaMateName}</p>
                      <p className="_ranking">{item.opTeaMateRank}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Propyl;
