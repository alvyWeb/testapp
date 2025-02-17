export function filterLiveGames(data) {
  const liveMatches = data
    ? data?.filter((game) => game["@status"].includes("Set"))
    : [];

  return liveMatches;
}
