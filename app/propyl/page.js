"use client"; 

import "./propyl.scss";
import "./skilbar.css";
import { useState } from "react";

const Propyl = ({ standings, setStandings }) => {

  const [isAwardOpen, setIsAwardOpen] = useState(false);
  const [isStaticsOpen, setIsStaticsOpen] = useState(false);

  const propylConent = {
    profileBody: [
      {
        name: "ניצחונות",
        counter: "33",
      },
      {
        name: "הפסדים",
        counter: "8",
      },
      {
        name: "תיקואים",
        counter: "6",
      },
      {
        name: "אחוז הצלחה שנתי",
        counter: "38%",
      },
      {
        name: "אחוז הצלחה החודש",
        counter: "38%",
      },
      {
        name: "דירוג חיובי מקסימום",
        counter: "23",
      },
      {
        name: "דירוג שלילי מינימום",
        counter: "21",
      },
      {
        name: "חבטת גב",
        counter: "שתי ידיים",
      },
      {
        name: "סגנון משחק",
        counter: "אגרסיבי",
      },
      {
        name: "מאזן שנתי",
        counter: "38/5",
      },
      {
        name: "ניצחונות בשובר שוויון",
        counter: "3",
      },
      {
        name: "הפסדים בשובר שוויון",
        counter: "3",
      },
      {
        name: "שבועות עם מעל 2 משחקים",
        counter: "3",
      },
      {
        name: "זכיות בטורנירים",
        counter: "3",
      },
      {
        name: "השתתפות בטורנירים",
        counter: "3",
      },
      {
        name: "כמות פרישות",
        counter: "3",
      },
    ],
    awardSelect: [
      {
        awardicon: "./propyl/png/award1.png",
        name: 'זכייה במקום - 1 בטורניר.',
      },
      {
        awardicon: "./propyl/png/award2.png",
        name: 'זכייה במקום - 2 בטורניר.',
      },
      {
        awardicon: "./propyl/png/award3.png",
        name: 'זכייה במעל 3 משחקים ברצף.',
      },
      {
        awardicon: "./propyl/png/award4.png",
        name: 'השתתפות במעל 4 משחקים השבוע.',
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
          <img src="./propyl/png/cover_img.png" alt="" className="cover_img" />
          <div className="logo_go">
            <div className="cover_head">
              <img src="./propyl/svg/left_arrow.svg" alt="" />
              <img src="./propyl/svg/peen_logo.svg" alt="" />
            </div>
            <img src="./propyl/svg/add_cover.svg" alt="" />
          </div>
        </div>
        <div className="my_account">
          <div className="my_profile">
            <div className="main_profile">
              <div className="cash">
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
                <p>200</p>
              </div>
              <div className="profile_img">
                <img src="./propyl/png/profile_img.png" className="profile_img_m" />
                <div className="add_profile">
                  <img src="./svg/Add-Profile.svg" />
                </div>
                <div className="add_toffe">
                  <img src="./svg/Toffee.svg" />
                </div>
                <div className="change_country">
                  <img src="./flags/br.png" />
                </div>
              </div>
            </div>
            <div className="lavel_name">
              <p>נועם פן (פנתר)</p>
              {/* SKILLBAR */}{" "}
              <div class="container">
                <div className="_flex">
                  <p>רמה 1</p>
                  <p>26/100</p>
                </div>
                <div class="bar front advanced"></div>
              </div>
              {/* END */}
            </div>
          </div>
          <div className="rating_container">
            <div className="player_rating">
              <h5>דירוג ATPenn</h5>
              <p>5</p>
            </div>
            <div className="player_ability">
              <h5>יד חזקה</h5>
              <p>ימין</p>
            </div>
            <div className="height">
              <h5>גובה</h5>
              <p>1.75</p>
            </div>
            <div className="player_age">
              <h5>גיל</h5>
              <p>33</p>
            </div>
          </div>

          <div className="weekly_achievements_content">
            <h4>הישגים שבועיים</h4>
            <div className="body ">
              <div className="victory _gap">
                <p>ניצחון שחקן חזק</p>
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
                <p>הימורים</p>
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

                  <p>38% פחות</p>
                </span>
              </div>
              <div className="victory">
                <p>ניצחונות</p>
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

                  <p>38% יותר</p>
                </span>
              </div>
            </div>
          </div>

          <div className="profiles_bodys">
            <div className="body_content">
              {propylConent.profileBody.map((item) => (
                <div className="content">
                  <p className="itemName">{item.name}</p>
                  <p className="itemvalue">{item.counter}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="award_blocks">
            <div className={`headpart ${isAwardOpen ? "expanded" : ""}`} onClick={() => setIsOpen(!isAwardOpen)}>
              <p>פרסים שהושגו</p>
              <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6733 10.1618L21.8548 0.254463C21.9368 0.172894 22.0342 0.108408 22.1414 0.0647346C22.2485 0.0210613 22.3633 -0.000930969 22.4789 3.01573e-05C22.5946 0.000991284 22.709 0.0248861 22.8154 0.0703333C22.9218 0.11578 23.0181 0.181877 23.0988 0.264798C23.1795 0.347719 23.2429 0.445817 23.2854 0.553416C23.328 0.661016 23.3487 0.77598 23.3465 0.891656C23.3443 1.00733 23.3192 1.12142 23.2726 1.22732C23.226 1.33323 23.1589 1.42884 23.0751 1.50863L12.2835 12.0086C12.1201 12.1676 11.9012 12.2565 11.6733 12.2565C11.4454 12.2565 11.2265 12.1676 11.0631 12.0086L0.27145 1.50863C0.18767 1.42884 0.120544 1.33323 0.0739574 1.22732C0.0273723 1.12142 0.00225063 1.00733 4.95521e-05 0.891655C-0.00215343 0.775979 0.0186062 0.661015 0.0611267 0.553415C0.103649 0.445816 0.167086 0.347718 0.24777 0.264797C0.328453 0.181876 0.424782 0.115779 0.531178 0.0703323C0.637575 0.0248852 0.751928 0.000990329 0.86762 2.92126e-05C0.983315 -0.000931903 1.09805 0.0210604 1.20518 0.0647337C1.31232 0.108407 1.40973 0.172893 1.49179 0.254462L11.6733 10.1618Z" fill="#210C0C"/>
              </svg>
            </div>
            {/* Body Section - Toggle Visibility */}
            <div className={`headbody ${isAwardOpen ? "open" : "closed"}`}>
              {propylConent.awardSelect.map((item, index) => (
                <div className="content" key={index}>
                  <img className="itemImage" src={item.awardicon} alt="award" />
                  <p className="itemName">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="statics_blocks">
            <div className={`statheadpart ${isStaticsOpen ? "expanded" : ""}`} onClick={() => setIsOpen(!isStaticsOpen)}>
              <p>סטטיסטיקה מול שחקנים אחרים</p>
              <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6733 10.1618L21.8548 0.254463C21.9368 0.172894 22.0342 0.108408 22.1414 0.0647346C22.2485 0.0210613 22.3633 -0.000930969 22.4789 3.01573e-05C22.5946 0.000991284 22.709 0.0248861 22.8154 0.0703333C22.9218 0.11578 23.0181 0.181877 23.0988 0.264798C23.1795 0.347719 23.2429 0.445817 23.2854 0.553416C23.328 0.661016 23.3487 0.77598 23.3465 0.891656C23.3443 1.00733 23.3192 1.12142 23.2726 1.22732C23.226 1.33323 23.1589 1.42884 23.0751 1.50863L12.2835 12.0086C12.1201 12.1676 11.9012 12.2565 11.6733 12.2565C11.4454 12.2565 11.2265 12.1676 11.0631 12.0086L0.27145 1.50863C0.18767 1.42884 0.120544 1.33323 0.0739574 1.22732C0.0273723 1.12142 0.00225063 1.00733 4.95521e-05 0.891655C-0.00215343 0.775979 0.0186062 0.661015 0.0611267 0.553415C0.103649 0.445816 0.167086 0.347718 0.24777 0.264797C0.328453 0.181876 0.424782 0.115779 0.531178 0.0703323C0.637575 0.0248852 0.751928 0.000990329 0.86762 2.92126e-05C0.983315 -0.000931903 1.09805 0.0210604 1.20518 0.0647337C1.31232 0.108407 1.40973 0.172893 1.49179 0.254462L11.6733 10.1618Z" fill="#210C0C"/>
              </svg>
            </div>
            <div className={`statheadbody ${isStaticsOpen ? "open" : "closed"}`}>
              {propylConent.awardSelect.map((item, index) => (
                <div className="content" key={index}>
                  <img className="itemImage" src={item.awardicon} alt="award" />
                  <p className="itemName">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Propyl;
