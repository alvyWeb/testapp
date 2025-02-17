import { formatMatchArray } from "./formatMatchArray";

export function findMatchById(matchData, id) {
  const matches = formatMatchArray(matchData);
  for (let i = 0; i < matches?.length; i++) {
    const match = matches[i];

    const matchArray = formatMatchArray(match?.match);
    const found = matchArray?.find((item) => item["@id"] === id);
    if (found) {
      return found;
    }
  }
  return null;
}

function findMatchById2(matches, id) {
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    for (let j = 0; j < match.match.length; j++) {
      if (match.match[j]["@id"] === id) {
        return match;
      }
    }
  }
  return null;
}
