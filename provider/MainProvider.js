"use client";
import { formatDateWithDot } from "@/utils/formatDate";
import moment from "moment";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MainContext } from "../context";

const MainProvider = ({ children, user, onLogin, onDarkMode, dark }) => {
  const pathname = usePathname();
  const today = moment();
  const formatToday = formatDateWithDot(today);

  const [scoreStatus, setScoreSetStatus] = useState("all");
  const [gameType, setGameType] = useState("single");
  const [liveMatch, setLiveMatch] = useState(0);
  const [selectDate, setSelectDate] = useState("");
  const [hashLink, setHashLink] = useState("");

  useEffect(() => {
    const loadWindowObject = async () => {
      if (typeof window !== "undefined") {
        setHashLink(window.location.hash);
      }
    };

    loadWindowObject();
  }, []);

  const onScoreStatus = (value) => {
    setScoreSetStatus(value);
    // if (value === "live") {
    //   setSelectDate("");
    // }
  };

  const onLiveMatch = (match) => {
    setLiveMatch(match?.length);
  };

  const onSelectDate = (date) => {
    setScoreSetStatus("all");
    if (date === "--.--") return;
    if (date === selectDate) {
      setSelectDate("");
    } else {
      setSelectDate(date);
    }
  };

  const onGameType = (type) => {
    setGameType(type);
    // onSelectDate("");
  };

  const onHashLink = (hash) => {
    setHashLink(hash);
  };

  useEffect(() => {
    setSelectDate(formatToday);
  }, [pathname, formatToday]);

  // change mode
  useEffect(() => {
    hashLink ? onDarkMode(true) : onDarkMode(false);
  }, [hashLink]);

  return (
    <MainContext.Provider
      value={{
        user,
        onLogin,
        scoreStatus,
        onScoreStatus,
        liveMatch,
        onLiveMatch,
        selectDate,
        onSelectDate,
        setSelectDate,
        onGameType,
        gameType,
        hashLink,
        onHashLink,
        dark,
        onDarkMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
