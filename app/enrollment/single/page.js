"use client";
import "./single.scss";
import Link from "next/link";
import SingleGameN from "@/components/modal/registration/single";
import ModalDialog from "@/components/common/ModalDialog";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
import { useContext, useState } from "react";
// import { toast } from "react-toastify";

export default function SingleGame(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModalOpen = (type) => {
    setIsOpenModal(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setModalType("");
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedHeadTitle, setSelectedHeadTitle] = useState("");


  const Single = [
    {
      "headTitle": "פארק הירקון, תל אביב | מגרש #2",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 הודעות",
      "myImg": "../user-Image/g3.png",
      "myCountryImg": "../flags/br.png",
      "me": "עוז י.",
      "myRank": "(פרו)",
      "opTamMateName": "שחקן",
      "opTeaMRank": "(כינוי)",
      "precipitation": "25% משקעים צפוי",
      "weather": "מזג אוויר צפוי- מעונן",
      "buttonLink": '#',
      "buttontext": 'הירשם (רמה A)',
    },
    {
      "headTitle": "פארק הירקון, תל אביב | מגרש #3",
      "date": "03/24/2023",
      "time": "11:00",
      "comments": "26 הודעות",
      "myImg": "../user-Image/g3.png",
      "myCountryImg": "../flags/br.png",
      "me": "עוז י.",
      "myRank": "(פרו)",
      "opTamMateName": "שחקן",
      "opTeaMRank": "(כינוי)",
      "precipitation": "25% משקעים צפוי",
      "weather": "מזג אוויר צפוי- מעונן",
      "buttonLink": '#',
      "buttontext": 'הירשם',
    },
    {
      "headTitle": "פארק הירקון, תל אביב | מגרש #4",
      "date": "04/24/2023",
      "time": "13:00",
      "comments": "26 הודעות",
      "myImg": "../user-Image/g3.png",
      "myCountryImg": "../flags/br.png",
      "me": "עוז י.",
      "myRank": "(פרו)",
      "opTamMateName": "שחקן",
      "opTeaMRank": "(כינוי)",
      "precipitation": "25% משקעים צפוי",
      "weather": "מזג אוויר צפוי- מעונן",
      "buttonLink": '#',
      "buttontext": 'הירשם (רמה A)',
    },
    {
      "headTitle": "פארק הירקון, תל אביב | מגרש #2",
      "date": "02/24/2023",
      "time": "14:00",
      "comments": "26 הודעות",
      "myImg": "../user-Image/g3.png",
      "myCountryImg": "../flags/br.png",
      "me": "עוז י.",
      "myRank": "(פרו)",
      "opTamMateName": "שחקן",
      "opTeaMRank": "(כינוי)",
      "precipitation": "25% משקעים צפוי",
      "weather": "מזג אוויר צפוי- מעונן",
      "buttonLink": '#',
      "buttontext": 'הירשם',
    },
  ]

  // Get unique values for filtering
  const uniqueDates = [...new Set(Single.map((item) => item.date))];
  const uniqueTimes = [...new Set(Single.map((item) => item.time))];
  const uniqueHeadTitles = [...new Set(Single.map((item) => item.headTitle))];

  const filteredGames = Single.filter((game) => {
    return (
      (!selectedDate || game.date === selectedDate) &&
      (!selectedTime || game.time === selectedTime) &&
      (!selectedHeadTitle || game.headTitle === selectedHeadTitle)
    );
  });

  const router = useRouter();
  const handleClick = () => {
    handleModalOpen("Single"); // Open the correct modal
  };

  return (
    <main>
      <div className="enrollment">
        <div className="enrollment_head">
          <div className="head_body">
            <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.96954 3.70832H3.14644L3.2053 3.54151C3.45495 2.83397 3.91792 2.22129 4.53039 1.78792C5.14286 1.35455 5.87467 1.12183 6.62496 1.12183C7.37525 1.12183 8.10706 1.35455 8.71953 1.78792C9.332 2.22129 9.79497 2.83397 10.0446 3.54151L10.1035 3.70832H10.2804H19.5416C19.8179 3.70832 20.0828 3.81807 20.2782 4.01342C20.4735 4.20877 20.5833 4.47372 20.5833 4.74999C20.5833 5.02626 20.4735 5.29121 20.2782 5.48656C20.0828 5.68191 19.8179 5.79166 19.5416 5.79166H10.2804H10.1035L10.0446 5.95847C9.79497 6.66601 9.332 7.27869 8.71953 7.71206C8.10706 8.14543 7.37525 8.37816 6.62496 8.37816C5.87467 8.37816 5.14286 8.14543 4.53039 7.71206C3.91792 7.27869 3.45495 6.66601 3.2053 5.95847L3.14644 5.79166H2.96954H1.45829C1.18203 5.79166 0.917074 5.68191 0.721723 5.48656C0.526373 5.29121 0.416626 5.02626 0.416626 4.74999C0.416626 4.47372 0.526373 4.20877 0.721723 4.01342C0.917074 3.81807 1.18203 3.70832 1.45829 3.70832H2.96954ZM10.7195 11.4583H10.8964L10.9553 11.2915C11.2049 10.584 11.6679 9.97129 12.2804 9.53792C12.8929 9.10455 13.6247 8.87183 14.375 8.87183C15.1252 8.87183 15.8571 9.10455 16.4695 9.53792C17.082 9.97129 17.545 10.584 17.7946 11.2915L17.8535 11.4583H18.0304H19.5416C19.8179 11.4583 20.0828 11.5681 20.2782 11.7634C20.4735 11.9588 20.5833 12.2237 20.5833 12.5C20.5833 12.7763 20.4735 13.0412 20.2782 13.2366C20.0828 13.4319 19.8179 13.5417 19.5416 13.5417H18.0304H17.8535L17.7946 13.7085C17.545 14.416 17.082 15.0287 16.4695 15.4621C15.8571 15.8954 15.1252 16.1282 14.375 16.1282C13.6247 16.1282 12.8929 15.8954 12.2804 15.4621C11.6679 15.0287 11.2049 14.416 10.9553 13.7085L10.8964 13.5417H10.7195H1.45829C1.18203 13.5417 0.917074 13.4319 0.721723 13.2366C0.526373 13.0412 0.416626 12.7763 0.416626 12.5C0.416626 12.2237 0.526373 11.9588 0.721724 11.7634C0.917073 11.5681 1.18202 11.4583 1.45829 11.4583H10.7195ZM2.96954 19.2083H3.14644L3.2053 19.0415C3.45495 18.334 3.91792 17.7213 4.53039 17.2879C5.14286 16.8546 5.87467 16.6218 6.62496 16.6218C7.37525 16.6218 8.10706 16.8546 8.71953 17.2879C9.332 17.7213 9.79497 18.334 10.0446 19.0415L10.1035 19.2083H10.2804H19.5416C19.8179 19.2083 20.0828 19.3181 20.2782 19.5134C20.4735 19.7088 20.5833 19.9737 20.5833 20.25C20.5833 20.5263 20.4735 20.7912 20.2782 20.9866C20.0828 21.1819 19.8179 21.2917 19.5416 21.2917H10.2804H10.1035L10.0446 21.4585C9.79497 22.166 9.332 22.7787 8.71953 23.2121C8.10706 23.6454 7.37525 23.8782 6.62496 23.8782C5.87467 23.8782 5.14286 23.6454 4.53039 23.2121C3.91792 22.7787 3.45495 22.166 3.2053 21.4585L3.14644 21.2917H2.96954H1.45829C1.18203 21.2917 0.917074 21.1819 0.721724 20.9866C0.526373 20.7912 0.416626 20.5263 0.416626 20.25C0.416626 19.9737 0.526373 19.7088 0.721724 19.5134C0.917073 19.3181 1.18203 19.2083 1.45829 19.2083H2.96954ZM6.62496 3.20832C6.21608 3.20832 5.82396 3.37075 5.53484 3.65987C5.24572 3.94899 5.08329 4.34112 5.08329 4.74999C5.08329 5.15887 5.24572 5.551 5.53484 5.84011C5.82396 6.12923 6.21608 6.29166 6.62496 6.29166C7.03384 6.29166 7.42596 6.12923 7.71508 5.84011C8.0042 5.551 8.16663 5.15887 8.16663 4.74999C8.16663 4.34112 8.0042 3.94899 7.71508 3.65987C7.42596 3.37075 7.03384 3.20832 6.62496 3.20832ZM14.375 10.9583C13.9661 10.9583 13.574 11.1207 13.2848 11.4099C12.9957 11.699 12.8333 12.0911 12.8333 12.5C12.8333 12.9089 12.9957 13.301 13.2848 13.5901C13.574 13.8792 13.9661 14.0417 14.375 14.0417C14.7838 14.0417 15.176 13.8792 15.4651 13.5901C15.7542 13.301 15.9166 12.9089 15.9166 12.5C15.9166 12.0911 15.7542 11.699 15.4651 11.4099C15.176 11.1207 14.7838 10.9583 14.375 10.9583ZM6.62496 18.7083C6.21608 18.7083 5.82396 18.8708 5.53484 19.1599C5.24572 19.449 5.08329 19.8411 5.08329 20.25C5.08329 20.6589 5.24572 21.051 5.53484 21.3401C5.82396 21.6292 6.21608 21.7917 6.62496 21.7917C7.03384 21.7917 7.42596 21.6292 7.71508 21.3401C8.0042 21.051 8.16663 20.6589 8.16663 20.25C8.16663 19.8411 8.0042 19.449 7.71508 19.1599C7.42596 18.8708 7.03384 18.7083 6.62496 18.7083Z" fill="#145E94" stroke="#F5F6F8" stroke-width="0.5"/>
            </svg>

            <span className="dtae_hour">
              
                <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
                  <option value="">בחר תאריך</option>
                  {uniqueDates.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>

                <select onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime}>
                  <option value="">בחר שעה</option>
                  {uniqueTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>

                <select onChange={(e) => setSelectedHeadTitle(e.target.value)} value={selectedHeadTitle}>
                  <option value="">בחר מיקום</option>
                  {uniqueHeadTitles.map((title) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>

              {/* <img src="../placement/svg/bottom_arrow.svg" alt="" /> */}
            </span>
          </div>
          <div className="head_body_bottom">
            <Link href="/enrollment/double" className="d_games">זוגות</Link>
            <p className="s_games active">יחידים</p>
          </div>
        </div>
        {/* {
          // Single.map((item) => ( */}
            {filteredGames.length > 0 ? (
              filteredGames.map((item, index) => (
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
                  <p>.VS</p>
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
                <Link className="butn_ne" href="#" onClick={handleClick}>
                    {item.buttontext}
                </Link>
              </div>
            </div>
              ))
            ) : (
              <p>לא נמצאו תוצאות</p>
            )}
          {/* ))} */}
      </div>
      {isOpenModal && (
        <ModalDialog onClose={handleCloseModal}>
          <SingleGameN />
        </ModalDialog>
      )}
    </main>
  );
}
