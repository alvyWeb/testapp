import { MainContext } from "@/context";
import { useContext } from "react";
import CompleteScore from "./CompleteScore";

const LiveScores = ({ liveMatches, round }) => {
  const { scoreStatus } = useContext(MainContext);
  const gameName = round?.split(":");

  return (
    <>
      {liveMatches?.length > 0 ? (
        <>
          <div>
            <h4>{round}</h4>
          </div>
          {liveMatches?.map((score) => (
            <CompleteScore key={score["@id"]} score={score} round="" isLive />
          ))}
        </>
      ) : (
        <>
          {scoreStatus === "live" && (
            <h4
              style={{
                textAlign: "center",
                paddingTop: "10px",
                opacity: ".7",
              }}
            >
              No live matches available
            </h4>
          )}
        </>
      )}
    </>
  );
};

export default LiveScores;
