import { getPlayerScores } from "@/utils/getPlayerScores";
import { IoMdTime } from "react-icons/io";
import PlayerScore from "./PlyaerScore";

const MatchInfo = ({ players = [], duration, matchStatus, matchDate }) => {
  const playerScores = getPlayerScores(players);

  return (
    <>
      {playerScores && (
        <div className="match-info">
          <div className="info-top">
            <span>{matchStatus ?? ""}</span>
            <span className="time">
              {matchDate} <IoMdTime /> {duration}
            </span>
          </div>
          <div className="stream_">
            <PlayerScore info={playerScores?.player1} />
            <hr style={{ opacity: ".1" }} />
            <PlayerScore info={playerScores?.player2} />
          </div>
        </div>
      )}
    </>
  );
};

export default MatchInfo;
