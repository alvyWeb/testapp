import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import MatchInfo from "./MatchInfo";
import MatchStats from "./MatchStats";
import "./matchSummaryTwo.scss";

const MatchSummaryTwo = () => {
  return (
    <div className="match-container">
      <div className="match-header">
        <Image src="/home/match/match-header.png" width="200" height="240" />
        <IoIosArrowBack onClick={handleBack} size={24} />
      </div>
      <MatchInfo />
      <MatchStats />
    </div>
  );
};

export default MatchSummaryTwo;
