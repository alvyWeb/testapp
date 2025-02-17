import { formatMatchArray } from "./formatMatchArray";

export function sortTournamentStages(tournamentArray) {
  function stageToNumber(stage) {
    switch (stage) {
      case "Final":
        return 1;
      case "Semi-finals":
        return 2;
      case "1/8-finals":
        return 2;
      case "Quarter-finals":
        return 3;
      case "1/16-finals":
        return 3;
      case "1/32-finals":
        return 4;
      case "1/64-finals":
        return 5;
      default:
        return 6;
    }
  }

  const filterFinal = tournamentArray.filter(
    (d) => d["@number"].split(" - ").pop() === "Final"
  );

  const filterWithoutFinal = tournamentArray.filter(
    (d) => d["@number"].split(" - ").pop() !== "Final"
  );

  function parseDate(dateString) {
    const [day, month, year] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
  }

  // sort final
  const sortFinal = filterFinal.sort((a, b) => {
    const aMatches = formatMatchArray(a?.match);
    const bMatches = formatMatchArray(b?.match);

    const dateA = parseDate(aMatches[0]["@date"]);
    const dateB = parseDate(bMatches[0]["@date"]);

    return dateB - dateA;
  });

  // sort without final
  const sortWithoutFinal = filterWithoutFinal.sort((a, b) => {
    const stageA = a["@number"].split(" - ").pop();
    const stageB = b["@number"].split(" - ").pop();
    const sortStages = stageToNumber(stageA) - stageToNumber(stageB);
    return sortStages;
  });

  // adjust same step and merge match
  function mergeMatchesByNumber(data) {
    const groupedData = {};

    data.forEach((item) => {
      const number = item["@number"];
      const matches = formatMatchArray(item.match);
      if (!groupedData[number]) {
        groupedData[number] = {
          ...item,
          "@number": number,
          match: [],
        };
      }
      groupedData[number].match = groupedData[number].match.concat(matches);
    });

    // Convert the groupedData object back into an array
    return Object.values(groupedData);
  }

  const mergeWithoutFinal = mergeMatchesByNumber(sortWithoutFinal);
  const mergeFinal = mergeMatchesByNumber(sortFinal);

  return [...mergeFinal, ...mergeWithoutFinal];
}
