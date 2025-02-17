import { MainContext } from "@/context";
import { useContext } from "react";
import PlayerScore from "../World/Tournaments/PlyaerScore";

const DrawCard = ({ round, height, ref, index }) => {
  const { selectDate } = useContext(MainContext);
  const isArray = Array.isArray(round);

  return (
    <div
      style={{
        height: height ? height : "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
      ref={ref}
      className="stream_container"
    >
      {isArray ? (
        round?.map((tour, idx) => {
          const playerOne = tour?.player[0];
          const playerTwo = tour?.player[1];
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {index > 0 && (
                <div>
                  <svg
                    width="26"
                    height="66"
                    viewBox="0 0 26 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_661_10" fill="white">
                      <path d="M0 0H20V66H0V0Z" />
                    </mask>
                    <path
                      d="M20 0H21V-1H20V0ZM20 66V67H21V66H20ZM0 1H20V-1H0V1ZM19 0V66H21V0H19ZM20 65H0V67H20V65Z"
                      fill="#B0AAAA"
                      mask="url(#path-1-inside-1_661_10)"
                    />
                    <line
                      x1="20"
                      y1="32.5"
                      x2="26"
                      y2="32.5"
                      stroke="#B0AAAA"
                    />
                  </svg>
                </div>
              )}

              <div key={idx} className="stream_ _head_c_d _main_stream">
                <div className="_stream">
                  <div className="stream_head">
                    <p>
                      <span className="_live">
                        {tour["@status"]} #{tour["@match_number"]}
                      </span>
                    </p>
                  </div>
                </div>

                <PlayerScore info={playerOne} isDraw />
                <hr style={{ opacity: ".1", width: "90%" }} />
                <PlayerScore info={playerTwo} isDraw />
              </div>
            </div>
          );
        })
      ) : (
        <div className="stream_ _head_c_d _main_stream">
          <div className="_stream">
            <div className="stream_head">
              <p>
                <span className="_live">{round["@status"]}</span>
              </p>
            </div>
          </div>
          <PlayerScore info={round?.player[0]} />
          <PlayerScore info={round?.player[1]} />
        </div>
      )}
    </div>
  );
};

export default DrawCard;
