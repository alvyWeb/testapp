"use client";
import DateComp from "@/components/World/Tournaments/DateComp";
import LiveScores from "@/components/World/Tournaments/LiveScores";
import TournamentScoreLoader from "@/components/common/loader/TournamentScoreLoader";
import { MainContext } from "@/context";
import { filterLiveGames } from "@/utils/filterLiveGames";
import { filterWithoutLiveGames } from "@/utils/filterWithoutLiveGames";
import { formatMatchArray } from "@/utils/formatMatchArray";
import { generateCourtName } from "@/utils/generateCourtName";
import { sortTournamentStages } from "@/utils/sortTournamentStages";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import TournamentScore from "./TournamentScore";
import "./score.scss";

const Scores = ({ tournament, isLoading, liveGames }) => {
  const { scoreStatus, onScoreStatus, onSelectDate, onGameType, gameType } =
    useContext(MainContext);

  const searchParams = useSearchParams();
  const court = searchParams.get("court");
  const tournamentArray = formatMatchArray(tournament?.week);
  const sortTournaments = sortTournamentStages(tournamentArray);
  const liveMatchesArray = formatMatchArray(liveGames?.match);
  const liveMatchName = liveGames ? liveGames["@name"] : "";
  const liveMatches = filterLiveGames(liveMatchesArray);
  const [isDelay, setIsDelay] = useState(false);

  const { filteredGames: withoutLiveMatches, liveRoundName } =
    filterWithoutLiveGames(sortTournaments, liveMatches);

  const courtName = generateCourtName(liveRoundName, court, liveMatchName);

  const handleGame = (type) => {
    onGameType(type);
    onScoreStatus("all");
  };

  // fake delay for avoid jumping
  // useEffect(() => {
  //   setIsDelay(true);
  //   setTimeout(() => {
  //     setIsDelay(false);
  //   }, 800);
  // }, [gameType]);

  const loading = isLoading || isDelay;

  return (
    <main className="tournaments_page">
      <div className="main_score_content">
        <div className="live_head">
          <DateComp
            games={sortTournaments}
            isLoading={isLoading}
            gameType={gameType}
          />

          <div className="_game_list">
            <div className="game_sm_playlist">
              <p>
                <span
                  onClick={() => onScoreStatus("all")}
                  className={`${
                    scoreStatus === "all" ? "_all" : "_live padding-left"
                  }`}
                >
                  All
                </span>
                <span
                  onClick={() => onScoreStatus("live")}
                  className={`${
                    scoreStatus === "live" ? "_all" : "_live padding-right"
                  }`}
                >
                  Live
                </span>
              </p>
            </div>
            <div className="game_lg_playlist">
              <p>
                <span
                  onClick={() => handleGame("all")}
                  className={`${gameType === "all" ? "_all" : "_live"}`}
                >
                  All
                </span>
                <span
                  onClick={() => handleGame("single")}
                  className={`${gameType === "single" ? "_all" : "_live"}`}
                >
                  Singles
                </span>
                <span
                  onClick={() => handleGame("doubles")}
                  className={`${
                    gameType === "doubles" ? "_all double" : "_live double"
                  }`}
                >
                  Doubles
                </span>
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <TournamentScoreLoader />
        ) : (
          <div className="tennis_stream">
            <LiveScores liveMatches={liveMatches} round={courtName} />

            {withoutLiveMatches?.map((data) => (
              <TournamentScore data={data} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Scores;
