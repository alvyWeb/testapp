import PlayerScore from "@/components/World/Tournaments/PlyaerScore";
import { formatMatchArray } from "@/utils/formatMatchArray";
import "./TournamentDraw.scss"; // Import CSS for styling

const TournamentDraw = ({ data }) => {
  return (
    <div className="tournament-container">
      <div className="tournament-brackets">
        {data?.round?.map((round, index) => {
          const matches = formatMatchArray(round?.match);
          const bracketNumber = index + 1;

          return (
            <ul
              key={round["@name"]}
              className={`bracket bracket-${bracketNumber}`}
            >
              <div className="bracket-round">
                {round["@name"] === "Final¬" ? "Final" : round["@name"]}
              </div>
              {matches?.map((seed) => {
                const status = seed["@status"];
                const matchNumber = seed["@match_number"];
                const playerOne = seed?.player[0];
                const playerTwo = seed?.player[1];

                return (
                  <li
                    key={matchNumber}
                    className="team-item"
                    style={{
                      marginLeft: bracketNumber === 1 && "0px",
                    }}
                  >
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
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TournamentDraw;
