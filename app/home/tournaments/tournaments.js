import LiveTournament from "@/components/World/Tournaments/LiveTournament";
import TournamentsPageLoader from "@/components/common/loader/TournamentsPageLoader";
import UpcomingAndCompleteTournament from "./UpcomingAndCompleteTournament";
import "./tournaments.scss";

const ATPRank = ({ standings, setStandings, tournamentData }) => {
  const {
    tournaments,
    liveTournaments,
    upcomingTournaments,
    completedTournaments,
    isLoading,
  } = tournamentData || {};

  return (
    <main className="tournaments_page">
      {isLoading ? (
        <TournamentsPageLoader />
      ) : (
        <div className="main_container">
          <div className="content">
            {/* Live-1 */}
            <div className="live_container">
              <div className="_live">
                {/* <h1>LIVE</h1> */}
              </div>
              {liveTournaments?.length > 0 ? (
                <>
                  {liveTournaments?.map((tournament) => (
                    <LiveTournament
                      key={tournament["@id"]}
                      tournament={tournament}
                    />
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
            {/* Upcoming_container */}
            {upcomingTournaments?.length > 0 && (
              <div className="upcoming_container">
                <div className="_upcoming">
                  <h1>UPCOMING</h1>
                </div>

                <div className="upcoming_head_content no-scrollbar">
                  {upcomingTournaments?.map((tournament) => (
                    <UpcomingAndCompleteTournament
                      tournament={tournament}
                      key={tournament["@id"]}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* COMPLETED_container */}
            {completedTournaments?.length > 0 && (
              <div className="upcoming_container ">
                <div className="_upcoming">
                  <h1>COMPLETED</h1>
                </div>
                {/* COMPLETED_container-1 */}
                <div className="upcoming_head_content no-scrollbar">
                  {[...completedTournaments]?.reverse()?.map((tournament) => (
                    <UpcomingAndCompleteTournament
                      tournament={tournament}
                      key={tournament["@id"]}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ATPRank;
