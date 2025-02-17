import { formatMatchArray } from "./formatMatchArray";

export function filterWithoutLiveGames(allGames, liveGames) {
  const liveGameIds = liveGames.map((game) => game["@id"]);

  const filteredLiveGames = allGames
    .map((item) => {
      const matches = formatMatchArray(item?.match);
      const liveMatches = matches.filter((match) =>
        liveGameIds.includes(match["@id"])
      );

      if (liveMatches.length > 0) {
        return {
          ...item,
          match: liveMatches,
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);

  const filteredGames = allGames
    .map((item) => {
      const matches = formatMatchArray(item?.match);
      const liveMatches = matches.filter(
        (match) => !liveGameIds.includes(match["@id"])
      );

      if (liveMatches.length > 0) {
        return {
          ...item,
          match: liveMatches,
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);

  const roundName =
    filteredLiveGames?.length > 0 ? filteredLiveGames[0]["@number"] : "";

  return { filteredGames, liveRoundName: roundName };

  // const filteredGames = allGames.filter((games) => {
  //   const formatGames = formatMatchArray(games?.match);
  //   // Check if any game in formatGames has an ID not present in liveGameIds
  //   return formatGames.every((game) => {
  //     return !liveGameIds.includes(game["@id"]);
  //   });
  // });

  // const filteredLiveGames = allGames.filter((game) => {
  //   const formatGames = formatMatchArray(game?.match);
  //   return formatGames.every((match) => {
  //     return liveGameIds.includes(match["@id"]);
  //   });
  // });

  // const filteredLiveGames = allGames.filter((game) => {
  //   const formatGames = formatMatchArray(game?.match);
  //   // Filter out matches that are not present in liveGameIds
  //   const liveMatches = formatGames.filter((match) =>
  //     liveGameIds.includes(match["@id"])
  //   );
  //   // If liveMatches array is not empty, it means at least one match is live
  //   return liveMatches.length > 0;
  // });
}
