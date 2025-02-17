"use client";
import { useState } from "react";
import "./upcominggames.scss";

const Upcoming = ({ standings, setStandings }) => {
  const [game, setGame] = useState("mine");
  const upGames = [
    {
      squadTitle: "Yarkon Park, Tel Aviv | Court #2",
      calenderImg: "../Stock/futuregamesmine/svg/calender.svg",
      matchDate: "02/24/2023",
      timeImg: "../Stock/enrollment/svg/time.svg",
      time: "14:00",
      commentImg: "../Stock/enrollment/svg/comment.svg",
      comment: "26 message",
      fPlayerImg: "./user-Image/Tafsir.png",
      fPlayerCountry: "./flags/ao.png",
      mandler: "Mandler T.",
      mandlerRank: "(PRO)",
      sPlayerImg: "./user-Image/Tafsir.png",
      sPlayerCountry: "./flags/ao.png",
      ozy: "Oz Y.",
      ozyRank: "(The Wiz)",
      vs: "VS",
      tPlayerImg: "./user-Image/Tafsir.png",
      tPlayerCountry: "./flags/ao.png",
      playerToffee: "../Stock/futuregamesmine/svg/toffee.svg",
      cImg: "../Stock/futuregamesmine/svg/red-c.svg",
      rPlayerImg: "./user-Image/Tafsir.png",
      rPlayerCountry: "./flags/ao.png",
      toffee: "../Stock/futuregamesmine/svg/tennis.svg",
      goren: "Goren S.",
      gorenRank: "(hard)",
      peenName: "Penn N.",
      peenRank: "(panther)",
      sTeamTitle: "Yarkon Park, Tel Aviv | Court #2",
      chatImg: "./user-Image/Tafsir.png",
      chatTitle: "From the chat:",
      chatText: "It's going to be a crazy game for bla bla...",
      playMatch: "2",
      matchScore: "1.62",
      sTeamMatchplay: "1",
      sTeamMatchScore: "1.82",
      soloDate: "02/24/2023",
      soloClock: "../Stock/enrollment/svg/time.svg",
      soloTime: "14:00",
      soloCommentImg: "../Stock/enrollment/svg/comment.svg",
      soloComment: "26 message",
      solofImg: "./user-Image/Tafsir.png",
      soloFCountry: "./flags/ao.png",
      soloFName: "Mandler T.",
      soloFRank: "(PRO)",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerToffee: "../Stock/futuregamesmine/svg/toffee.svg",
      soloChatImg: "./user-Image/Tafsir.png",
      ssoloPlayerImg: "../Stock/futuregamesmine/svg/red-c.svg",
      sgorenName: "Goren S.",
      sGorenRank: "(hard)",
      soloPlayingMatch: "2",
      soloMatchScore: "1.62",
      soloMatchOMatch: "1",
      soloMatchOScore: "1.82",
      soloChatTitle: "From the chat:",
      soloChatText: "It's going to be a crazy game for bla bla...",
    },
    {
      squadTitle: "Yarkon Park, Tel Aviv | Court #2",
      calenderImg: "../Stock/futuregamesmine/svg/calender.svg",
      matchDate: "02/24/2023",
      timeImg: "../Stock/enrollment/svg/time.svg",
      time: "14:00",
      commentImg: "../Stock/enrollment/svg/comment.svg",
      comment: "26 message",
      fPlayerImg: "./user-Image/Tafsir.png",
      fPlayerCountry: "./flags/ao.png",
      mandler: "Mandler T.",
      mandlerRank: "(PRO)",
      sPlayerImg: "./user-Image/Tafsir.png",
      sPlayerCountry: "./flags/ao.png",
      ozy: "Oz Y.",
      ozyRank: "(The Wiz)",
      vs: "VS",
      tPlayerImg: "./user-Image/Tafsir.png",
      tPlayerCountry: "./flags/ao.png",
      playerToffee: "../Stock/futuregamesmine/svg/toffee.svg",
      cImg: "../Stock/futuregamesmine/svg/red-c.svg",
      rPlayerImg: "./user-Image/Tafsir.png",
      rPlayerCountry: "./flags/ao.png",
      toffee: "../Stock/futuregamesmine/svg/tennis.svg",
      goren: "Goren S.",
      gorenRank: "(hard)",
      peenName: "Penn N.",
      peenRank: "(panther)",
      sTeamTitle: "Yarkon Park, Tel Aviv | Court #2",
      betSvg: "../Stock/futuregamesmine/svg/Bet.svg",
      chatImg: "./user-Image/Tafsir.png",
      chatTitle: "From the chat:",
      chatText: "It's going to be a crazy game for bla bla...",
      playMatch: "2",
      matchScore: "1.62",
      sTeamMatchplay: "1",
      sTeamMatchScore: "1.82",
      soloDate: "02/24/2023",
      soloClock: "../Stock/enrollment/svg/time.svg",
      soloTime: "14:00",
      soloCommentImg: "../Stock/enrollment/svg/comment.svg",
      soloComment: "26 message",
      solofImg: "./user-Image/Tafsir.png",
      soloFCountry: "./flags/ao.png",
      soloFName: "Mandler T.",
      soloFRank: "(PRO)",
      soloPlayerImg: "./user-Image/Tafsir.png",
      soloPlayerCountry: "./flags/ao.png",
      soloPlayerToffee: "../Stock/futuregamesmine/svg/toffee.svg",
      soloChatImg: "./user-Image/Tafsir.png",
      ssoloPlayerImg: "../Stock/futuregamesmine/svg/red-c.svg",
      sgorenName: "Goren S.",
      sGorenRank: "(hard)",
      soloPlayingMatch: "2",
      soloMatchScore: "1.62",
      soloMatchOMatch: "1",
      soloMatchOScore: "1.82",
      soloChatTitle: "From the chat:",
      soloChatText: "It's going to be a crazy game for bla bla...",
    },
  ];
  return (
    <main>
      <div className="enrollment">
        <div className="enrollment_head">
          <div className="head_body_bottom">
            <button
              onClick={() => setGame("mine")}
              className={`${game === "mine" ? "d_games" : "s_games"} `}
            >
              Mine
            </button>
            <button
              onClick={() => setGame("everything")}
              className={`${game === "everything" ? "d_games" : "s_games"} `}
            >
              Everything
            </button>
          </div>
        </div>
        {upGames.map((item) => (
          <>
            <div className="enrollment_container squad">
              <div className="container_heading">
                <div className="container_top_head">
                  <p>{item.squadTitle}</p>
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
                <div className="container_bottom_head">
                  <span className="_calender">
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
                    <p>{item.matchDate}</p>
                  </span>
                  <span className="_time">
                    <div className="time_icon">
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
                    <p>{item.time}</p>
                  </span>
                  <span className="_comment">
                    <div className="comment_icon">
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
                    <p>{item.comment}</p>
                  </span>
                </div>
              </div>
              <div className="container_body">
                <div className="container_head_body">
                  <div className="everything_main_body">
                    <div className="f_team">
                      <div className="_player">
                        <span>
                          <img src={item.fPlayerImg} />
                          <img src={item.fPlayerCountry} alt="" />
                        </span>
                        <p className="_name">{item.mandler}</p>
                        <p className="_ranking">{item.mandlerRank}</p>
                      </div>
                      <div className="_player">
                        <span>
                          <img src={item.sPlayerImg} />
                          <img src={item.sPlayerCountry} />
                        </span>
                        <p className="_name">{item.ozy}</p>
                        <p className="_ranking">{item.ozyRank}</p>
                      </div>
                    </div>
                    <div className="team_score">
                      <p>{item.vs}</p>
                    </div>
                    <div className="s_team">
                      <div className="_player">
                        <span className="_win">
                          <span>
                            <img src={item.tPlayerImg} />
                            <img src={item.tPlayerCountry} />
                            <img src={item.playerToffee} />
                          </span>
                        </span>
                        <p className="_name">
                          <img src={item.cImg} />
                          {item.goren}
                        </p>
                        <p className="_ranking">{item.gorenRank}</p>
                      </div>
                      <div className="_player">
                        <span className="_win">
                          <span>
                            <img src={item.rPlayerImg} />
                            <img src={item.rPlayerCountry} alt="" />
                            <img src={item.toffee} />
                          </span>
                        </span>
                        <p className="_name">{item.peenName}</p>
                        <p className="_ranking">{item.peenRank}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container_bottom_body">
                  <div className="f_team">
                    <p className="score">{item.playMatch}</p>
                    <p className="bet">{item.matchScore}</p>
                  </div>
                  <div className="bet_icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_264_5697)">
                        <path
                          d="M10.9785 7.03125H13.3487C13.737 7.03125 14.0518 6.71644 14.0518 6.32812C14.0518 5.93981 13.737 5.625 13.3487 5.625H11.6816V4.21875H13.1739C13.5622 4.21875 13.877 3.90394 13.877 3.51562C13.877 3.12731 13.5622 2.8125 13.1739 2.8125H11.6816V1.40625H13.3487C13.737 1.40625 14.0518 1.09144 14.0518 0.703125C14.0518 0.314812 13.737 0 13.3487 0H10.9785C10.5902 0 10.2754 0.314812 10.2754 0.703125V6.32812C10.2754 6.71644 10.5902 7.03125 10.9785 7.03125Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M5.25 7.03125H5.25309C5.26814 7.03116 6.76088 7.02455 7.16925 7.02455C8.39184 7.02455 9.38644 6.02991 9.38644 4.80731C9.38644 4.11098 9.06347 3.48895 8.5598 3.08217C8.76286 2.76956 8.88131 2.39719 8.88131 1.99744C8.88136 0.896062 7.98534 0 6.88392 0H5.25C4.86169 0 4.54688 0.314812 4.54688 0.703125V6.32812C4.54688 6.51516 4.62136 6.69445 4.75392 6.82641C4.88573 6.95766 5.06409 7.03125 5.25 7.03125ZM7.16925 5.6183C6.94627 5.6183 6.40477 5.62022 5.95313 5.62205V3.99769C6.06727 3.99722 7.16925 3.99637 7.16925 3.99637C7.61644 3.99637 7.98019 4.36017 7.98019 4.80731C7.98023 5.25455 7.61644 5.6183 7.16925 5.6183ZM6.88392 1.40625C7.20994 1.40625 7.47511 1.67147 7.47511 1.99744C7.47511 2.32341 7.20989 2.58862 6.88392 2.58862C6.76322 2.58862 5.95313 2.59013 5.95313 2.59013V1.40625H6.88392Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M15.6436 1.40625H16.4874V6.32812C16.4874 6.71644 16.8022 7.03125 17.1905 7.03125C17.5788 7.03125 17.8936 6.71644 17.8936 6.32812V1.40625H18.75C19.1383 1.40625 19.4531 1.09144 19.4531 0.703125C19.4531 0.314812 19.1383 0 18.75 0H15.6436C15.2552 0 14.9404 0.314812 14.9404 0.703125C14.9404 1.09144 15.2552 1.40625 15.6436 1.40625Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M23.2969 8.85938H15.7321C13.7165 8.85938 11.8852 9.96952 10.9529 11.7565L10.2878 13.0312H0.703125C0.314812 13.0312 0 13.3461 0 13.7344V23.2969C0 23.6852 0.314812 24 0.703125 24H17.5781C17.9664 24 18.2812 23.6852 18.2812 23.2969V21.4984C19.4181 21.3818 20.4072 20.6689 20.8818 19.6406H23.2969C23.6852 19.6406 24 19.3258 24 18.9375V9.5625C24 9.17419 23.6852 8.85938 23.2969 8.85938ZM12.8053 17.3753C13.2165 17.7865 13.7567 17.9921 14.2969 17.9921C14.8371 17.9921 15.3772 17.7865 15.7884 17.3753L16.875 16.2887V19.852C15.4995 20.1323 14.4136 21.2183 14.1332 22.5938H4.14802C3.86766 21.2183 2.78175 20.1323 1.40625 19.852V17.1792C2.78175 16.8989 3.86766 15.813 4.14802 14.4375H12.7622C11.9837 15.2631 11.9977 16.5676 12.8053 17.3753ZM2.69156 14.4375C2.47936 15.0358 2.00456 15.5106 1.40625 15.7228V14.4375H2.69156ZM1.40625 21.3084C2.00456 21.5206 2.47936 21.9954 2.69156 22.5938H1.40625V21.3084ZM15.5897 22.5938C15.8019 21.9954 16.2767 21.5206 16.875 21.3084V22.5938H15.5897ZM22.5938 18.2344H20.3906C20.0719 18.2344 19.7931 18.4487 19.7111 18.7568C19.5281 19.4448 18.963 19.9533 18.2812 20.079V14.8825L18.3425 14.8212C18.7226 15.0344 19.1527 15.1478 19.6002 15.1478C20.2885 15.1478 20.936 14.8794 21.4232 14.3922C21.6978 14.1177 21.6978 13.6725 21.4232 13.3979C21.1486 13.1233 20.7034 13.1233 20.4288 13.3979C20.2072 13.6195 19.9129 13.7415 19.6002 13.7415C19.2874 13.7415 18.9931 13.6195 18.7716 13.3979C18.6397 13.266 18.4609 13.1919 18.2744 13.1919C18.0879 13.1919 17.9091 13.266 17.7772 13.3979L14.7941 16.381C14.52 16.6552 14.0739 16.6552 13.7997 16.381C13.5255 16.1068 13.5255 15.6608 13.7997 15.3866L16.7828 12.4035C17.0574 12.1289 17.0574 11.6837 16.7828 11.4091C16.5083 11.1345 16.0631 11.1345 15.7885 11.4091L14.1662 13.0312H11.8739L12.1996 12.407C12.8888 11.0861 14.2423 10.2656 15.7321 10.2656H22.5938V18.2344Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M9.14062 15.9375C7.71905 15.9375 6.5625 17.094 6.5625 18.5156C6.5625 19.9372 7.71905 21.0938 9.14062 21.0938C10.5622 21.0938 11.7188 19.9372 11.7188 18.5156C11.7188 17.094 10.5622 15.9375 9.14062 15.9375ZM9.14062 19.6875C8.49445 19.6875 7.96875 19.1618 7.96875 18.5156C7.96875 17.8695 8.49445 17.3438 9.14062 17.3438C9.7868 17.3438 10.3125 17.8695 10.3125 18.5156C10.3125 19.1618 9.7868 19.6875 9.14062 19.6875Z"
                          fill="#FCFCFC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_264_5697">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="s_team">
                    <p className="score">{item.sTeamMatchplay}</p>
                    <p className="bet">{item.sTeamMatchScore}</p>
                  </div>
                </div>
              </div>
              <div className="container_footer">
                <div className="_item">
                  <div className="weather">
                    <img src={item.chatImg} />
                    <span>
                      <p className="_title">{item.chatTitle}</p>
                      <p className="_text">{item.chatText}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="enrollment_container">
              <div className="container_heading">
                <div className="container_top_head">
                  <p>{item.sTeamTitle}</p>
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
                <div className="container_bottom_head">
                  <span className="_calender">
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
                  <span className="_time">
                    <div className="time_icon">
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
                  <span className="_comment">
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
                    <p>{item.soloComment}</p>
                  </span>
                </div>
              </div>
              <div className="container_body">
                <div className="container_head_body">
                  <div className="everything_main_body solo">
                    <div className="f_team">
                      <div className="_player">
                        <span>
                          <img src={item.solofImg} />
                          <img src={item.soloFCountry} />
                        </span>
                        <p className="_name">{item.soloFName}</p>
                        <p className="_ranking">{item.soloFRank}</p>
                      </div>
                    </div>
                    <div className="team_score">
                      <p>{item.vs}</p>
                    </div>
                    <div className="s_team">
                      <div className="_player">
                        <span className="_win">
                          <span>
                            <img src={item.soloPlayerImg} />
                            <img src={item.soloPlayerCountry} alt="" />
                            <img src={item.soloPlayerToffee} alt="" />
                          </span>
                        </span>
                        <p className="_name">
                          <img src={item.ssoloPlayerImg} alt="" />
                          {item.sgorenName}
                        </p>
                        <p className="_ranking">{item.sGorenRank}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container_bottom_body">
                  <div className="f_team">
                    <p className="score">{item.soloPlayingMatch}</p>
                    <p className="bet">{item.soloMatchScore}</p>
                  </div>
                  <div className="bet_icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_264_5697)">
                        <path
                          d="M10.9785 7.03125H13.3487C13.737 7.03125 14.0518 6.71644 14.0518 6.32812C14.0518 5.93981 13.737 5.625 13.3487 5.625H11.6816V4.21875H13.1739C13.5622 4.21875 13.877 3.90394 13.877 3.51562C13.877 3.12731 13.5622 2.8125 13.1739 2.8125H11.6816V1.40625H13.3487C13.737 1.40625 14.0518 1.09144 14.0518 0.703125C14.0518 0.314812 13.737 0 13.3487 0H10.9785C10.5902 0 10.2754 0.314812 10.2754 0.703125V6.32812C10.2754 6.71644 10.5902 7.03125 10.9785 7.03125Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M5.25 7.03125H5.25309C5.26814 7.03116 6.76088 7.02455 7.16925 7.02455C8.39184 7.02455 9.38644 6.02991 9.38644 4.80731C9.38644 4.11098 9.06347 3.48895 8.5598 3.08217C8.76286 2.76956 8.88131 2.39719 8.88131 1.99744C8.88136 0.896062 7.98534 0 6.88392 0H5.25C4.86169 0 4.54688 0.314812 4.54688 0.703125V6.32812C4.54688 6.51516 4.62136 6.69445 4.75392 6.82641C4.88573 6.95766 5.06409 7.03125 5.25 7.03125ZM7.16925 5.6183C6.94627 5.6183 6.40477 5.62022 5.95313 5.62205V3.99769C6.06727 3.99722 7.16925 3.99637 7.16925 3.99637C7.61644 3.99637 7.98019 4.36017 7.98019 4.80731C7.98023 5.25455 7.61644 5.6183 7.16925 5.6183ZM6.88392 1.40625C7.20994 1.40625 7.47511 1.67147 7.47511 1.99744C7.47511 2.32341 7.20989 2.58862 6.88392 2.58862C6.76322 2.58862 5.95313 2.59013 5.95313 2.59013V1.40625H6.88392Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M15.6436 1.40625H16.4874V6.32812C16.4874 6.71644 16.8022 7.03125 17.1905 7.03125C17.5788 7.03125 17.8936 6.71644 17.8936 6.32812V1.40625H18.75C19.1383 1.40625 19.4531 1.09144 19.4531 0.703125C19.4531 0.314812 19.1383 0 18.75 0H15.6436C15.2552 0 14.9404 0.314812 14.9404 0.703125C14.9404 1.09144 15.2552 1.40625 15.6436 1.40625Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M23.2969 8.85938H15.7321C13.7165 8.85938 11.8852 9.96952 10.9529 11.7565L10.2878 13.0312H0.703125C0.314812 13.0312 0 13.3461 0 13.7344V23.2969C0 23.6852 0.314812 24 0.703125 24H17.5781C17.9664 24 18.2812 23.6852 18.2812 23.2969V21.4984C19.4181 21.3818 20.4072 20.6689 20.8818 19.6406H23.2969C23.6852 19.6406 24 19.3258 24 18.9375V9.5625C24 9.17419 23.6852 8.85938 23.2969 8.85938ZM12.8053 17.3753C13.2165 17.7865 13.7567 17.9921 14.2969 17.9921C14.8371 17.9921 15.3772 17.7865 15.7884 17.3753L16.875 16.2887V19.852C15.4995 20.1323 14.4136 21.2183 14.1332 22.5938H4.14802C3.86766 21.2183 2.78175 20.1323 1.40625 19.852V17.1792C2.78175 16.8989 3.86766 15.813 4.14802 14.4375H12.7622C11.9837 15.2631 11.9977 16.5676 12.8053 17.3753ZM2.69156 14.4375C2.47936 15.0358 2.00456 15.5106 1.40625 15.7228V14.4375H2.69156ZM1.40625 21.3084C2.00456 21.5206 2.47936 21.9954 2.69156 22.5938H1.40625V21.3084ZM15.5897 22.5938C15.8019 21.9954 16.2767 21.5206 16.875 21.3084V22.5938H15.5897ZM22.5938 18.2344H20.3906C20.0719 18.2344 19.7931 18.4487 19.7111 18.7568C19.5281 19.4448 18.963 19.9533 18.2812 20.079V14.8825L18.3425 14.8212C18.7226 15.0344 19.1527 15.1478 19.6002 15.1478C20.2885 15.1478 20.936 14.8794 21.4232 14.3922C21.6978 14.1177 21.6978 13.6725 21.4232 13.3979C21.1486 13.1233 20.7034 13.1233 20.4288 13.3979C20.2072 13.6195 19.9129 13.7415 19.6002 13.7415C19.2874 13.7415 18.9931 13.6195 18.7716 13.3979C18.6397 13.266 18.4609 13.1919 18.2744 13.1919C18.0879 13.1919 17.9091 13.266 17.7772 13.3979L14.7941 16.381C14.52 16.6552 14.0739 16.6552 13.7997 16.381C13.5255 16.1068 13.5255 15.6608 13.7997 15.3866L16.7828 12.4035C17.0574 12.1289 17.0574 11.6837 16.7828 11.4091C16.5083 11.1345 16.0631 11.1345 15.7885 11.4091L14.1662 13.0312H11.8739L12.1996 12.407C12.8888 11.0861 14.2423 10.2656 15.7321 10.2656H22.5938V18.2344Z"
                          fill="#FCFCFC"
                        />
                        <path
                          d="M9.14062 15.9375C7.71905 15.9375 6.5625 17.094 6.5625 18.5156C6.5625 19.9372 7.71905 21.0938 9.14062 21.0938C10.5622 21.0938 11.7188 19.9372 11.7188 18.5156C11.7188 17.094 10.5622 15.9375 9.14062 15.9375ZM9.14062 19.6875C8.49445 19.6875 7.96875 19.1618 7.96875 18.5156C7.96875 17.8695 8.49445 17.3438 9.14062 17.3438C9.7868 17.3438 10.3125 17.8695 10.3125 18.5156C10.3125 19.1618 9.7868 19.6875 9.14062 19.6875Z"
                          fill="#FCFCFC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_264_5697">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="s_team">
                    <p className="score">{item.soloMatchOMatch}</p>
                    <p className="bet">{item.soloMatchOScore}</p>
                  </div>
                </div>
              </div>
              <div className="container_footer">
                <div className="_item">
                  <div className="weather">
                    <img src={item.soloChatImg} alt="" />
                    <span>
                      <p className="_title">{item.soloChatTitle}</p>
                      <p className="_text">{item.soloChatText}</p>
                    </span>
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

export default Upcoming;
