import { MainContext } from "@/context";
import { formatDate, formatDateWithDot } from "@/utils/formatDate";
import { generateDatesAndSort } from "@/utils/generateDatesAndSort";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const DateComp = ({ games, isLoading, gameType }) => {
  const { selectDate, onSelectDate, setSelectDate } = useContext(MainContext);
  const searchParams = useSearchParams();
  const dateStart = searchParams?.get("start_date");
  const dateEnd = searchParams?.get("end_date");
  const [swiper, setSwiper] = useState(null);
  const [isDelay, setIsDelay] = useState(false);

  const startDate = formatDate(dateStart);
  const endDate = formatDate(dateEnd);
  const today = moment();
  const formatToday = formatDateWithDot(today);
  const targetDate = moment(endDate);
  const isAfterEndDate = targetDate.isSameOrAfter(today, "day");

  const dateArray = generateDatesAndSort(games);
  const dates = isLoading
    ? ["--.--", "--.--", "--.--", "--.--", "--.--"]
    : dateArray;

  const handleSelectDate = (date) => {
    onSelectDate(date);
  };

  useEffect(() => {
    setIsDelay(true);
    setTimeout(() => {
      setIsDelay(false);
    }, 1000);
  }, []);

  useEffect(() => {
    isAfterEndDate ? setSelectDate(formatToday) : setSelectDate("");
  }, [swiper, gameType, formatToday, isDelay]);

  useEffect(() => {
    if (swiper && selectDate) {
      const activeIndex = dates.findIndex((date) => date === selectDate);
      swiper.slideTo(activeIndex - 2);
    }
  }, [swiper, selectDate, dates, formatToday]);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4.6}
      className="score_player_available"
      onSwiper={(swiper) => setSwiper(swiper)}
      style={{ width: "100%", paddingRight: "10px" }}
    >
      {dates?.map((item, idx) => {
        const dateSplit = item?.split(".");
        const formattedDate = `${dateSplit[0]}/${dateSplit?.[1]}`;
        return (
          <SwiperSlide key={idx} className="player_available m_enter">
            <button
              onClick={() => handleSelectDate(item)}
              className={selectDate === item ? "_selected" : ""}
            >
              {formattedDate}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
    // <div className="score_player_available">
    //   {dates?.map((item, idx) => {
    //     const dateSplit = item?.split(".");
    //     const formattedDate = `${dateSplit[0]}/${dateSplit?.[1]}`;
    //     return (
    //       <div key={idx} className="player_available m_enter">
    //         <button
    //           onClick={() => handleSelectDate(item)}
    //           className={selectDate === item ? "_selected" : ""}
    //         >
    //           {formattedDate}
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default DateComp;
