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
      </div>
    </main>
  );
};

export default Propyl;
