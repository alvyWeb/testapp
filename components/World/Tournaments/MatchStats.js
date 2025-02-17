import { removeDuplicateTypes } from "@/utils/removeDuplicateType";
import { useState } from "react";
import { comparePlayerStats2 } from "./comparePlayerStats";

const statsMenu = ["Statistics"];
const menu = ["Stats", "Recap", "Analysis", "Preview", "H2H & Bios"];

const MatchStats = ({ players }) => {
  const firstPlayer = players[0];
  const secondPlayer = players[1];
  const statsArray = comparePlayerStats2(players);
  const statsType = removeDuplicateTypes(statsArray);
  const [activeMenu, setActiveMenu] = useState("Stats");
  const [activeStats, setActiveStats] = useState("Match");

  return (
    <div className="match-stats">
      {/* <div className="stats-head">
        {menu?.map((item) => (
          <span
            key={item}
            onClick={() => setActiveMenu(item)}
            className={activeMenu === item && "active-stats"}
          >
            {item}
          </span>
        ))}
      </div> */}

      <div className="stats-head">
        {statsMenu?.map((item) => (
          <span
            key={item}
            onClick={() => setActiveStats(item)}
            // className={activeStats === item && "active-stats"}
            className={"active-stats"}
          >
            {item}
          </span>
        ))}
      </div>

      {statsType?.map((stats) => (
        <div key={stats?.type} className="stats-summary">
          <div className="summary-head">
            <span>{stats?.type}</span>

            <div className="summary-info">
              <span>{firstPlayer["@name"]?.slice(0, 3)}</span>
              <span>{secondPlayer["@name"]?.slice(0, 3)}</span>
            </div>
          </div>
          <div className="stats-items">
            {stats?.stats?.map((stat) => (
              <div key={stat?.stateName} className="summary-body">
                <span className="body-item">{stat?.stateName}</span>
                <div className="body-info">
                  <span>{stat?.firstPlayerValue}</span>
                  <span>{stat?.secondPlayerValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchStats;
