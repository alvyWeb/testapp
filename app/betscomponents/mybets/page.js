import "./mybets.scss";

const Mybets = ({ standings, setStandings }) => {
  const myBets = {
    mainContainer: [
      {
        headTitle: "February 24, Yarkon Park - Tel Aviv | 14:00",
        edit: "edit",
        fPlayerImg: "./user-Image/Tafsir.png",
        fPCountry: "./flags/bi.png",
        sPlayerImg: "./user-Image/Tafsir.png",
        sPCountry: "./flags/bm.png",
        fPlayerName: "Penn N. (panther)",
        sPlayerName: "Goren S. (The Wiz)",
        gameProcessing: (
          <svg
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.885196 4.43206C0.807917 4.43206 0.748201 4.40747 0.706049 4.35829C0.663897 4.31614 0.642821 4.25994 0.642821 4.18968V3.78924C0.642821 3.71899 0.663897 3.66278 0.706049 3.62063C0.748201 3.57145 0.807917 3.54686 0.885196 3.54686H6.99726C7.06752 3.54686 7.12372 3.57145 7.16587 3.62063C7.21505 3.66278 7.23964 3.71899 7.23964 3.78924V4.18968C7.23964 4.25994 7.21505 4.31614 7.16587 4.35829C7.12372 4.40747 7.06752 4.43206 6.99726 4.43206H0.885196ZM10.3278 1.28118C10.2575 1.28118 10.1978 1.26011 10.1486 1.21796C10.1065 1.16878 10.0854 1.10906 10.0854 1.03881V0.638363C10.0854 0.56811 10.1065 0.511907 10.1486 0.469755C10.1978 0.420577 10.2575 0.395988 10.3278 0.395988H13.4892C13.5594 0.395988 13.6156 0.420577 13.6578 0.469755C13.707 0.511907 13.7316 0.56811 13.7316 0.638363V1.03881C13.7316 1.10906 13.707 1.16878 13.6578 1.21796C13.6156 1.26011 13.5594 1.28118 13.4892 1.28118H10.3278ZM16.8232 4.43206C16.7459 4.43206 16.6862 4.40747 16.644 4.35829C16.6019 4.31614 16.5808 4.25994 16.5808 4.18968V3.78924C16.5808 3.71899 16.6019 3.66278 16.644 3.62063C16.6862 3.57145 16.7459 3.54686 16.8232 3.54686H22.9352C23.0055 3.54686 23.0617 3.57145 23.1038 3.62063C23.153 3.66278 23.1776 3.71899 23.1776 3.78924V4.18968C23.1776 4.25994 23.153 4.31614 23.1038 4.35829C23.0617 4.40747 23.0055 4.43206 22.9352 4.43206H16.8232Z"
              fill="black"
            />
          </svg>
        ),
        nTeam: "Penn N. (panther)",
        lTeam: "Goren S. (The Wiz)",
        nTeamImg: "./user-Image/Tafsir.png",
        nTeamCountry: "./flags/br.png",
        aTeamImg: "./user-Image/Tafsir.png",
        aTeamCountry: "./flags/bn.png",
        increase: "38%",
        decrease: "12%",
        winRate: "1.62",
        currentCash: "1.60x100",
        increaseCash: "100",
      },
      {
        headTitle: "February 24, Yarkon Park - Tel Aviv | 14:00",
        edit: "edit",
        fPlayerImg: "./user-Image/Tafsir.png",
        fPCountry: "./flags/bi.png",
        sPlayerImg: "./user-Image/Tafsir.png",
        sPCountry: "./flags/bm.png",
        fPlayerName: "Penn N. (panther)",
        sPlayerName: "Goren S. (The Wiz)",
        gameProcessing: (
          <svg
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.885196 4.43206C0.807917 4.43206 0.748201 4.40747 0.706049 4.35829C0.663897 4.31614 0.642821 4.25994 0.642821 4.18968V3.78924C0.642821 3.71899 0.663897 3.66278 0.706049 3.62063C0.748201 3.57145 0.807917 3.54686 0.885196 3.54686H6.99726C7.06752 3.54686 7.12372 3.57145 7.16587 3.62063C7.21505 3.66278 7.23964 3.71899 7.23964 3.78924V4.18968C7.23964 4.25994 7.21505 4.31614 7.16587 4.35829C7.12372 4.40747 7.06752 4.43206 6.99726 4.43206H0.885196ZM10.3278 1.28118C10.2575 1.28118 10.1978 1.26011 10.1486 1.21796C10.1065 1.16878 10.0854 1.10906 10.0854 1.03881V0.638363C10.0854 0.56811 10.1065 0.511907 10.1486 0.469755C10.1978 0.420577 10.2575 0.395988 10.3278 0.395988H13.4892C13.5594 0.395988 13.6156 0.420577 13.6578 0.469755C13.707 0.511907 13.7316 0.56811 13.7316 0.638363V1.03881C13.7316 1.10906 13.707 1.16878 13.6578 1.21796C13.6156 1.26011 13.5594 1.28118 13.4892 1.28118H10.3278ZM16.8232 4.43206C16.7459 4.43206 16.6862 4.40747 16.644 4.35829C16.6019 4.31614 16.5808 4.25994 16.5808 4.18968V3.78924C16.5808 3.71899 16.6019 3.66278 16.644 3.62063C16.6862 3.57145 16.7459 3.54686 16.8232 3.54686H22.9352C23.0055 3.54686 23.0617 3.57145 23.1038 3.62063C23.153 3.66278 23.1776 3.71899 23.1776 3.78924V4.18968C23.1776 4.25994 23.153 4.31614 23.1038 4.35829C23.0617 4.40747 23.0055 4.43206 22.9352 4.43206H16.8232Z"
              fill="black"
            />
          </svg>
        ),
        nTeam: "Penn N. (panther)",
        lTeam: "Goren S. (The Wiz)",
        nTeamImg: "./user-Image/Tafsir.png",
        nTeamCountry: "./flags/br.png",
        aTeamImg: "./user-Image/Tafsir.png",
        aTeamCountry: "./flags/bn.png",
        increase: "38%",
        decrease: "12%",
        winRate: "1.62",
        currentCash: "1.60x100",
        increaseCash: "100",
      },
    ],
    conatinerRead: [
      {
        headTitle: "February 24, Yarkon Park - Tel Aviv | 14:00",
        edit: "edit",
        fPlayerImg: "./user-Image/Tafsir.png",
        fPCountry: "./flags/bi.png",
        sPlayerImg: "./user-Image/Tafsir.png",
        sPCountry: "./flags/bm.png",
        fPlayerName: "Penn N. (panther)",
        sPlayerName: "Goren S. (The Wiz)",
        gameProcessing: (
          <svg
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.885196 4.43206C0.807917 4.43206 0.748201 4.40747 0.706049 4.35829C0.663897 4.31614 0.642821 4.25994 0.642821 4.18968V3.78924C0.642821 3.71899 0.663897 3.66278 0.706049 3.62063C0.748201 3.57145 0.807917 3.54686 0.885196 3.54686H6.99726C7.06752 3.54686 7.12372 3.57145 7.16587 3.62063C7.21505 3.66278 7.23964 3.71899 7.23964 3.78924V4.18968C7.23964 4.25994 7.21505 4.31614 7.16587 4.35829C7.12372 4.40747 7.06752 4.43206 6.99726 4.43206H0.885196ZM10.3278 1.28118C10.2575 1.28118 10.1978 1.26011 10.1486 1.21796C10.1065 1.16878 10.0854 1.10906 10.0854 1.03881V0.638363C10.0854 0.56811 10.1065 0.511907 10.1486 0.469755C10.1978 0.420577 10.2575 0.395988 10.3278 0.395988H13.4892C13.5594 0.395988 13.6156 0.420577 13.6578 0.469755C13.707 0.511907 13.7316 0.56811 13.7316 0.638363V1.03881C13.7316 1.10906 13.707 1.16878 13.6578 1.21796C13.6156 1.26011 13.5594 1.28118 13.4892 1.28118H10.3278ZM16.8232 4.43206C16.7459 4.43206 16.6862 4.40747 16.644 4.35829C16.6019 4.31614 16.5808 4.25994 16.5808 4.18968V3.78924C16.5808 3.71899 16.6019 3.66278 16.644 3.62063C16.6862 3.57145 16.7459 3.54686 16.8232 3.54686H22.9352C23.0055 3.54686 23.0617 3.57145 23.1038 3.62063C23.153 3.66278 23.1776 3.71899 23.1776 3.78924V4.18968C23.1776 4.25994 23.153 4.31614 23.1038 4.35829C23.0617 4.40747 23.0055 4.43206 22.9352 4.43206H16.8232Z"
              fill="black"
            />
          </svg>
        ),
        nTeam: "Penn N. (panther)",
        lTeam: "Goren S. (The Wiz)",
        nTeamImg: "./user-Image/Tafsir.png",
        nTeamCountry: "./flags/br.png",
        aTeamImg: "./user-Image/Tafsir.png",
        aTeamCountry: "./flags/bn.png",
        increase: "38%",
        decrease: "12%",
        winRate: "1.62",
        currentCash: "1.60x100",
        increaseCash: "100",
        gameScore: "1-3",
      },
    ],
    conatinerGrey: [
      {
        headTitle: "February 24, Yarkon Park - Tel Aviv | 14:00",
        edit: "edit",
        fPlayerImg: "./user-Image/Tafsir.png",
        fPCountry: "./flags/bi.png",
        sPlayerImg: "./user-Image/Tafsir.png",
        sPCountry: "./flags/bm.png",
        fPlayerName: "Penn N. (panther)",
        sPlayerName: "Goren S. (The Wiz)",
        gameProcessing: (
          <svg
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.885196 4.43206C0.807917 4.43206 0.748201 4.40747 0.706049 4.35829C0.663897 4.31614 0.642821 4.25994 0.642821 4.18968V3.78924C0.642821 3.71899 0.663897 3.66278 0.706049 3.62063C0.748201 3.57145 0.807917 3.54686 0.885196 3.54686H6.99726C7.06752 3.54686 7.12372 3.57145 7.16587 3.62063C7.21505 3.66278 7.23964 3.71899 7.23964 3.78924V4.18968C7.23964 4.25994 7.21505 4.31614 7.16587 4.35829C7.12372 4.40747 7.06752 4.43206 6.99726 4.43206H0.885196ZM10.3278 1.28118C10.2575 1.28118 10.1978 1.26011 10.1486 1.21796C10.1065 1.16878 10.0854 1.10906 10.0854 1.03881V0.638363C10.0854 0.56811 10.1065 0.511907 10.1486 0.469755C10.1978 0.420577 10.2575 0.395988 10.3278 0.395988H13.4892C13.5594 0.395988 13.6156 0.420577 13.6578 0.469755C13.707 0.511907 13.7316 0.56811 13.7316 0.638363V1.03881C13.7316 1.10906 13.707 1.16878 13.6578 1.21796C13.6156 1.26011 13.5594 1.28118 13.4892 1.28118H10.3278ZM16.8232 4.43206C16.7459 4.43206 16.6862 4.40747 16.644 4.35829C16.6019 4.31614 16.5808 4.25994 16.5808 4.18968V3.78924C16.5808 3.71899 16.6019 3.66278 16.644 3.62063C16.6862 3.57145 16.7459 3.54686 16.8232 3.54686H22.9352C23.0055 3.54686 23.0617 3.57145 23.1038 3.62063C23.153 3.66278 23.1776 3.71899 23.1776 3.78924V4.18968C23.1776 4.25994 23.153 4.31614 23.1038 4.35829C23.0617 4.40747 23.0055 4.43206 22.9352 4.43206H16.8232Z"
              fill="black"
            />
          </svg>
        ),
        nTeam: "Penn N. (panther)",
        lTeam: "Goren S. (The Wiz)",
        nTeamImg: "./user-Image/Tafsir.png",
        nTeamCountry: "./flags/br.png",
        aTeamImg: "./user-Image/Tafsir.png",
        aTeamCountry: "./flags/bn.png",
        increase: "38%",
        decrease: "12%",
        winRate: "1.62",
        currentCash: "1.60x100",
        increaseCash: "100",
        gameScore: "1-3",
      },
    ],
  };
  return (
    <main>
      {myBets.mainContainer.map((item) => (
        <div className="mybets_container">
          <div className="mybet_head">
            <p className="head_title">{item.headTitle}</p>
            <p className="head_edit">{item.edit}</p>
          </div>
          <div className="mybet_body">
            <div className="body_head">
              <div className="fteam">
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.fPlayerImg} alt="" />
                    <img src={item.fPCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.sPlayerImg} alt="" />
                    <img src={item.sPCountry} alt="" className="country" />
                  </span>
                </div>
                <div className="playe_name">
                  <p>{item.fPlayerName}</p>
                  <p>{item.sPlayerName}</p>
                </div>
              </div>
              <div className="v_s">
                {item.gameProcessing}
                {/* <p>{item.gameScore}</p> */}
              </div>
              <div className="steam">
                <div className="playe_name">
                  <p>{item.nTeam}</p>
                  <p>{item.lTeam}</p>
                </div>
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.aTeamImg} alt="" />
                    <img src={item.aTeamCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.nTeamImg} alt="" />
                    <img src={item.nTeamCountry} alt="" className="country" />
                  </span>
                </div>
              </div>
            </div>
            <div className="body_footer">
              <div className="increase">
                <p>{item.increase}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13205 0.144249L0.166063 2.71835C-0.0560883 2.91116 -0.0552616 3.22301 0.168002 3.41493C0.391236 3.60683 0.752308 3.60609 0.974487 3.41328L2.96544 1.68533L2.96544 10.5075C2.96544 10.7795 3.22075 11 3.53572 11C3.85068 11 4.10599 10.7795 4.10599 10.5075L4.10599 1.68535L6.09694 3.41326C6.31912 3.60607 6.68019 3.6068 6.90343 3.41491C7.12672 3.22299 7.12749 2.91111 6.90537 2.71832L3.93993 0.144667C3.71701 -0.0482388 3.35422 -0.0480664 3.13205 0.144249Z"
                    fill="#60BF64"
                  />
                </svg>
              </div>
              <div className="decrease">
                <p>{item.decrease}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.93924 10.8558L6.90523 8.28165C7.12738 8.08884 7.12655 7.77699 6.90329 7.58507C6.68005 7.39317 6.31898 7.39391 6.0968 7.58672L4.10585 9.31467L4.10585 0.492547C4.10585 0.220513 3.85054 1.37675e-08 3.53557 0C3.22061 -1.37675e-08 2.9653 0.220513 2.9653 0.492547L2.9653 9.31465L0.974345 7.58674C0.752165 7.39393 0.391095 7.39319 0.16786 7.58509C-0.0554317 7.77701 -0.056201 8.08889 0.165922 8.28168L3.13136 10.8553C3.35428 11.0482 3.71706 11.0481 3.93924 10.8558Z"
                    fill="#E44C4C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mybet_footer">
            <div className="footer_score">
              <p>{item.winRate}</p>
            </div>
            {/* GREEN */}
            <div className="footer_cash">
              <span className="f_money">
                <p>{item.currentCash}</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18531 6.92475C10.2862 6.92475 11.9893 6.16782 11.9893 5.2341C11.9893 4.30039 10.2862 3.54346 8.18531 3.54346C6.08444 3.54346 4.38135 4.30039 4.38135 5.2341C4.38135 6.16782 6.08444 6.92475 8.18531 6.92475Z"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.38135 5.23389V10.3058C4.38135 11.2357 6.072 11.9965 8.18531 11.9965C10.2986 11.9965 11.9893 11.2357 11.9893 10.3058V5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9892 7.77001C11.9892 8.69987 10.2986 9.46066 8.18525 9.46066C6.07194 9.46066 4.3813 8.69987 4.3813 7.77001M8.10072 1.85274C7.11295 1.24316 5.96317 0.948344 4.80396 1.00742C2.6991 1.00742 1 1.76821 1 2.69807C1 3.19681 1.49029 3.64483 2.26799 3.96605"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26799 9.03817C1.49029 8.71695 1 8.26893 1 7.77019V2.69824"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26838 6.50226C1.49044 6.18094 1 5.73278 1 5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1838 3.92419H11.855L0.626878 3.92419C0.383373 3.92419 0.15 4.1606 0.15 4.5C0.15 4.83941 0.383373 5.07581 0.626878 5.07581L11.855 5.07581H12.1838L11.9683 5.32413L9.76914 7.85806C9.57257 8.08457 9.57173 8.46065 9.7675 8.6884L9.76751 8.68841C9.95216 8.90325 10.2417 8.90384 10.427 8.69033L13.7025 4.9163C13.8992 4.68893 13.8989 4.31094 13.7031 4.08456L12.1838 3.92419ZM12.1838 3.92419L11.9683 3.67587L9.76911 1.14194C9.76911 1.14194 9.76911 1.14194 9.7691 1.14194C9.57254 0.915423 9.5717 0.539346 9.76747 0.311601C9.95214 0.0967699 10.2417 0.0961429 10.427 0.30967L13.703 4.08441L12.1838 3.92419Z"
                  fill="#60BF64"
                  stroke="white"
                  stroke-width="0.3"
                />
              </svg>
              <span className="smoney">
                <p>{item.increaseCash}</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18531 6.92475C10.2862 6.92475 11.9893 6.16782 11.9893 5.2341C11.9893 4.30039 10.2862 3.54346 8.18531 3.54346C6.08444 3.54346 4.38135 4.30039 4.38135 5.2341C4.38135 6.16782 6.08444 6.92475 8.18531 6.92475Z"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.38135 5.23389V10.3058C4.38135 11.2357 6.072 11.9965 8.18531 11.9965C10.2986 11.9965 11.9893 11.2357 11.9893 10.3058V5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9892 7.77001C11.9892 8.69987 10.2986 9.46066 8.18525 9.46066C6.07194 9.46066 4.3813 8.69987 4.3813 7.77001M8.10072 1.85274C7.11295 1.24316 5.96317 0.948344 4.80396 1.00742C2.6991 1.00742 1 1.76821 1 2.69807C1 3.19681 1.49029 3.64483 2.26799 3.96605"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26799 9.03817C1.49029 8.71695 1 8.26893 1 7.77019V2.69824"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26838 6.50226C1.49044 6.18094 1 5.73278 1 5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      ))}
      {myBets.conatinerRead.map((item) => (
        <div className="mybets_container">
          <div className="mybet_head">
            <p className="head_title">{item.headTitle}</p>
            <p className="head_edit">{item.edit}</p>
          </div>
          <div className="mybet_body">
            <div className="body_head">
              <div className="fteam">
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.fPlayerImg} alt="" />
                    <img src={item.fPCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.sPlayerImg} alt="" />
                    <img src={item.sPCountry} alt="" className="country" />
                  </span>
                </div>
                <div className="playe_name">
                  <p>{item.fPlayerName}</p>
                  <p>{item.sPlayerName}</p>
                </div>
              </div>
              <div className="v_s">
                {/* {item.gameProcessing} */}
                <p>{item.gameScore}</p>
              </div>
              <div className="steam">
                <div className="playe_name">
                  <p>{item.nTeam}</p>
                  <p>{item.lTeam}</p>
                </div>
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.aTeamImg} alt="" />
                    <img src={item.aTeamCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.nTeamImg} alt="" />
                    <img src={item.nTeamCountry} alt="" className="country" />
                  </span>
                </div>
              </div>
            </div>
            <div className="body_footer">
              <div className="increase">
                <p>{item.increase}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13205 0.144249L0.166063 2.71835C-0.0560883 2.91116 -0.0552616 3.22301 0.168002 3.41493C0.391236 3.60683 0.752308 3.60609 0.974487 3.41328L2.96544 1.68533L2.96544 10.5075C2.96544 10.7795 3.22075 11 3.53572 11C3.85068 11 4.10599 10.7795 4.10599 10.5075L4.10599 1.68535L6.09694 3.41326C6.31912 3.60607 6.68019 3.6068 6.90343 3.41491C7.12672 3.22299 7.12749 2.91111 6.90537 2.71832L3.93993 0.144667C3.71701 -0.0482388 3.35422 -0.0480664 3.13205 0.144249Z"
                    fill="#60BF64"
                  />
                </svg>
              </div>
              <div className="decrease">
                <p>{item.decrease}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.93924 10.8558L6.90523 8.28165C7.12738 8.08884 7.12655 7.77699 6.90329 7.58507C6.68005 7.39317 6.31898 7.39391 6.0968 7.58672L4.10585 9.31467L4.10585 0.492547C4.10585 0.220513 3.85054 1.37675e-08 3.53557 0C3.22061 -1.37675e-08 2.9653 0.220513 2.9653 0.492547L2.9653 9.31465L0.974345 7.58674C0.752165 7.39393 0.391095 7.39319 0.16786 7.58509C-0.0554317 7.77701 -0.056201 8.08889 0.165922 8.28168L3.13136 10.8553C3.35428 11.0482 3.71706 11.0481 3.93924 10.8558Z"
                    fill="#E44C4C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mybet_footer">
            <div className="footer_score">
              <p>{item.winRate}</p>
            </div>

            {/* RED */}

            <div className="footer_cash red_cash">
              <span className="f_money">
                <p>1.60x100</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18531 6.92475C10.2862 6.92475 11.9893 6.16782 11.9893 5.2341C11.9893 4.30039 10.2862 3.54346 8.18531 3.54346C6.08444 3.54346 4.38135 4.30039 4.38135 5.2341C4.38135 6.16782 6.08444 6.92475 8.18531 6.92475Z"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.38135 5.23389V10.3058C4.38135 11.2357 6.072 11.9965 8.18531 11.9965C10.2986 11.9965 11.9893 11.2357 11.9893 10.3058V5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9892 7.77001C11.9892 8.69987 10.2986 9.46066 8.18525 9.46066C6.07194 9.46066 4.3813 8.69987 4.3813 7.77001M8.10072 1.85274C7.11295 1.24316 5.96317 0.948344 4.80396 1.00742C2.6991 1.00742 1 1.76821 1 2.69807C1 3.19681 1.49029 3.64483 2.26799 3.96605"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26799 9.03817C1.49029 8.71695 1 8.26893 1 7.77019V2.69824"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26838 6.50226C1.49044 6.18094 1 5.73278 1 5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <svg
                className="red_arrow"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1838 3.92419H11.855L0.626878 3.92419C0.383373 3.92419 0.15 4.1606 0.15 4.5C0.15 4.83941 0.383373 5.07581 0.626878 5.07581L11.855 5.07581H12.1838L11.9683 5.32413L9.76914 7.85806C9.57257 8.08457 9.57173 8.46065 9.7675 8.6884L9.76751 8.68841C9.95216 8.90325 10.2417 8.90384 10.427 8.69033L13.7025 4.9163C13.8992 4.68893 13.8989 4.31094 13.7031 4.08456L12.1838 3.92419ZM12.1838 3.92419L11.9683 3.67587L9.76911 1.14194C9.76911 1.14194 9.76911 1.14194 9.7691 1.14194C9.57254 0.915423 9.5717 0.539346 9.76747 0.311601C9.95214 0.0967699 10.2417 0.0961429 10.427 0.30967L13.703 4.08441L12.1838 3.92419Z"
                  fill="#60BF64"
                  stroke="white"
                  stroke-width="0.3"
                />
              </svg>
              <span className="smoney">
                <p>100</p>
              </span>
            </div>
          </div>
        </div>
      ))}
      {myBets.conatinerGrey.map((item) => (
        <div className="mybets_container">
          <div className="mybet_head">
            <p className="head_title">{item.headTitle}</p>
            <p className="head_edit">{item.edit}</p>
          </div>
          <div className="mybet_body">
            <div className="body_head">
              <div className="fteam">
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.fPlayerImg} alt="" />
                    <img src={item.fPCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.sPlayerImg} alt="" />
                    <img src={item.sPCountry} alt="" className="country" />
                  </span>
                </div>
                <div className="playe_name">
                  <p>{item.fPlayerName}</p>
                  <p>{item.sPlayerName}</p>
                </div>
              </div>
              <div className="v_s">
                {/* {item.gameProcessing} */}
                <p>{item.gameScore}</p>
              </div>
              <div className="steam">
                <div className="playe_name">
                  <p>{item.nTeam}</p>
                  <p>{item.lTeam}</p>
                </div>
                <div className="fteam_img">
                  <span className="img_country">
                    <img src={item.aTeamImg} alt="" />
                    <img src={item.aTeamCountry} alt="" className="country" />
                  </span>
                  <span className="img_country">
                    <img src={item.nTeamImg} alt="" />
                    <img src={item.nTeamCountry} alt="" className="country" />
                  </span>
                </div>
              </div>
            </div>
            <div className="body_footer">
              <div className="increase">
                <p>{item.increase}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13205 0.144249L0.166063 2.71835C-0.0560883 2.91116 -0.0552616 3.22301 0.168002 3.41493C0.391236 3.60683 0.752308 3.60609 0.974487 3.41328L2.96544 1.68533L2.96544 10.5075C2.96544 10.7795 3.22075 11 3.53572 11C3.85068 11 4.10599 10.7795 4.10599 10.5075L4.10599 1.68535L6.09694 3.41326C6.31912 3.60607 6.68019 3.6068 6.90343 3.41491C7.12672 3.22299 7.12749 2.91111 6.90537 2.71832L3.93993 0.144667C3.71701 -0.0482388 3.35422 -0.0480664 3.13205 0.144249Z"
                    fill="#60BF64"
                  />
                </svg>
              </div>
              <div className="decrease">
                <p>{item.decrease}</p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.93924 10.8558L6.90523 8.28165C7.12738 8.08884 7.12655 7.77699 6.90329 7.58507C6.68005 7.39317 6.31898 7.39391 6.0968 7.58672L4.10585 9.31467L4.10585 0.492547C4.10585 0.220513 3.85054 1.37675e-08 3.53557 0C3.22061 -1.37675e-08 2.9653 0.220513 2.9653 0.492547L2.9653 9.31465L0.974345 7.58674C0.752165 7.39393 0.391095 7.39319 0.16786 7.58509C-0.0554317 7.77701 -0.056201 8.08889 0.165922 8.28168L3.13136 10.8553C3.35428 11.0482 3.71706 11.0481 3.93924 10.8558Z"
                    fill="#E44C4C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mybet_footer">
            <div className="footer_score">
              <p>{item.winRate}</p>
            </div>
            {/* GREY */}
            <div className="footer_cash grey_cash">
              <span className="f_money">
                <p>1.60x100</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18531 6.92475C10.2862 6.92475 11.9893 6.16782 11.9893 5.2341C11.9893 4.30039 10.2862 3.54346 8.18531 3.54346C6.08444 3.54346 4.38135 4.30039 4.38135 5.2341C4.38135 6.16782 6.08444 6.92475 8.18531 6.92475Z"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.38135 5.23389V10.3058C4.38135 11.2357 6.072 11.9965 8.18531 11.9965C10.2986 11.9965 11.9893 11.2357 11.9893 10.3058V5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9892 7.77001C11.9892 8.69987 10.2986 9.46066 8.18525 9.46066C6.07194 9.46066 4.3813 8.69987 4.3813 7.77001M8.10072 1.85274C7.11295 1.24316 5.96317 0.948344 4.80396 1.00742C2.6991 1.00742 1 1.76821 1 2.69807C1 3.19681 1.49029 3.64483 2.26799 3.96605"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26799 9.03817C1.49029 8.71695 1 8.26893 1 7.77019V2.69824"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26838 6.50226C1.49044 6.18094 1 5.73278 1 5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <svg
                className="grey_arrow"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1838 3.92419H11.855L0.626878 3.92419C0.383373 3.92419 0.15 4.1606 0.15 4.5C0.15 4.83941 0.383373 5.07581 0.626878 5.07581L11.855 5.07581H12.1838L11.9683 5.32413L9.76914 7.85806C9.57257 8.08457 9.57173 8.46065 9.7675 8.6884L9.76751 8.68841C9.95216 8.90325 10.2417 8.90384 10.427 8.69033L13.7025 4.9163C13.8992 4.68893 13.8989 4.31094 13.7031 4.08456L12.1838 3.92419ZM12.1838 3.92419L11.9683 3.67587L9.76911 1.14194C9.76911 1.14194 9.76911 1.14194 9.7691 1.14194C9.57254 0.915423 9.5717 0.539346 9.76747 0.311601C9.95214 0.0967699 10.2417 0.0961429 10.427 0.30967L13.703 4.08441L12.1838 3.92419Z"
                  fill="#60BF64"
                  stroke="white"
                  stroke-width="0.3"
                />
              </svg>
              <span className="smoney">
                <p>100</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18531 6.92475C10.2862 6.92475 11.9893 6.16782 11.9893 5.2341C11.9893 4.30039 10.2862 3.54346 8.18531 3.54346C6.08444 3.54346 4.38135 4.30039 4.38135 5.2341C4.38135 6.16782 6.08444 6.92475 8.18531 6.92475Z"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.38135 5.23389V10.3058C4.38135 11.2357 6.072 11.9965 8.18531 11.9965C10.2986 11.9965 11.9893 11.2357 11.9893 10.3058V5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9892 7.77001C11.9892 8.69987 10.2986 9.46066 8.18525 9.46066C6.07194 9.46066 4.3813 8.69987 4.3813 7.77001M8.10072 1.85274C7.11295 1.24316 5.96317 0.948344 4.80396 1.00742C2.6991 1.00742 1 1.76821 1 2.69807C1 3.19681 1.49029 3.64483 2.26799 3.96605"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26799 9.03817C1.49029 8.71695 1 8.26893 1 7.77019V2.69824"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.26838 6.50226C1.49044 6.18094 1 5.73278 1 5.23389"
                    stroke="#60BF64"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Mybets;
