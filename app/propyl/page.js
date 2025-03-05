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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Propyl;
