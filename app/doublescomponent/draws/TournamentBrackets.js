import PlayerScore from "@/components/World/Tournaments/PlyaerScore";
import { formatMatchArray } from "@/utils/formatMatchArray";
import { Bracket, Seed, SeedItem } from "react-brackets";
import "./tournamentBrack.scss";

const TournamentBrackets = ({ tournament }) => {
  const formatTourArray = formatMatchArray(tournament?.round);

  const roundData = [];
  formatTourArray?.forEach((data) => {
    const match = formatMatchArray(data?.match);
    const round = {
      title: data["@name"],
      seeds: match,
    };

    roundData.push(round);
  });

  return (
    <div
      style={{
        overflow: "hidden",
        overflowX: "scroll",
        marginTop: "20px",
      }}
    >
      <Bracket
        rounds={roundData}
        renderSeedComponent={CustomSeed}
        mobileBreakpoint={0}
      />
    </div>
  );
};

export default TournamentBrackets;

const CustomSeed = ({ seed, roundIndex, seedIndex }) => {
  // const isLineConnector =
  //   rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;
  // const Wrapper = isLineConnector ? SingleLineSeed : Seed;

  const status = seed["@status"];
  const matchNumber = seed["@match_number"];
  const playerOne = seed?.player[0];
  const playerTwo = seed?.player[1];

  return (
    <Seed>
      <SeedItem>
        <div className=" _head_c_d _main_stream">
          <div className="_stream">
            <div className="stream_head">
              <p>
                <span className="_live">
                  {status} #{matchNumber}
                </span>
              </p>
            </div>
          </div>

          <PlayerScore info={playerOne} isDraw />
          <hr style={{ opacity: ".1", width: "90%" }} />
          <PlayerScore info={playerTwo} isDraw />
        </div>
      </SeedItem>
    </Seed>
  );
};
