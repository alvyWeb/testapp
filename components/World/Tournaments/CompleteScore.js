import { getTimeDifference } from "@/utils/calculateTimeDiff";
import { convertUTCToLocalTime } from "@/utils/convertUTCToLocalTime";
import { getPlayerScores } from "@/utils/getPlayerScores";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import PlayerScore from "./PlyaerScore";

const CompleteScore = ({ score, round, isLive }) => {
  const status = score["@status"];
  const time = score["@time"];
  const date = score["@date"];
  const matchId = score["@id"];
  const playerScores = getPlayerScores(score?.player);
  const playerOne = playerScores?.player1;
  const playerTwo = playerScores?.player2;
  const court = score["@court"];
  const [day, month] = date?.split(".");

  // match stats info
  const searchParams = useSearchParams();
  const router = useRouter();
  const { id: tournamentId } = useParams();
  const doubleTournamentId = searchParams?.get("doubleId");
  const dPlayerId2 = playerOne["@dp2"];
  const statsId = dPlayerId2 ? doubleTournamentId : tournamentId;
  const roundFormat = round.replace("ATP ", "");
  const formatTime = convertUTCToLocalTime(time);
  const { hours, minutes } = getTimeDifference(time);

  const handleMatch = () => {
    router.push(
      `/match/${statsId}?matchId=${matchId}&round=${roundFormat}&date=${date}&link=World`
    );
  };

  return (
    <div onClick={handleMatch} className={`stream_ _head_c_d  `}>
      <div className="_stream">
        <div className={`stream_head ${isLive && "live_stream"} `}>
          <p>
            <span className="_live">
              {isLive
                ? "LIVE"
                : // : status === "Not Started"
                  // ? "ESTIMATED START: "
                  status}
              {(court || isLive) && <GoDotFill size={8} />}
              {isLive && formatTime}
              {court && !isLive && "Court:"} {court?.slice(0, 15)}
            </span>
          </p>

          <p>
            {isLive ? (
              <span>
                {hours > 0 && `${hours}h`} {minutes}m
              </span>
            ) : (
              <span>
                {day}/{month} {formatTime}
              </span>
              // <span>{formatDateWithSlash(date)}</span>
            )}
          </p>
        </div>
      </div>

      <PlayerScore info={playerOne} isLive={isLive} />
      <hr style={{ opacity: ".2" }} />
      <PlayerScore info={playerTwo} isLive={isLive} />
    </div>
  );
};

export default CompleteScore;
