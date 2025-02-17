"use client";
import useNews from "@/api/useNews";
import useRanks from "@/api/useRanks";
import useTournaments from "@/api/useTournaments";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ATPRank from "./atp_rank/atprank";
import News from "./news/news.js";
import "./tab.scss";
import SystemMessage from "./news/system";
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
      <div className="sectionActive">
        <News newsData={newsData} />
      </div>
      <SystemMessage />
    </div>
  );
};

export default TabComponent;
