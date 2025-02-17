"use client";
import { useState } from "react";
import "./completedgames.scss";

const Complete = ({ standings, setStandings }) => {
  const [game, setGame] = useState("mine");
  const everyThing = [
    {
      /*SQUAD*/
      squadHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
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
      /*SOLO*/
      soloHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
      soloDate: "02/24/2023",
      soloTime: "14:00",
      soloComments: "26 messages",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerName: "Mandler T.",
      soloPlayerRank: "(PRO)",
      soloCurrentScore: "1 - 3",
      soloPreviousScore1: "1 - 0",
      soloPreviousScore2: "1 - 2",
      soloPreviousScore3: "4 - 3",
      soloOpPlayerImg: "./user-Image/Tafsir.png",
      soloOpPlayerCountryImg: "./flags/ao.png",
      soloOpPlayerImg2: "Goren S.",
      soloOpPlayer2Rank: "(hard)",
    },
    {
      /*SQUAD*/
      squadHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
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
      /*SOLO*/
      soloHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
      soloDate: "02/24/2023",
      soloTime: "14:00",
      soloComments: "26 messages",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerName: "Mandler T.",
      soloPlayerRank: "(PRO)",
      soloCurrentScore: "1 - 3",
      soloPreviousScore1: "1 - 0",
      soloPreviousScore2: "1 - 2",
      soloPreviousScore3: "4 - 3",
      soloOpPlayerImg: "./user-Image/Tafsir.png",
      soloOpPlayerCountryImg: "./flags/ao.png",
      soloOpPlayerImg2: "Goren S.",
      soloOpPlayer2Rank: "(hard)",
    },
    {
      /*SQUAD*/
      squadHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
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
      /*SOLO*/
      soloHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
      soloDate: "02/24/2023",
      soloTime: "14:00",
      soloComments: "26 messages",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerName: "Mandler T.",
      soloPlayerRank: "(PRO)",
      soloCurrentScore: "1 - 3",
      soloPreviousScore1: "1 - 0",
      soloPreviousScore2: "1 - 2",
      soloPreviousScore3: "4 - 3",
      soloOpPlayerImg: "./user-Image/Tafsir.png",
      soloOpPlayerCountryImg: "./flags/ao.png",
      soloOpPlayerImg2: "Goren S.",
      soloOpPlayer2Rank: "(hard)",
    },
    {
      /*SQUAD*/
      squadHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
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
      /*SOLO*/
      soloHeadTitle: "Yarkon Park, Tel Aviv | Court #2",
      soloDate: "02/24/2023",
      soloTime: "14:00",
      soloComments: "26 messages",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerName: "Mandler T.",
      soloPlayerRank: "(PRO)",
      soloCurrentScore: "1 - 3",
      soloPreviousScore1: "1 - 0",
      soloPreviousScore2: "1 - 2",
      soloPreviousScore3: "4 - 3",
      soloOpPlayerImg: "./user-Image/Tafsir.png",
      soloOpPlayerCountryImg: "./flags/ao.png",
      soloOpPlayerImg2: "Goren S.",
      soloOpPlayer2Rank: "(hard)",
    },
  ];
  return (
    <main>
      <div className="everything_conatiner">
        <div className="head_content">
          <button
            onClick={() => setGame("mine")}
            className={`${game === "mine" ? "_everything" : "_main"} `}
          >
            Mine
          </button>
          <button
            onClick={() => setGame("everything")}
            className={`${game === "everything" ? "_everything" : "_main"} `}
          >
            Everything
          </button>
        </div>
        {everyThing.map((item) => (
          <>
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
            <div div className="everything_body">
              <div className="everything_head_body">
                <div className="head_body">
                  <p>{item.soloHeadTitle}</p>
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
                    <p>{item.soloDate}</p>
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
                    <p>{item.soloTime}</p>
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
                    <p>{item.soloComments}</p>
                  </span>
                </div>
              </div>
              <div className="everything_main_body space_around">
                <div className="f_team">
                  <div className="_player">
                    <span>
                      <img src={item.soloPlayerImg} />
                      <img src={item.soloPlayerCountry} />
                    </span>
                    <p className="_name">{item.soloPlayerName}</p>
                    <p className="_ranking">{item.soloPlayerRank}</p>
                  </div>
                </div>
                <div className="team_score">
                  <p className="active">{item.soloCurrentScore}</p>
                  <p className="point">{item.soloPreviousScore1}</p>
                  <p className="point">{item.soloPreviousScore2}</p>
                  <p className="point">{item.soloPreviousScore3}</p>
                </div>
                <div className="s_team">
                  <div className="_player">
                    <span className="_win">
                      <span>
                        <img src={item.soloOpPlayerImg} />
                        <img src={item.soloOpPlayerCountryImg} />
                        <img src={item.toffeeIcon} />
                      </span>
                    </span>
                    <p className="_name">
                      <img src={item.cIcon} />
                      {item.soloOpPlayerImg2}
                    </p>
                    <p className="_ranking">{item.soloOpPlayer2Rank}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
};

export default Complete;
