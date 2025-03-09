import "./single.scss";

export default function Home(props) {
  const Single = [
    {
      "headTitle": "Yarkon Park, Tel Aviv | Court #23",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 message",
      "myImg": "../user-Image/Noam-Peen.png",
      "myCountryImg": "../flags/ag.png",
      "me": "Mandler T.",
      "myRank": "(PRO)",
      "opTamMateName": "player",
      "opTeaMRank": "(nickname)",
      "precipitation": "25% Precipitation",
      "weather": "Weather - cloudy"
    },
    {
      "headTitle": "Yarkon Park, Tel Aviv | Court #2",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 message",
      "myImg": "../user-Image/Noam-Peen.png",
      "myCountryImg": "../flags/ag.png",
      "me": "Mandler T.",
      "myRank": "(PRO)",
      "opTamMateName": "player",
      "opTeaMRank": "(nickname)",
      "precipitation": "25% Precipitation",
      "weather": "Weather - cloudy"
    },
    {
      "headTitle": "Yarkon Park, Tel Aviv | Court #2",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 message",
      "myImg": "../user-Image/Noam-Peen.png",
      "myCountryImg": "../flags/ag.png",
      "me": "Mandler T.",
      "myRank": "(PRO)",
      "opTamMateName": "player",
      "opTeaMRank": "(nickname)",
      "precipitation": "25% Precipitation",
      "weather": "Weather - cloudy"
    },
    {
      "headTitle": "Yarkon Park, Tel Aviv | Court #2",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 message",
      "myImg": "../user-Image/Noam-Peen.png",
      "myCountryImg": "../flags/ag.png",
      "me": "Mandler T.",
      "myRank": "(PRO)",
      "opTamMateName": "player",
      "opTeaMRank": "(nickname)",
      "precipitation": "25% Precipitation",
      "weather": "Weather - cloudy"
    },
  ]
  return (
    <main>
      <div className="enrollment">
        <div className="enrollment_head">
          <div className="head_body">
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62502 3.45832C6.28245 3.45832 5.95391 3.59441 5.71167 3.83665C5.46944 4.07888 5.33335 4.40742 5.33335 4.74999C5.33335 5.09256 5.46944 5.4211 5.71167 5.66334C5.95391 5.90557 6.28245 6.04166 6.62502 6.04166C6.96759 6.04166 7.29613 5.90557 7.53837 5.66334C7.7806 5.4211 7.91669 5.09256 7.91669 4.74999C7.91669 4.40742 7.7806 4.07888 7.53837 3.83665C7.29613 3.59441 6.96759 3.45832 6.62502 3.45832ZM2.9696 3.45832C3.23646 2.70201 3.73135 2.04709 4.38605 1.58384C5.04074 1.1206 5.82301 0.871826 6.62502 0.871826C7.42703 0.871826 8.2093 1.1206 8.864 1.58384C9.51869 2.04709 10.0136 2.70201 10.2804 3.45832H19.5417C19.8843 3.45832 20.2128 3.59441 20.455 3.83665C20.6973 4.07888 20.8334 4.40742 20.8334 4.74999C20.8334 5.09256 20.6973 5.4211 20.455 5.66334C20.2128 5.90557 19.8843 6.04166 19.5417 6.04166H10.2804C10.0136 6.79797 9.51869 7.45289 8.864 7.91614C8.2093 8.37939 7.42703 8.62816 6.62502 8.62816C5.82301 8.62816 5.04074 8.37939 4.38605 7.91614C3.73135 7.45289 3.23646 6.79797 2.9696 6.04166H1.45835C1.11578 6.04166 0.787242 5.90557 0.545008 5.66334C0.302773 5.4211 0.166687 5.09256 0.166687 4.74999C0.166687 4.40742 0.302773 4.07888 0.545008 3.83665C0.787242 3.59441 1.11578 3.45832 1.45835 3.45832H2.9696ZM14.375 11.2083C14.0324 11.2083 13.7039 11.3444 13.4617 11.5866C13.2194 11.8289 13.0834 12.1574 13.0834 12.5C13.0834 12.8426 13.2194 13.1711 13.4617 13.4133C13.7039 13.6556 14.0324 13.7917 14.375 13.7917C14.7176 13.7917 15.0461 13.6556 15.2884 13.4133C15.5306 13.1711 15.6667 12.8426 15.6667 12.5C15.6667 12.1574 15.5306 11.8289 15.2884 11.5866C15.0461 11.3444 14.7176 11.2083 14.375 11.2083ZM10.7196 11.2083C10.9865 10.452 11.4814 9.79709 12.136 9.33384C12.7907 8.8706 13.573 8.62183 14.375 8.62183C15.177 8.62183 15.9593 8.8706 16.614 9.33384C17.2687 9.79709 17.7636 10.452 18.0304 11.2083H19.5417C19.8843 11.2083 20.2128 11.3444 20.455 11.5866C20.6973 11.8289 20.8334 12.1574 20.8334 12.5C20.8334 12.8426 20.6973 13.1711 20.455 13.4133C20.2128 13.6556 19.8843 13.7917 19.5417 13.7917H18.0304C17.7636 14.548 17.2687 15.2029 16.614 15.6661C15.9593 16.1294 15.177 16.3782 14.375 16.3782C13.573 16.3782 12.7907 16.1294 12.136 15.6661C11.4814 15.2029 10.9865 14.548 10.7196 13.7917H1.45835C1.11578 13.7917 0.787242 13.6556 0.545008 13.4133C0.302773 13.1711 0.166687 12.8426 0.166687 12.5C0.166687 12.1574 0.302773 11.8289 0.545008 11.5866C0.787242 11.3444 1.11578 11.2083 1.45835 11.2083H10.7196ZM6.62502 18.9583C6.28245 18.9583 5.95391 19.0944 5.71167 19.3366C5.46944 19.5789 5.33335 19.9074 5.33335 20.25C5.33335 20.5926 5.46944 20.9211 5.71167 21.1633C5.95391 21.4056 6.28245 21.5417 6.62502 21.5417C6.96759 21.5417 7.29613 21.4056 7.53837 21.1633C7.7806 20.9211 7.91669 20.5926 7.91669 20.25C7.91669 19.9074 7.7806 19.5789 7.53837 19.3366C7.29613 19.0944 6.96759 18.9583 6.62502 18.9583ZM2.9696 18.9583C3.23646 18.202 3.73135 17.5471 4.38605 17.0838C5.04074 16.6206 5.82301 16.3718 6.62502 16.3718C7.42703 16.3718 8.2093 16.6206 8.864 17.0838C9.51869 17.5471 10.0136 18.202 10.2804 18.9583H19.5417C19.8843 18.9583 20.2128 19.0944 20.455 19.3366C20.6973 19.5789 20.8334 19.9074 20.8334 20.25C20.8334 20.5926 20.6973 20.9211 20.455 21.1633C20.2128 21.4056 19.8843 21.5417 19.5417 21.5417H10.2804C10.0136 22.298 9.51869 22.9529 8.864 23.4161C8.2093 23.8794 7.42703 24.1282 6.62502 24.1282C5.82301 24.1282 5.04074 23.8794 4.38605 23.4161C3.73135 22.9529 3.23646 22.298 2.9696 21.5417H1.45835C1.11578 21.5417 0.787242 21.4056 0.545008 21.1633C0.302773 20.9211 0.166687 20.5926 0.166687 20.25C0.166687 19.9074 0.302773 19.5789 0.545008 19.3366C0.787242 19.0944 1.11578 18.9583 1.45835 18.9583H2.9696Z"
                fill="#145E94"
              />
            </svg>

            <span className="dtae_hour">
              <p>Date | Hour</p>
              <img src="./Stock/enrollment/svg/bottom arrow.svg" alt="" />
            </span>
          </div>
          <div className="head_body_bottom">
            <p className="d_games">Doubles games</p>
            <p className="s_games">Singles games</p>
          </div>
        </div>
        {
          Single.map((item) => (
            <div className="enrollment_container">
              <div className="container_heading">
                <div className="container_top_head">
                  <p>{item.headTitle}</p>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1172 12.0177C13.0444 12.0177 12.0912 12.539 11.4973 13.3415L6.38357 10.7282C6.46936 10.4367 6.51562 10.1285 6.51562 9.80963C6.51562 9.37776 6.43096 8.96535 6.27766 8.58785L11.6371 5.36775C12.2351 6.06963 13.125 6.51562 14.1172 6.51562C15.9135 6.51562 17.375 5.05417 17.375 3.25781C17.375 1.46145 15.9135 0 14.1172 0C12.3208 0 10.8594 1.46145 10.8594 3.25781C10.8594 3.673 10.9376 4.0702 11.0798 4.43569L5.70696 7.66382C5.10941 6.98265 4.23302 6.55182 3.25781 6.55182C1.46145 6.55182 0 8.01328 0 9.80963C0 11.606 1.46145 13.0674 3.25781 13.0674C4.34817 13.0674 5.31501 12.529 5.90667 11.704L11.0055 14.3097C10.9106 14.615 10.8594 14.9394 10.8594 15.2755C10.8594 17.0719 12.3208 18.5333 14.1172 18.5333C15.9135 18.5333 17.375 17.0719 17.375 15.2755C17.375 13.4792 15.9135 12.0177 14.1172 12.0177ZM14.1172 1.08594C15.3148 1.08594 16.2891 2.06024 16.2891 3.25781C16.2891 4.45538 15.3148 5.42969 14.1172 5.42969C12.9196 5.42969 11.9453 4.45538 11.9453 3.25781C11.9453 2.06024 12.9196 1.08594 14.1172 1.08594ZM3.25781 11.9815C2.06024 11.9815 1.08594 11.0072 1.08594 9.80963C1.08594 8.61206 2.06024 7.63776 3.25781 7.63776C4.45538 7.63776 5.42969 8.61206 5.42969 9.80963C5.42969 11.0072 4.45538 11.9815 3.25781 11.9815ZM14.1172 17.4474C12.9196 17.4474 11.9453 16.4731 11.9453 15.2755C11.9453 14.0779 12.9196 13.1036 14.1172 13.1036C15.3148 13.1036 16.2891 14.0779 16.2891 15.2755C16.2891 16.4731 15.3148 17.4474 14.1172 17.4474Z" fill="#000000" />
                  </svg>
                </div>
                <div className="container_bottom_head">
                  <span className="_calender">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1876 2.4H12.1875H10.4125V1.5625C10.4125 1.4531 10.369 1.34818 10.2917 1.27082C10.2143 1.19346 10.1094 1.15 10 1.15C9.8906 1.15 9.78568 1.19346 9.70832 1.27082C9.63096 1.34818 9.5875 1.4531 9.5875 1.5625V2.4H5.4125V1.5625C5.4125 1.4531 5.36904 1.34818 5.29168 1.27082C5.21432 1.19346 5.1094 1.15 5 1.15C4.8906 1.15 4.78568 1.19346 4.70832 1.27082C4.63096 1.34818 4.5875 1.4531 4.5875 1.5625V2.4H2.8125L2.81238 2.4C2.37165 2.40053 1.94913 2.57584 1.63748 2.88748C1.32584 3.19913 1.15053 3.62165 1.15 4.06238V4.0625L1.15 12.1875L1.15 12.1876C1.15053 12.6283 1.32584 13.0509 1.63748 13.3625C1.94913 13.6742 2.37165 13.8495 2.81238 13.85H2.8125H12.1875H12.1876C12.6284 13.8496 13.051 13.6744 13.3627 13.3627C13.6744 13.051 13.8496 12.6284 13.85 12.1876V12.1875V4.0625V4.06242C13.8496 3.62163 13.6744 3.19899 13.3627 2.8873C13.051 2.57561 12.6284 2.40035 12.1876 2.4ZM13.025 12.1875C13.025 12.4096 12.9368 12.6226 12.7797 12.7797C12.6226 12.9368 12.4096 13.025 12.1875 13.025H2.8125C2.59038 13.025 2.37736 12.9368 2.2203 12.7797C2.06324 12.6226 1.975 12.4096 1.975 12.1875V6.975H13.025V12.1875ZM13.025 6.15H1.975V4.0625C1.975 3.60014 2.34907 3.225 2.8125 3.225H4.5875V4.0625C4.5875 4.1719 4.63096 4.27682 4.70832 4.35418C4.78568 4.43154 4.8906 4.475 5 4.475C5.1094 4.475 5.21432 4.43154 5.29168 4.35418C5.36904 4.27682 5.4125 4.1719 5.4125 4.0625V3.225H9.5875V4.0625C9.5875 4.1719 9.63096 4.27682 9.70832 4.35418C9.78568 4.43154 9.8906 4.475 10 4.475C10.1094 4.475 10.2143 4.43154 10.2917 4.35418C10.369 4.27682 10.4125 4.1719 10.4125 4.0625V3.225H12.1875C12.4096 3.225 12.6226 3.31324 12.7797 3.4703C12.9368 3.62736 13.025 3.84038 13.025 4.0625V6.15Z" fill="#145E94" stroke="#145E94" stroke-width="0.2" />
                    </svg>
                    <p>{item.date}</p>
                  </span>
                  <span className="_time">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_267_261)">
                        <path d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z" fill="#145E94" />
                        <path d="M8.75003 9.1875C8.67128 9.1875 8.59253 9.17 8.52253 9.12625L6.33503 7.81375C6.27024 7.77481 6.21676 7.7196 6.17992 7.65359C6.14308 7.58759 6.12416 7.51309 6.12503 7.4375V3.9375C6.12503 3.6925 6.31753 3.5 6.56253 3.5C6.80753 3.5 7.00003 3.6925 7.00003 3.9375V7.1925L8.97753 8.37375C9.05898 8.42367 9.12194 8.49879 9.15685 8.58771C9.19177 8.67663 9.19674 8.77452 9.17102 8.86652C9.1453 8.95853 9.09028 9.03964 9.01431 9.09756C8.93834 9.15548 8.84556 9.18706 8.75003 9.1875Z" fill="#145E94" />
                      </g>
                      <defs>
                        <clipPath id="clip0_267_261">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>{item.time}</p>
                  </span>
                  <span className="_comment">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z" stroke="#145E94" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{item.comments}</p>
                  </span>
                </div>
              </div>
              <div className="container_body">
                <div className="current_player">
                  <div className="_kabir">
                    <span>
                      <img src={item.myImg} />
                      <img src={item.myCountryImg} />
                    </span>
                    <p className="_name">{item.me}</p>
                    <p className="_rank">{item.myRank}</p>
                  </div>
                </div>
                <span>
                  <p>VS.</p>
                </span>
                <div className="add_player">
                  <div className="_add">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6667 7.4445H8.55555V1.33339C8.55555 1.18605 8.49702 1.04474 8.39283 0.940551C8.28864 0.836364 8.14733 0.777832 7.99999 0.777832C7.85265 0.777832 7.71134 0.836364 7.60715 0.940551C7.50297 1.04474 7.44444 1.18605 7.44444 1.33339V7.4445H1.33332C1.18598 7.4445 1.04467 7.50303 0.940487 7.60722C0.836301 7.7114 0.777769 7.85271 0.777769 8.00005C0.775027 8.07226 0.787795 8.14421 0.815211 8.21106C0.842626 8.27791 0.884053 8.33811 0.9367 8.3876C0.989347 8.43709 1.05199 8.47471 1.12041 8.49795C1.18883 8.52118 1.26143 8.52948 1.33332 8.52228H7.44444V14.6667C7.44444 14.8141 7.50297 14.9554 7.60715 15.0596C7.71134 15.1637 7.85265 15.2223 7.99999 15.2223C8.14733 15.2223 8.28864 15.1637 8.39283 15.0596C8.49702 14.9554 8.55555 14.8141 8.55555 14.6667V8.55561H14.6667C14.814 8.55561 14.9553 8.49708 15.0595 8.39289C15.1637 8.28871 15.2222 8.1474 15.2222 8.00005C15.2222 7.85271 15.1637 7.7114 15.0595 7.60722C14.9553 7.50303 14.814 7.4445 14.6667 7.4445Z"
                          fill="#145E94"
                        />
                      </svg>
                    </span>

                    <p className="_name">{item.opTamMateName}</p>
                    <p className="_rank">{item.opTeaMRank}</p>
                  </div>
                </div>
              </div>
              <div className="container_footer">
                <div className="_item">
                  <div className="precipitation">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.16812 1.07436C7.21167 1.03071 7.26339 0.996071 7.32034 0.97244C7.37729 0.948809 7.43834 0.936646 7.5 0.936646C7.56166 0.936646 7.62271 0.948809 7.67966 0.97244C7.7366 0.996071 7.78833 1.03071 7.83188 1.07436C8.07656 1.31998 9.15188 2.43373 10.1691 3.88967C11.1722 5.32498 12.1875 7.18592 12.1875 8.90623C12.1875 10.575 11.6466 11.8734 10.7663 12.7547C9.88969 13.6331 8.71031 14.0625 7.5 14.0625C6.28969 14.0625 5.11031 13.6331 4.23375 12.7547C3.35344 11.8734 2.8125 10.5759 2.8125 8.90623C2.8125 7.18592 3.82781 5.32498 4.83094 3.89061C5.53331 2.89077 6.31488 1.94899 7.16812 1.07436ZM5.59875 4.42686C4.60969 5.84248 3.75 7.49717 3.75 8.90623C3.75 10.3659 4.21875 11.4122 4.8975 12.0919C5.57812 12.7762 6.51 13.125 7.5 13.125C8.49 13.125 9.42094 12.7753 10.1025 12.0919C10.7822 11.4122 11.25 10.3669 11.25 8.90623C11.25 7.49717 10.3912 5.84342 9.40125 4.42686C8.82105 3.60365 8.18585 2.82061 7.5 2.08311C6.81414 2.82061 6.17894 3.60364 5.59875 4.42686Z" fill="#145E94" />
                    </svg>

                    <p>{item.precipitation}</p>
                  </div>
                  <div className="weather">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.45 6.65029C12.7917 6.65029 14.1198 8.14559 14.3127 9.95059H14.3716C15.8783 9.95059 17.1 11.1257 17.1 12.5754C17.1 14.0251 15.8783 15.2003 14.3716 15.2003H6.5284C5.0217 15.2003 3.8 14.0251 3.8 12.5754C3.8 11.1257 5.0217 9.95059 6.5284 9.95059H6.5873C6.78205 8.13324 8.10825 6.65029 10.45 6.65029ZM10.45 7.60029C8.8825 7.60029 7.51735 8.80679 7.51735 10.474C7.51735 10.7381 7.27605 10.9452 6.9996 10.9452H6.4771C5.5233 10.9452 4.75 11.6853 4.75 12.5982C4.75 13.5093 5.5233 14.2503 6.4771 14.2503H14.4229C15.3767 14.2503 16.15 13.5102 16.15 12.5973C16.15 11.6853 15.3767 10.9452 14.4229 10.9452H13.9004C13.6249 10.9452 13.3826 10.7381 13.3826 10.474C13.3826 8.78589 12.0175 7.60029 10.45 7.60029ZM7.9724 3.80029C9.3556 3.80029 10.5621 4.58689 11.1577 5.74304C10.753 5.69286 10.3441 5.68585 9.93795 5.72214C9.70329 5.42011 9.40283 5.17559 9.05942 5.00718C8.71602 4.83877 8.33872 4.75091 7.95625 4.75029C7.35889 4.75313 6.7817 4.9667 6.32637 5.35338C5.87105 5.74006 5.5668 6.27503 5.46725 6.86404L5.4321 7.06354C5.39401 7.28432 5.27912 7.48454 5.10772 7.62882C4.93632 7.77311 4.71944 7.85217 4.4954 7.85204H4.2503C3.477 7.85204 2.85 8.48664 2.85 9.26944C2.85 9.81094 3.14925 10.2812 3.5891 10.5196C3.3858 10.778 3.2186 11.0668 3.0951 11.3765C2.64253 11.1008 2.28969 10.6879 2.08788 10.1979C1.88608 9.70788 1.84581 9.16626 1.97295 8.65178C2.10008 8.13731 2.38799 7.67679 2.79482 7.33717C3.20165 6.99755 3.70619 6.79654 4.2351 6.76334L4.44505 6.75859C4.59154 5.92956 5.0254 5.17862 5.67045 4.63763C6.3155 4.09664 7.13052 3.80018 7.9724 3.80029Z" fill="#145E94" />
                    </svg>

                    <p>{item.weather}</p>
                  </div>
                </div>
                <a href="">
                  <button>Sing up</button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
