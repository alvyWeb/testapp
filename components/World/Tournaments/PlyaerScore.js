import usePlayerProfile from "@/api/usePlayerProfile";
import { findCountry } from "@/utils/findCountry";
import Image from "next/image";

const PlayerScore = ({ info, isDraw, isLive, status }) => {
  const isWinner = info["@winner"] === "True";
  const isServe = info["@serve"] === "True";
  const gameScore = info["@game_score"];
  // const scores = getPlayerScore(info);
  const scores = info?.score;

  // wheen double game score
  const isDoubleGame = info["@dp1"];
  const dPlayerId1 = info["@dp1"];
  const dPlayerId2 = info["@dp2"];

  const nameSplit = info["@name"]?.split("/");
  const name = isDoubleGame
    ? `${nameSplit[0]} & ${nameSplit[1]}`
    : info["@name"];

  // get profile
  const playerOneId = isDoubleGame ? info["@dp1"] : info["@id"];
  const playerTwoId = isDoubleGame ? info["@dp2"] : "";
  const { profile: playerOneProfile } = usePlayerProfile({ id: playerOneId });
  const { profile: playerTwoProfile } = usePlayerProfile({ id: playerTwoId });
  const playerOneCountry = findCountry(playerOneProfile?.country);
  const playerTwoCountry = findCountry(playerTwoProfile?.country);

  // player image
  const playerImg = playerOneProfile?.image;
  const doublePlayerImg = isDoubleGame ? playerTwoProfile?.image : "";

  // country image
  const playerOneCountryImg = `/flags/${playerOneCountry?.code?.toLocaleLowerCase()}.png`;
  const playerTwoCountryImg = `/flags/${playerTwoCountry?.code?.toLocaleLowerCase()}.png`;

  return (
    <div className="_live_playing ">
      <div className="_profile">
        <div className="profile_img">
          {status === "stats" ? (
            <img className="stats-flag" src={playerOneCountryImg} />
          ) : (
            <div className="im_con">
              <span className="pro_img">
                {playerImg ? (
                  <>
                    <Image
                      src={`data:image/jpeg;base64,${playerImg}`}
                      alt={name}
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                    <img className="flag" src={playerOneCountryImg} />
                  </>
                ) : (
                  <>
                    <Image
                      // src="/icon/player.png"
                      src="/icon/player.jpeg"
                      alt={name}
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                    <img className="flag" src={playerOneCountryImg} />
                  </>
                )}
              </span>
              {isDoubleGame && (
                <span className="pro_img side">
                  {doublePlayerImg ? (
                    <>
                      <Image
                        src={`data:image/jpeg;base64,${doublePlayerImg}`}
                        alt={name}
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      <img className="flag" src={playerTwoCountryImg} />
                    </>
                  ) : (
                    <>
                      <Image
                        // src="/icon/player.png"
                        src="/icon/player.jpeg"
                        alt={name}
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      <img className="flag" src={playerTwoCountryImg} />
                    </>
                  )}
                </span>
              )}
            </div>
          )}
        </div>
        <div
          style={{
            opacity: isWinner || isLive ? 1 : ".7",
            fontWeight: "500",
          }}
          className={`nam_turn`}
        >
          <p>{name}</p>
          {isWinner && (
            <svg
              className={` ball-serve-active `}
              style={{ fontWeight: "bold" }}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.76562 0.577397H6.73901C6.74274 0.463688 6.74481 0.349307 6.74481 0.234377C6.74481 0.10492 6.63983 0 6.51044 0H1.48956C1.36017 0 1.25519 0.10492 1.25519 0.234377C1.25519 0.349307 1.25726 0.463688 1.26099 0.577397H0.234375C0.104919 0.577397 0 0.682317 0 0.811774C0 1.86195 0.274475 2.85274 0.772827 3.60171C1.26544 4.34213 1.92163 4.76682 2.63049 4.80814C2.7912 4.98301 2.96106 5.12559 3.138 5.23435V6.27605H2.74481C2.26947 6.27605 1.88281 6.66277 1.88281 7.13805V7.53125H1.86615C1.73669 7.53125 1.63177 7.63623 1.63177 7.76562C1.63177 7.89508 1.73669 8 1.86615 8H6.13385C6.26331 8 6.36823 7.89508 6.36823 7.76562C6.36823 7.63623 6.26331 7.53125 6.13385 7.53125H6.11719V7.13805C6.11719 6.66277 5.73053 6.27605 5.25519 6.27605H4.862V5.23435C5.03894 5.12565 5.20886 4.98301 5.36957 4.80814C6.07837 4.76682 6.73456 4.34213 7.22723 3.60171C7.72559 2.85274 8 1.86195 8 0.811774C8 0.682317 7.89508 0.577397 7.76562 0.577397ZM1.16309 3.34207C0.752014 2.72432 0.510498 1.91634 0.473694 1.04615H1.28717C1.3717 2.11586 1.6228 3.10464 2.01526 3.88949C2.07776 4.0145 2.14313 4.1326 2.21094 4.24381C1.82111 4.09659 1.46033 3.78885 1.16309 3.34207ZM5.64844 7.13805V7.53131H2.35156V7.13805C2.35156 6.92126 2.52795 6.7448 2.74481 6.7448H5.25519C5.47205 6.7448 5.64844 6.92126 5.64844 7.13805ZM4.39325 6.27605H3.60675V5.43803C3.7356 5.47197 3.86688 5.4896 4 5.4896C4.13312 5.4896 4.2644 5.47197 4.39325 5.43803V6.27605ZM4.53839 4.88041C4.52783 4.88474 4.5177 4.88999 4.508 4.89579C4.34235 4.97819 4.17212 5.02085 4 5.02085C3.82794 5.02085 3.65778 4.97819 3.49219 4.89591C3.48236 4.88999 3.47217 4.88474 3.46149 4.88029C3.27771 4.78312 3.09991 4.63639 2.93176 4.44358C2.92291 4.43094 2.91296 4.41928 2.90192 4.40866C2.73499 4.21048 2.57794 3.96671 2.43451 3.67984C2.00378 2.81844 1.755 1.6858 1.72668 0.468754H6.27332C6.24493 1.6858 5.99615 2.8185 5.56549 3.67984C5.42206 3.96671 5.26501 4.21048 5.09814 4.40866C5.08704 4.41928 5.07697 4.431 5.06818 4.44364C4.90002 4.63651 4.72217 4.78318 4.53839 4.88041ZM6.83691 3.34207C6.53967 3.78885 6.17889 4.09659 5.78906 4.24381C5.85687 4.1326 5.92224 4.0145 5.98474 3.88949C6.3772 3.10464 6.62823 2.11586 6.71283 1.04615H7.52631C7.4895 1.91634 7.24799 2.72432 6.83691 3.34207Z" />
            </svg>
          )}

          {isServe && isLive && (
            <div className="serve">
              <svg
                className={` ball-serve-active `}
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.51753 9.96476C7.99315 9.96476 9.99991 7.958 9.99991 5.48238C9.99991 3.00676 7.99315 1 5.51753 1C3.04192 1 1.03516 3.00676 1.03516 5.48238C1.03516 7.958 3.04192 9.96476 5.51753 9.96476Z"
                  fill="none"
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.46342 2.10352C7.26796 4.13403 7.26796 6.46173 8.46342 8.86115M2.57178 2.10352C3.76723 4.13403 3.76723 6.46173 2.57178 8.86115"
                  fill="none"
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {!isDraw && (
        <div className="round_socre">
          {scores?.length > 0 ? (
            <>
              {scores?.map((score, idx) => (
                <p className="_round _square ">
                  <span
                    className={` ${score?.setWin ? "_active" : "_disable"} `}
                  >
                    {score?.point}
                  </span>
                  <span
                    className={`_square_s ${
                      score?.setWin ? "_active" : "_disable"
                    } `}
                  >
                    {score?.tie}
                  </span>
                </p>
              ))}
              {isLive && (
                <div className="live-score">
                  <span className="score-value">{gameScore}</span>
                </div>
              )}
            </>
          ) : (
            <>
              {!isDraw && (
                <span
                  style={{
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  -
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerScore;
