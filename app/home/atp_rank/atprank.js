"use client";
import RankLoader from "@/components/common/loader/RankLoader";
import { useDebounce } from "@/hooks";
import { useState } from "react";
import RankRow from "./RankRow";
import "./atprank.scss";

const ATPRank = ({ data, activeRank, setActiveRank }) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  // const [activeRank, setActiveRank] = useState("atp");
  // const { ranks: rankData, isLoading } = useRanks({ rank: activeRank });

  const rankData = data?.ranks;
  const isLoading = data?.isLoading;
  // Determine which dataset to use based on search input
  const ranks = search !== "" ? searchData : rankData;

  // Input change handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  // Debounced search function
  const handleSearch = useDebounce((query) => {
    const filteredRanks = rankData?.filter((rank) =>
      rank["@name"].toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(filteredRanks);
  }, 500);

  return (
    <main className="atprank_app">
      <div className="ranking-container">
        <button
          onClick={() => setActiveRank("atp")}
          className={activeRank === "atp" && "active-button"}
          disabled={isLoading}
        >
          ATP
        </button>
        <button
          onClick={() => setActiveRank("wta")}
          className={activeRank === "wta" && "active-button"}
          disabled={isLoading}
        >
          WTA
        </button>
      </div>
      <div className="search_input">
        <input
          type="search"
          placeholder="Search for a player..."
          value={search}
          onChange={(e) => handleInputChange(e)}
        />
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3833 9.74548L10.3235 9.81575L10.3887 9.881L10.6356 10.1279L10.6649 10.1571H10.7063H11.3872L15.8586 14.6286L14.6286 15.8586L10.1571 11.3872V10.7063V10.6649L10.1279 10.6356L9.881 10.3887L9.81565 10.3234L9.74536 10.3834C8.68511 11.2884 7.33684 11.7856 5.94285 11.7857C4.39324 11.7857 2.90708 11.1701 1.81133 10.0744C0.715585 8.97863 0.1 7.49248 0.1 5.94286C0.1 4.39324 0.715585 2.90708 1.81133 1.81133C2.90708 0.715585 4.39324 0.1 5.94286 0.1C7.49248 0.1 8.97863 0.715585 10.0744 1.81133C11.1701 2.90708 11.7857 4.39324 11.7857 5.94286C11.7857 7.39004 11.2554 8.72045 10.3833 9.74548ZM5.94286 1.72857C3.60191 1.72857 1.72857 3.60191 1.72857 5.94286C1.72857 8.2838 3.60191 10.1571 5.94286 10.1571C8.2838 10.1571 10.1571 8.2838 10.1571 5.94286C10.1571 3.60191 8.2838 1.72857 5.94286 1.72857Z"
              fill="white"
              stroke="#1C1C1E"
              stroke-width="0.2"
            />
          </svg>
        </span>
      </div>
      {isLoading ? (
        <RankLoader />
      ) : (
        <div className="_container">
          {ranks?.length > 0 ? (
            <div className="table_head_body">
              <table className="heading_table">
                <thead>
                  <tr>
                    <th>
                      <span className="_ranking">RANKING</span>
                      <span className="_ranking">PLAYER</span>
                    </th>
                    <th>
                      <span className="_ranking">POINTS</span>
                    </th>
                  </tr>
                </thead>
              </table>
              {/* Chart_Table_1 */}
              {ranks?.map((rank, index) => (
                <RankRow key={rank["@rank"]} rank={rank} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </main>
  );
};

export default ATPRank;
