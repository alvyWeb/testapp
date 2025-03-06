"use client"; 

import "./propyl.scss";
import "./skilbar.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";
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
    rankList: [
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "1",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "2",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "3",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "4",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "5",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "6",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "7",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "8",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "9",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
      {
        percent: "23%",
        equal: "50",
        dLike: "50",
        toffee: "50",
        ball: "50",
        score: "10",
        playerName: "פן נ. (פנתר)",
        playerImg: "./user-Image/a1.png",
        playerCountry: "./flags/br.png",
      },
    ],
    winsWith: [
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
    ],
    winAinst: [
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
    ],
    losesAgainst: [
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
      {
        playerProfile: "./propyl/png/comon.png",
        playerCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        wins: "10 נצחונות",
      },
    ],
    mostAgainst: [
      {
        headImg: "./propyl/png/comon.png",
        headCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        match: "10 משחקים",
        win: "5 נצחונות",
        losses: "5 הפסדים",
      },
      {
        headImg: "./propyl/png/comon.png",
        headCountry: "./flags/br.png",
        playerName: "תומר מנדלר",
        playerSur: "(מוצקין)",
        match: "10 משחקים",
        win: "5 נצחונות",
        losses: "5 הפסדים",
      },
    ],
    closeMatch: [
      {
        closeImg: "./propyl/png/close_game.png",
        titile: "פארק הירקון, תל אביב | מגרש #2",
        date: "02/24/2023",
        time: "14:00",
      },
      {
        closeImg: "./propyl/png/close_game.png",
        titile: "פארק הירקון, תל אביב | מגרש #2",
        date: "02/24/2023",
        time: "14:00",
      },
    ],
    lastMatch: [
      {
        squadHeadTitle: "פארק הירקון, תל אביב | מגרש #1",
        squadDate: "02/24/2023",
        squadMatchTime: "14:00",
        squadComments: "26 הודעות",
        myImg: "./user-Image/a1.png",
        myCountryImg: "./flags/br.png",
        myName: "מנדלר ת.",
        myRank: "(פרו)",
        myTeaMateImg: "./user-Image/a3.png",
        myTeaMateCountryImg: "./flags/br.png",
        myTeaMateName: "עוז י.",
        myTeaMateRank: "(הוויז)",
        squadCurrentPoint: "3 - 1",
        squadPreviousPoint1: "0 - 1",
        squadPreviousPoint2: "2 - 1",
        squadPreviousPoint3: "3 - 4",
        opPlayerImg: "./user-Image/a4.png",
        opPlayerCountryImg: "./flags/br.png",
        toffeeIcon: "../Stock/futuregamesmine/svg/tennis.svg",
        cIcon: "../Stock/futuregamesmine/svg/red-c.svg",
        opPlayerName: "פן נ.",
        opPlayerRank: "(פנתר)",
        opTeaMateImg: "./user-Image/a2.png",
        opTeaMateCountryImg: "./flags/br.png",
        tennisIcon: "../Stock/futuregamesmine/svg/toffee.svg",
        opTeaMateName: "גורן ש.",
        opTeaMateRank: "(מוצקין)",   
      },
      {
        squadHeadTitle: "פארק הירקון, תל אביב | מגרש #1",
        squadDate: "02/24/2023",
        squadMatchTime: "14:00",
        squadComments: "26 הודעות",
        myImg: "./user-Image/a1.png",
        myCountryImg: "./flags/br.png",
        myName: "מנדלר ת.",
        myRank: "(פרו)",
        myTeaMateImg: "./user-Image/a3.png",
        myTeaMateCountryImg: "./flags/br.png",
        myTeaMateName: "עוז י.",
        myTeaMateRank: "(הוויז)",
        squadCurrentPoint: "3 - 1",
        squadPreviousPoint1: "0 - 1",
        squadPreviousPoint2: "2 - 1",
        squadPreviousPoint3: "3 - 4",
        opPlayerImg: "./user-Image/a4.png",
        opPlayerCountryImg: "./flags/br.png",
        toffeeIcon: "../Stock/futuregamesmine/svg/tennis.svg",
        cIcon: "../Stock/futuregamesmine/svg/red-c.svg",
        opPlayerName: "פן נ.",
        opPlayerRank: "(פנתר)",
        opTeaMateImg: "./user-Image/a2.png",
        opTeaMateCountryImg: "./flags/br.png",
        tennisIcon: "../Stock/futuregamesmine/svg/toffee.svg",
        opTeaMateName: "גורן ש.",
        opTeaMateRank: "(מוצקין)",   
      },
    ],
    winloss: [
      { 
        month: "ינואר", 
        נצחונות: 20, 
        הפסדים: 25, 
        שיוויונות: 15,
      },
      { 
        month: "פברואר", 
        נצחונות: 18, 
        הפסדים: 22, 
        שיוויונות: 14, 
      },
      { 
        month: "מרץ", 
        נצחונות: 15, 
        הפסדים: 18, 
        שיוויונות: 10 
      },
      { 
        month: "אפריל", 
        נצחונות: 12, 
        הפסדים: 15, 
        שיוויונות: 8 
      },
      { 
        month: "מאי", 
        נצחונות: 5, 
        הפסדים: 8, 
        שיוויונות: 4 
      },
      { 
        month: "יוני", 
        נצחונות: 25, 
        הפסדים: 30, 
        שיוויונות: 20 
      },
      { 
        month: "יולי", 
        נצחונות: 22, 
        הפסדים: 28, 
        שיוויונות: 18 
      },
      { 
        month: "יולי", 
        נצחונות: 22, 
        הפסדים: 28, 
        שיוויונות: 18 
      },
      { 
        month: "יולי", 
        נצחונות: 22, 
        הפסדים: 28, 
        שיוויונות: 18 
      },
    ],
    pieData: [
      { 
        name: "הפסדים", 
        value: 33, 
        fill: '#4774A9',
      },
      { 
        name: "נצחונות", 
        value: 33, 
        fill: '#8A42FF',
      },
      { 
        name: "שוויונות", 
        value: 33, 
        fill: '#41B8A6',
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
            <div className={`headpart ${isAwardOpen ? "expanded" : ""}`} onClick={() => setIsAwardOpen(!isAwardOpen)}>
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
            <div className={`statheadpart ${isStaticsOpen ? "expanded" : ""}`} onClick={() => setIsStaticsOpen(!isStaticsOpen)}>
              <p>סטטיסטיקה מול שחקנים אחרים</p>
              <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6733 10.1618L21.8548 0.254463C21.9368 0.172894 22.0342 0.108408 22.1414 0.0647346C22.2485 0.0210613 22.3633 -0.000930969 22.4789 3.01573e-05C22.5946 0.000991284 22.709 0.0248861 22.8154 0.0703333C22.9218 0.11578 23.0181 0.181877 23.0988 0.264798C23.1795 0.347719 23.2429 0.445817 23.2854 0.553416C23.328 0.661016 23.3487 0.77598 23.3465 0.891656C23.3443 1.00733 23.3192 1.12142 23.2726 1.22732C23.226 1.33323 23.1589 1.42884 23.0751 1.50863L12.2835 12.0086C12.1201 12.1676 11.9012 12.2565 11.6733 12.2565C11.4454 12.2565 11.2265 12.1676 11.0631 12.0086L0.27145 1.50863C0.18767 1.42884 0.120544 1.33323 0.0739574 1.22732C0.0273723 1.12142 0.00225063 1.00733 4.95521e-05 0.891655C-0.00215343 0.775979 0.0186062 0.661015 0.0611267 0.553415C0.103649 0.445816 0.167086 0.347718 0.24777 0.264797C0.328453 0.181876 0.424782 0.115779 0.531178 0.0703323C0.637575 0.0248852 0.751928 0.000990329 0.86762 2.92126e-05C0.983315 -0.000931903 1.09805 0.0210604 1.20518 0.0647337C1.31232 0.108407 1.40973 0.172893 1.49179 0.254462L11.6733 10.1618Z" fill="#210C0C"/>
              </svg>
            </div>
            <div className={`statheadbody ${isStaticsOpen ? "open" : "closed"}`}>
              <table className="table-container">
                <thead>
                  <tr>
                    <th className="headingTitle"></th>
                    <th className="headingTitle"></th>
                    <th className="headingTitle">
                      <span className="icon">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.51647 0.080345C5.53017 0.080345 3.66276 0.853838 2.25822 2.25838C0.853682 3.66292 0.080189 5.53033 0.0802096 7.5166C0.0802301 9.50287 0.853682 11.3703 2.25822 12.7748C3.66276 14.1794 5.53017 14.9529 7.51647 14.9529C9.5027 14.9529 11.3701 14.1794 12.7747 12.7748C14.1792 11.3703 14.9527 9.50287 14.9527 7.5166C14.9527 5.53035 14.1792 3.66292 12.7747 2.25838C11.3701 0.853838 9.50272 0.080345 7.51647 0.080345ZM2.94407 12.089C1.72275 10.8677 1.05013 9.24382 1.05013 7.51662C1.05013 5.78942 1.72275 4.16559 2.94407 2.94427C3.15493 2.73341 3.37804 2.53934 3.61135 2.36182C4.54573 3.81837 5.05628 5.62937 5.05628 7.51662C5.05625 9.40385 4.54573 11.2149 3.61135 12.6714C3.37804 12.4939 3.15493 12.2998 2.94407 12.089ZM7.51645 13.9829C6.41859 13.9829 5.36267 13.7107 4.42514 13.1991C5.46052 11.5863 6.02625 9.58988 6.02621 7.51658C6.02623 5.44326 5.46052 3.4469 4.42514 1.83411C5.36267 1.32242 6.41859 1.05026 7.51645 1.05026C8.61431 1.05026 9.67024 1.32239 10.6077 1.83411C9.57237 3.4469 9.00664 5.44328 9.00668 7.51658C9.00666 9.5899 9.57237 11.5863 10.6077 13.1991C9.67022 13.7108 8.61433 13.9829 7.51645 13.9829ZM13.9827 7.5166C13.9828 9.24378 13.3101 10.8676 12.0888 12.089C11.8779 12.2998 11.6548 12.4939 11.4215 12.6714C10.4871 11.2149 9.9766 9.40385 9.9766 7.5166C9.97662 5.62937 10.4871 3.81835 11.4215 2.3618C11.6548 2.53932 11.8779 2.73339 12.0888 2.94425C13.3101 4.16555 13.9828 5.7894 13.9827 7.5166Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="headingTitle">
                      <span className="icon">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5605 1.08262H12.6357C12.6426 0.869414 12.6465 0.65495 12.6465 0.439456C12.6465 0.196725 12.4497 0 12.2071 0H2.79293C2.55032 0 2.35348 0.196725 2.35348 0.439456C2.35348 0.65495 2.35737 0.869414 2.36435 1.08262H0.439453C0.196724 1.08262 0 1.27934 0 1.52208C0 3.49116 0.514641 5.34889 1.44905 6.75321C2.3727 8.1415 3.60306 8.93779 4.93217 9.01527C5.2335 9.34314 5.55199 9.61048 5.88375 9.81441V11.7676H5.14652C4.25526 11.7676 3.53027 12.4927 3.53027 13.3839V14.1211H3.49903C3.2563 14.1211 3.05958 14.3179 3.05958 14.5605C3.05958 14.8033 3.2563 15 3.49903 15H11.501C11.7437 15 11.9404 14.8033 11.9404 14.5605C11.9404 14.3179 11.7437 14.1211 11.501 14.1211H11.4697V13.3839C11.4697 12.4927 10.7447 11.7676 9.85348 11.7676H9.11625V9.81441C9.44801 9.61059 9.76662 9.34314 10.0679 9.01527C11.3969 8.93779 12.6273 8.1415 13.5511 6.75321C14.4855 5.34889 15 3.49116 15 1.52208C15 1.27934 14.8033 1.08262 14.5605 1.08262ZM2.18079 6.26637C1.41003 5.10811 0.957184 3.59313 0.888176 1.96153H2.41344C2.57195 3.96724 3.04276 5.8212 3.77861 7.2928C3.8958 7.52718 4.01836 7.74862 4.14551 7.95714C3.41457 7.6811 2.73811 7.10409 2.18079 6.26637ZM10.5908 13.3839V14.1212H4.40918V13.3839C4.40918 12.9774 4.73991 12.6465 5.14652 12.6465H9.85348C10.2601 12.6465 10.5908 12.9774 10.5908 13.3839ZM8.23734 11.7676H6.76266V10.1963C7.00424 10.2599 7.2504 10.293 7.5 10.293C7.7496 10.293 7.99576 10.2599 8.23734 10.1963V11.7676ZM8.50948 9.15077C8.48969 9.15889 8.47069 9.16873 8.45249 9.1796C8.1419 9.3341 7.82272 9.4141 7.5 9.4141C7.17739 9.4141 6.85833 9.3341 6.54785 9.17983C6.52943 9.16873 6.51031 9.15889 6.49029 9.15054C6.14571 8.96835 5.81234 8.69323 5.49706 8.33171C5.48046 8.30802 5.46181 8.28616 5.44109 8.26625C5.1281 7.89465 4.83364 7.43757 4.5647 6.8997C3.7571 5.28458 3.29063 3.16088 3.23753 0.878913H11.7625C11.7093 3.16088 11.2428 5.28469 10.4353 6.8997C10.1664 7.43757 9.8719 7.89465 9.55902 8.26625C9.53819 8.28616 9.51931 8.30813 9.50283 8.33182C9.18755 8.69346 8.85406 8.96846 8.50948 9.15077ZM12.8192 6.26637C12.2619 7.10409 11.5854 7.6811 10.8545 7.95714C10.9816 7.74862 11.1042 7.52718 11.2214 7.2928C11.9572 5.8212 12.4279 3.96724 12.5866 1.96153H14.1118C14.0428 3.59313 13.59 5.10811 12.8192 6.26637Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="headingTitle">
                      <span className="icon">
                        <svg
                          width="10"
                          height="14"
                          viewBox="0 0 10 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.47841 14C2.7185 14 2.10048 13.3822 2.10048 12.6223C2.10048 12.5711 2.10351 12.5198 2.10931 12.4681C2.10023 12.4227 2.09922 12.3765 2.10906 12.3315C2.37238 11.1245 1.82378 9.75367 1.47336 9.04427C1.44307 8.98318 1.41353 8.9236 1.38526 8.86982C1.33224 8.80848 1.26054 8.76707 1.17975 8.75193H1.07599C1.0611 8.75193 1.03762 8.75041 1.01944 8.74814C0.444332 8.71557 0 8.24853 0 7.6757V1.07597C0 0.482698 0.482706 0 1.07599 0H8.51729C8.55011 0 8.58167 0.00403931 8.61146 0.0118655C9.3085 0.0853305 9.84372 0.67204 9.84372 1.37816C9.84372 1.75786 9.68921 2.10246 9.43802 2.35189C9.71875 2.60435 9.89573 2.97016 9.89573 3.37661C9.89573 3.76969 9.73037 4.12464 9.46553 4.37609C9.73037 4.62703 9.89573 4.98249 9.89573 5.37557C9.89573 5.76864 9.73037 6.1236 9.46553 6.37454C9.73037 6.62599 9.89573 6.98094 9.89573 7.37402C9.89573 8.13391 9.2777 8.75218 8.51779 8.75218L5.33501 8.75167C6.22494 11.5189 4.64428 13.3744 4.57233 13.4567C4.57081 13.4582 4.5693 13.4597 4.56829 13.462C4.3075 13.7993 3.90305 14 3.47841 14ZM2.87326 12.3729C2.87983 12.4133 2.87983 12.4542 2.8715 12.4946C2.86241 12.537 2.85761 12.5799 2.85761 12.6223C2.85761 12.9644 3.13633 13.2426 3.47841 13.2426C3.6776 13.2426 3.86013 13.1485 3.9793 12.9844C3.99116 12.968 4.00454 12.9523 4.01868 12.9379C4.19414 12.7221 5.48901 11.0076 4.4413 8.51992C4.39207 8.40303 4.40444 8.26948 4.47488 8.16395C4.54481 8.05792 4.66321 7.9943 4.79045 7.9943H8.51729C8.6829 7.9943 8.83867 7.93018 8.95607 7.81279C9.07296 7.69539 9.13759 7.53963 9.13759 7.37402C9.13759 7.03194 8.85912 6.75322 8.51729 6.75322C8.30825 6.75322 8.1386 6.58357 8.1386 6.37454C8.1386 6.1655 8.30825 5.99585 8.51729 5.99585C8.85912 5.99585 9.13759 5.71765 9.13759 5.37557C9.13759 5.03349 8.85912 4.75477 8.51729 4.75477C8.30825 4.75477 8.1386 4.58512 8.1386 4.37609C8.1386 4.16705 8.30825 3.9974 8.51729 3.9974C8.85912 3.9974 9.13759 3.71869 9.13759 3.37661C9.13759 3.03453 8.85912 2.75633 8.51729 2.75633C8.30825 2.75633 8.1386 2.58667 8.1386 2.37764C8.1386 2.17593 8.29639 2.00476 8.4976 1.99391C8.82756 1.97674 9.08609 1.70585 9.08609 1.37816C9.08609 1.04972 8.82756 0.779587 8.4976 0.76242C8.4822 0.76141 8.46781 0.759895 8.45316 0.757371H1.07599C0.90053 0.757371 0.757384 0.900262 0.757384 1.07597V7.67595C0.757384 7.84687 0.891946 7.98597 1.06387 7.99228C1.07145 7.99279 1.08331 7.9938 1.09467 7.99481H1.20803C1.22393 7.99481 1.24009 7.99582 1.25574 7.99784C1.55895 8.03672 1.82631 8.19248 2.00833 8.43711C2.01969 8.45302 2.03004 8.46917 2.03913 8.48634C2.07523 8.5545 2.11335 8.62948 2.15223 8.70926C2.62004 9.65547 3.11613 11.048 2.87326 12.3729Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="headingTitle">
                      <span className="icon">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.53533 3.69533C1.42644 3.69533 1.33933 3.66267 1.274 3.59733C1.20867 3.532 1.176 3.44489 1.176 3.336V2.78067C1.176 2.67178 1.20867 2.58467 1.274 2.51933C1.33933 2.454 1.42644 2.42133 1.53533 2.42133H7.75833C7.86722 2.42133 7.95433 2.454 8.01967 2.51933C8.09589 2.58467 8.134 2.67178 8.134 2.78067V3.336C8.134 3.44489 8.09589 3.532 8.01967 3.59733C7.95433 3.66267 7.86722 3.69533 7.75833 3.69533H1.53533ZM1.53533 7.77867C1.42644 7.77867 1.33933 7.746 1.274 7.68067C1.20867 7.61533 1.176 7.52822 1.176 7.41933V6.864C1.176 6.75511 1.20867 6.668 1.274 6.60267C1.33933 6.53733 1.42644 6.50467 1.53533 6.50467H7.75833C7.86722 6.50467 7.95433 6.53733 8.01967 6.60267C8.09589 6.668 8.134 6.75511 8.134 6.864V7.41933C8.134 7.52822 8.09589 7.61533 8.01967 7.68067C7.95433 7.746 7.86722 7.77867 7.75833 7.77867H1.53533Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="headingTitle">
                      <span className="icon">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.702 6.114C2.09533 6.114 1.61467 5.95533 1.26 5.638C0.914667 5.31133 0.728 4.86333 0.7 4.294C0.690667 4.13533 0.686 3.93 0.686 3.678C0.686 3.40733 0.690667 3.188 0.7 3.02C0.728 2.44133 0.91 1.984 1.246 1.648C1.582 1.30267 2.06733 1.13 2.702 1.13C3.33667 1.13 3.822 1.30267 4.158 1.648C4.50333 1.984 4.69 2.44133 4.718 3.02C4.73667 3.356 4.746 3.57533 4.746 3.678C4.746 3.77133 4.73667 3.97667 4.718 4.294C4.69 4.86333 4.49867 5.31133 4.144 5.638C3.78933 5.95533 3.30867 6.114 2.702 6.114ZM1.526 11C1.442 11 1.372 10.9767 1.316 10.93C1.26 10.874 1.232 10.804 1.232 10.72C1.232 10.664 1.25067 10.6127 1.288 10.566L8.204 1.466C8.27867 1.36333 8.344 1.29333 8.4 1.256C8.46533 1.21867 8.554 1.2 8.666 1.2H9.114C9.198 1.2 9.26333 1.228 9.31 1.284C9.366 1.33067 9.394 1.396 9.394 1.48C9.394 1.536 9.37533 1.58733 9.338 1.634L2.436 10.734C2.36133 10.8273 2.29133 10.8973 2.226 10.944C2.17 10.9813 2.086 11 1.974 11H1.526ZM2.702 5.26C3.038 5.26 3.28533 5.162 3.444 4.966C3.60267 4.77 3.696 4.52733 3.724 4.238C3.74267 3.902 3.752 3.706 3.752 3.65C3.752 3.566 3.74267 3.37467 3.724 3.076C3.70533 2.78667 3.612 2.544 3.444 2.348C3.28533 2.14267 3.038 2.04 2.702 2.04C2.366 2.04 2.11867 2.14267 1.96 2.348C1.80133 2.544 1.71267 2.78667 1.694 3.076C1.68467 3.22533 1.68 3.41667 1.68 3.65C1.68 3.874 1.68467 4.07 1.694 4.238C1.722 4.518 1.81067 4.76067 1.96 4.966C2.11867 5.162 2.366 5.26 2.702 5.26ZM7.91 11.084C7.30333 11.084 6.82267 10.9113 6.468 10.566C6.12267 10.2207 5.936 9.76333 5.908 9.194C5.88933 8.914 5.88 8.72733 5.88 8.634C5.88 8.54067 5.88933 8.30733 5.908 7.934C5.936 7.35533 6.118 6.898 6.454 6.562C6.79 6.21667 7.27533 6.044 7.91 6.044C8.54467 6.044 9.03 6.21667 9.366 6.562C9.71133 6.898 9.898 7.35533 9.926 7.934C9.94467 8.27 9.954 8.48467 9.954 8.578C9.954 8.67133 9.94467 8.87667 9.926 9.194C9.898 9.76333 9.70667 10.2207 9.352 10.566C8.99733 10.9113 8.51667 11.084 7.91 11.084ZM7.91 10.174C8.246 10.174 8.49333 10.076 8.652 9.88C8.81067 9.684 8.904 9.44133 8.932 9.152C8.95067 8.816 8.96 8.61533 8.96 8.55C8.96 8.47533 8.95067 8.28867 8.932 7.99C8.91333 7.70067 8.82 7.458 8.652 7.262C8.49333 7.05667 8.246 6.954 7.91 6.954C7.574 6.954 7.32667 7.05667 7.168 7.262C7.00933 7.458 6.92067 7.70067 6.902 7.99C6.89267 8.13933 6.888 8.326 6.888 8.55C6.888 8.78333 6.89267 8.984 6.902 9.152C6.92067 9.432 7.00933 9.67467 7.168 9.88C7.32667 10.076 7.574 10.174 7.91 10.174Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </th>
                  </tr>
                </thead>
    
                <tbody>
                {propylConent.rankList.map((item, index) => (
                  <tr>
                    <td className="dataitems">
                      <div className="profile">
                        <div className="profileImage">
                          <img className='photo' src={item.playerImg} alt="" />
                          <img src={item.playerCountry} alt="" className='country' />
                        </div>
                        <p className='profileName'>{item.playerName}</p>
                      </div>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.score}</p>
                      </span>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.ball}</p>
                      </span>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.toffee}</p>
                      </span>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.dLike}</p>
                      </span>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.equal}</p>
                      </span>
                    </td>
                    <td className="dataitems">
                      <span className="text">
                        <p>{item.percent}</p>
                      </span>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="winWith_blocks profileCommon">
              <h2>בדרך כלל מנצח עם</h2>
              <div className="itemlist">
                {propylConent.winsWith.map((item) => (
                  <div className="opponent_body">
                    <img className="profilePlay" src={item.playerProfile} alt="" />
                    <img className="profileCountry" src={item.playerCountry} alt="" />
                    <div className="bodyInfo">
                      <p className="profilePName">{item.playerName} <span>{item.playerSur}</span></p>
                      <p className="profilePsta">{item.wins}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="winvs_blocks profileCommon">
              <h2>בדרך כלל מנצח מול</h2>
              <div className="itemlist">
                {propylConent.winAinst.map((item) => (
                  <div className="opponent_body">
                    <img className="profilePlay" src={item.playerProfile} alt="" />
                    <img className="profileCountry" src={item.playerCountry} alt="" />
                    <div className="bodyInfo">
                      <p className="profilePName">{item.playerName} <span>{item.playerSur}</span></p>
                      <p className="profilePsta">{item.wins}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="loses_blocks profileCommon">
              <h2>בדרך כלל מפסיד נגד</h2>
              <div className="itemlist">
                {propylConent.losesAgainst.map((item) => (
                  <div className="opponent_body">
                    <img className="profilePlay" src={item.playerProfile} alt="" />
                    <img className="profileCountry" src={item.playerCountry} alt="" />
                    <div className="bodyInfo">
                      <p className="profilePName">{item.playerName} <span>{item.playerSur}</span></p>
                      <p className="profilePsta">{item.wins}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="against_blocks profileCommonO">
              <h2>שיחק הכי הרבה מול</h2>
              <div className="itemlist">
                {propylConent.mostAgainst.map((item) => (
                  <div className="opponent_body">
                    <div className="headInfop">
                      <img className="profilePlay" src={item.headImg} alt="" />
                      <img className="profileCountry" src={item.headCountry} alt="" />
                    </div>
                    <div className="bodyInfo">
                      <p className="profilePName">{item.playerName} <span>{item.playerSur}</span></p>
                      <p className="profilePsta">{item.match}</p>
                      <p className="profilePsta">{item.win}</p>
                      <p className="profilePsta">{item.losses}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="closegame_blocks profileCommon">
            <h2>משחקים קרובים</h2>
            <div className="itemlist">
            {propylConent.closeMatch.map((item) => (
              <div className="opponent_body">
                <div className="headInfop">
                  <img className="profileImage" src={item.closeImg} alt="" />
                </div>
                <div className="bodyInfo">
                  <p className="profilePName">{item.titile}</p>
                  <span className="otherInfo">
                    <figure className="otherInfoItem">
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
                    </figure>
                    <figure className="otherInfoItem">
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
                    </figure>
                  </span>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div class="lastgame_block">
            <h2>משחקים אחרונים</h2>
            <div className="gameitemlist">
              {propylConent.lastMatch.map((item) => (
              <div className="everything_body">
                <div className="everything_head_body">
                  <div className="head_body">
                    <p>{item.squadHeadTitle}</p>
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
                  </div>
                </div>
                <div className="everything_main_body">
                  <div className="f_team">
                    <div className="_player">
                      <span>
                        <img className="teamIamge" src={item.myImg} />
                        <img className="teamflag" src={item.myCountryImg} />
                      </span>
                      <p className="_name">{item.myName}</p>
                      <p className="_ranking">{item.myRank}</p>
                    </div>
                    <div className="_player">
                      <span>
                        <img className="teamIamge" src={item.myTeaMateImg} />
                        <img className="teamflag" src={item.myTeaMateCountryImg} />
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
                          <img className="teamIamge" src={item.opPlayerImg} />
                          <img className="teamflag" src={item.opPlayerCountryImg} />
                        </span>
                      </span>
                      <p className="_name">
                        {item.opPlayerName}
                      </p>
                      <p className="_ranking">{item.opPlayerRank}</p>
                    </div>
                    <div className="_player">
                      <span className="_win">
                        <span>
                          <img className="teamIamge" src={item.opTeaMateImg} />
                          <img className="teamflag" src={item.opTeaMateCountryImg} />
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

          <div className="winlossgraph profileCommonO">
            <h2>מאזן נצחונות והפסדים</h2>
            <div className="itemlist">
                <div className="opponent_body">
                  <div className="headInfop">
                    <motion.div>
                      <PieChart width={105} height={105}>
                        <Pie data={propylConent.pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" fillKey="fill"/>
                      </PieChart>
                    </motion.div>
                  </div>
                  <div className="bodyInfo">
                    <div className="list1">
                        <ul>
                        {propylConent.pieData.map((item) => (
                          <li>{item.name}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="list2">
                      <ul>
                        {propylConent.pieData.map((item) => (
                          <li>{item.name} {item.value}</li>
                        ))}
                        </ul>
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

export default Propyl;
