import CompleteScore from "@/components/World/Tournaments/CompleteScore";
import { MainContext } from "@/context";
import { filterScoreData } from "@/utils/filterScoreData";
import { filterScoreDateData } from "@/utils/filterScoreDateData";
import { formatDateWithDot } from "@/utils/formatDate";
import { formatMatchArray } from "@/utils/formatMatchArray";
import { generateCourtName } from "@/utils/generateCourtName";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

const TournamentScore = ({ data }) => {
  const { scoreStatus, onLiveMatch, selectDate } = useContext(MainContext);
  const isArray = Array.isArray(data?.match);

  const searchParams = useSearchParams();
  const court = searchParams.get("court");

  // filter score
  const filterFinished = filterScoreData(isArray, data, "Finished");
  const filterNotStarted = filterScoreData(isArray, data, "Not Started");
  const filterDate = filterScoreDateData(isArray, data, selectDate);

  const courtName = generateCourtName(data["@number"], court);

  // check today qualifiers matches
  const checkQualifier = (data) => {
    const today = moment();
    const formatToday = formatDateWithDot(today);
    const formatMatches = formatMatchArray(data?.match);
    const todayMatch = formatMatches?.find((m) => m["@date"] === formatToday);
    const isQualifier =
      todayMatch !== undefined && data["@qualification"] === "True";

    return isQualifier;
  };

  const isQualifier = checkQualifier(data);

  return (
    <>
      {scoreStatus === "all" && (
        <>
          {((selectDate && filterDate?.length > 0) || !selectDate) && (
            <div>
              <h4>
                {courtName} {isQualifier && "(Qualifiers)"}
              </h4>
            </div>
          )}
        </>
      )}

      <>
        {scoreStatus === "all" && (
          <>
            {selectDate ? (
              <>
                {filterDate?.map((score) => (
                  <CompleteScore score={score} round={data["@number"]} />
                ))}
              </>
            ) : (
              <>
                {filterNotStarted?.map((score) => (
                  <CompleteScore score={score} round={data["@number"]} />
                ))}
                {filterFinished?.map((score) => (
                  <CompleteScore score={score} round={data["@number"]} />
                ))}
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default TournamentScore;
