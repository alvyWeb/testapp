import { MainContext } from "@/context";
import { formatDateWithSlash } from "@/utils/formatDateWithSlich";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const UpcomingAndCompleteTournament = ({ tournament }) => {
  const { onGameType } = useContext(MainContext);
  const router = useRouter();

  let bgImage = "./home/tournament/turnament-h-image.png";
  if (tournament?.surface === "Clay") {
    bgImage = "./home/tournament/clay_mini.png";
  } else if (tournament?.surface === "Grass") {
    bgImage = "./home/tournament/grass_mini.png";
  } else {
    bgImage = "./home/tournament/turnament-h-image.png";
  }

  const handleRoute = () => {
    onGameType("single");
    router.push(
      `/tournaments/${tournament["@id"]}?doubleId=${tournament["@doubles_id"]}&name=${tournament["@name"]}&start_date=${tournament["@date_start"]}&end_date=${tournament["@date_end"]}&court=${tournament?.surface}&link=World`
    );
  };

  return (
    <div
      onClick={handleRoute}
      // href={`/tournaments/${tournament["@id"]}?doubleId=${tournament["@doubles_id"]}&name=${tournament["@name"]}&start_date=${tournament["@date_start"]}&end_date=${tournament["@date_end"]}&court=${tournament?.surface}&link=World`}
      className="upcoming_tournament_container"
    >
      <div className="upcoming_tournament_img">
        <img src={bgImage} alt="" />
      </div>
      <div className="upcoming_tournament_heading_contain">
        <div className="upcoming_tournament_heading">
          <p>{tournament["@name"]?.slice(0, 15)}</p>
          <span>{tournament?.prize_money} 🏆</span>
        </div>
        <div className="upcoming_tournament_time_table">
          <p>
            {formatDateWithSlash(tournament["@date_start"])} -{" "}
            {formatDateWithSlash(tournament["@date_end"])}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAndCompleteTournament;
