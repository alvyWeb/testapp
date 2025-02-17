"use client";
import useMatchStats from "@/api/useMatchStats";
import MatchStatsLoader from "@/components/common/loader/MatchStatsLoader";
import { MainContext } from "@/context";
import { checkTournamentStatus } from "@/utils/checkLiveTornament";
import { findMatchById } from "@/utils/findMatchById";
import { formatMatchArray } from "@/utils/formatMatchArray";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "../../../app/doublescomponent/score/score.scss";
import MatchHeader from "./MatchHeader";
import MatchInfo from "./MatchInfo";
import MatchStats from "./MatchStats";
import "./matchSummary.scss";

const MatchSummary = () => {
  const router = useRouter();
  const { id } = useParams();
  const { gameType } = useContext(MainContext);
  const searchParams = useSearchParams();
  const matchId = searchParams?.get("matchId");
  const round = searchParams?.get("round");
  const date = searchParams?.get("date");
  // const isLiveTournament = checkLiveTournament(date);
  const tourStatus = checkTournamentStatus(date);

  const { stats, isLoading } = useMatchStats({ id, date });

  const statsArray = formatMatchArray(stats);
  const roundMatches =
    statsArray && statsArray?.filter((d) => d["@number"] === round);
  const roundMatchData = findMatchById(roundMatches, matchId);
  const roundLiveData =
    statsArray && statsArray?.find((d) => d["@id"] === matchId);
  const matchStats = tourStatus === "normal" ? roundMatchData : roundLiveData;
  const players = matchStats?.player;
  const matchStatus = matchStats && matchStats["@status"];
  const matchDate = matchStats && matchStats["@date"];

  // when stats not found, will back
  useEffect(() => {
    if ((!matchStats && !isLoading) || (matchStats && !players[0]?.stats)) {
      toast.warn("There is no data!");
      router.back();
    }
  }, [matchStats, isLoading]);

  return (
    <>
      {isLoading ? (
        <MatchStatsLoader />
      ) : (
        <>
          <div className="match-container">
            <MatchHeader status={matchStatus} round={round} players={players} />

            {matchStats ? (
              <>
                <MatchInfo
                  players={players}
                  duration={matchStats?.match_duration?.match["@duration"]}
                  matchStatus={matchStatus}
                  matchDate={matchDate}
                />
                <MatchStats players={players} />
              </>
            ) : (
              <div>
                <p className="error-msg">Match not found</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MatchSummary;
