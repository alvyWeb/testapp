"use client";
import useTournament from "@/api/useTournament.js";
import useTournamentDraw from "@/api/useTournamentDraw.js";
import { useParams, useRouter, useSearchParams } from "next/navigation.js";
import { useContext, useEffect, useState } from "react";

import useLiveGames from "@/api/useLiveGames.js";
import DrawLoader from "@/components/common/loader/DrawLoader.js";
import { MainContext } from "@/context/index.js";
import { formatDate } from "@/utils/formatDate.js";
import { formatDateWithSlash } from "@/utils/formatDateWithSlich.js";
import { formatMatchArray } from "@/utils/formatMatchArray.js";
import moment from "moment";
import Link from "next/link.js";
import { useSwipeable } from "react-swipeable";
import TournamentDraw from "./draws/TournamentDraw.js";
import Score from "./score/page.js";
import "./tab.scss";

const TabComponent = () => {
  const { onSelectDate, gameType } = useContext(MainContext);
  const sections = ["section1", "section2"];
  const [activeSection, setActiveSection] = useState("section1");
  // const [gameType, setGameType] = useState("all");

  const router = useRouter();
  const { id: singleId } = useParams();
  const searchParams = useSearchParams();
  const doubleId = searchParams.get("doubleId");
  const tourName = searchParams.get("name");
  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");

  const [scrollY, setScrollY] = useState({
    section1: 0,
    section2: 0,
  });

  const today = moment();
  const formattedDate = formatDate(startDate);
  const futureDate = moment(formattedDate, "YYYY-MM-DD");
  const isAfter = futureDate.isAfter(today);

  // get data
  const id = gameType === "doubles" ? doubleId : singleId;
  const singlesData = useTournament({ id: singleId });
  const doublesData = useTournament({ id: doubleId });
  const drawData = useTournamentDraw({ id });
  const liveGamesData = useLiveGames({ id });

  let tournamentData = {
    tournament: [],
    isLoading: singlesData?.isLoading || doublesData?.isLoading,
  };

  if (!tournamentData?.isLoading) {
    if (gameType === "doubles") {
      tournamentData = {
        ...tournamentData,
        tournament: doublesData?.tournament,
      };
    } else if (gameType === "single") {
      tournamentData = {
        ...tournamentData,
        tournament: singlesData?.tournament,
      };
    } else if (gameType === "all") {
      const singles = singlesData?.tournament;
      const doubles = doublesData?.tournament;
      const formatSingleWeek = formatMatchArray(singles?.week);
      const formatDoubleWeek = formatMatchArray(doubles?.week);

      const allData = {
        ...singles,
        week: [...formatSingleWeek, ...formatDoubleWeek],
      };

      tournamentData = {
        ...tournamentData,
        tournament: allData,
      };
    }
  }

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSection(),
    onSwipedRight: () => goToPreviousSection(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // calculate scrollY by active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY((prevState) => {
        if (activeSection === "section1") {
          return {
            ...prevState,
            section1: window.scrollY,
          };
        } else {
          return {
            ...prevState,
            section2: window.scrollY,
          };
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // const handleGameType = (type) => {
  //   setGameType(type);
  //   onSelectDate("");
  // };

  // scroll top top
  useEffect(() => {
    window.scrollTo({
      top: scrollY[activeSection],
    });
  }, [activeSection]);

  return (
    // <div className="resultcontainer" {...handlers}>
    <div className="resultcontainer">
      <div className="tour-header">
        <Link href={"/?tab=tournament"}>
          {/* <IoIosArrowBack size={28} /> */}
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1402 13.3882L1.24772 13.2836L1.14021 13.3882L11.6391 24.1787C11.6393 24.1789 11.6395 24.1791 11.6397 24.1793C11.733 24.2772 11.8448 24.3556 11.9686 24.41C12.0927 24.4646 12.2263 24.494 12.3618 24.4966C12.4973 24.4992 12.632 24.4749 12.7581 24.4251C12.8841 24.3753 12.999 24.3009 13.0962 24.2064C13.1933 24.1119 13.2707 23.9991 13.324 23.8744C13.3772 23.7498 13.4052 23.6158 13.4063 23.4803C13.4074 23.3448 13.3817 23.2104 13.3305 23.0849C13.2795 22.9596 13.2041 22.8457 13.1089 22.7497C13.1087 22.7495 13.1085 22.7494 13.1083 22.7492L3.30385 12.6734L13.1083 2.59766C13.1085 2.59746 13.1087 2.59726 13.1089 2.59706C13.2041 2.50107 13.2795 2.38717 13.3305 2.26193C13.3817 2.13643 13.4074 2.00202 13.4063 1.8665C13.4052 1.73097 13.3772 1.59702 13.324 1.47238C13.2707 1.34774 13.1933 1.2349 13.0962 1.14039C12.999 1.04587 12.8841 0.971558 12.7581 0.921747C12.632 0.871937 12.4973 0.847618 12.3618 0.850199C12.2263 0.852777 12.0927 0.882206 11.9686 0.936777C11.8448 0.991239 11.733 1.06966 11.6397 1.16752C11.6395 1.16772 11.6393 1.16792 11.6391 1.16813L1.14021 11.9586L1.24772 12.0632L1.1402 11.9586C0.954035 12.15 0.849873 12.4064 0.849873 12.6734C0.849873 12.9404 0.954035 13.1968 1.1402 13.3882Z"
              stroke-width="0.3"
            />
          </svg>
        </Link>

        <div className="tour-info">
          <h4>{tourName?.slice(0, 25)}</h4>
          <p>
            <span>{formatDateWithSlash(startDate)}</span> -{" "}
            <span>{formatDateWithSlash(endDate)}</span>
          </p>
        </div>
      </div>
      <nav>
        <button
          id={
            activeSection === "section1" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section1")}
        >
          Scores
        </button>
        <button
          id={
            activeSection === "section2" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section2")}
        >
          Draws
        </button>
      </nav>
      {isAfter ? (
        <div
          style={{
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p className="no-results">No results</p>
        </div>
      ) : (
        <div className={"sectionActive "}>
          <div
            style={{
              display: activeSection === "section1" ? "block" : "none",
            }}
          >
            <Score
              tournament={tournamentData?.tournament}
              gameType={gameType}
              liveGames={liveGamesData?.liveGames}
              isLoading={tournamentData?.isLoading}
            />
          </div>

          <div
            style={{
              display: activeSection === "section2" ? "block" : "none",
            }}
          >
            {drawData?.isLoading ? (
              <DrawLoader />
            ) : (
              <>
                <TournamentDraw data={drawData?.draw} />
              </>
            )}
          </div>
        </div>

        // <div className={"sectionActive "}>
        //   {activeSection === "section1" ? (
        //     <Score
        //       tournament={tournamentData?.tournament}
        //       gameType={gameType}
        //       liveGames={liveGamesData?.liveGames}
        //       isLoading={tournamentData?.isLoading}
        //     />
        //   ) : (
        //     <>
        //       {drawData?.isLoading ? (
        //         <DrawLoader />
        //       ) : (
        //         <>
        //           <TournamentDraw data={drawData?.draw} />
        //         </>
        //       )}
        //     </>
        //   )}
        // </div>
      )}
    </div>
  );
};

export default TabComponent;
