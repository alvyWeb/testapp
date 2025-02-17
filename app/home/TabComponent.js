"use client";
import useNews from "@/api/useNews";
import useRanks from "@/api/useRanks";
import useTournaments from "@/api/useTournaments";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ATPRank from "./atp_rank/atprank";
import News from "./news/news.js";
import "./tab.scss";
import Tournaments from "./tournaments/tournaments";

const TabComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [activeSection, setActiveSection] = useState(tab ? tab : "news");
  const [activeRank, setActiveRank] = useState("atp");

  const tournamentData = useTournaments();
  const newsData = useNews() || {};
  const rankData = useRanks({ rank: activeRank });

  const handleNavClick = (section) => {
    setActiveSection(section);
    router.push(`/?tab=${section}`);
  };

  // scroll top top
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, [activeSection]);

  return (
    <div className="container">
      <nav>
        <button
          id={activeSection === "news" ? "worldbuttoonActive" : "worldbuttoon"}
          onClick={() => handleNavClick("news")}
        >
          News
        </button>
        <button
          id={
            activeSection === "tournament"
              ? "worldbuttoonActive"
              : "worldbuttoon"
          }
          onClick={() => handleNavClick("tournament")}
        >
          Tournaments
        </button>
        <button
          id={activeSection === "ranks" ? "worldbuttoonActive" : "worldbuttoon"}
          onClick={() => handleNavClick("ranks")}
        >
          ATP Rank
        </button>
      </nav>

      <div className="sectionActive">
        {activeSection === "news" && <News newsData={newsData} />}
        {activeSection === "tournament" && (
          <Tournaments tournamentData={tournamentData} />
        )}
        {activeSection === "ranks" && (
          <ATPRank
            data={rankData}
            activeRank={activeRank}
            setActiveRank={setActiveRank}
          />
        )}
      </div>
    </div>
  );
};

export default TabComponent;
