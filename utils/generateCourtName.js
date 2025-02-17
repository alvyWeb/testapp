export function generateCourtName(name, court, liveName = "") {
  if (!name) {
    return;
  }
  const [tourName, roundName] = name?.split(" - ");
  const [first, second] = roundName?.split("-");
  const roundStep = first?.split("/");

  let courtName;
  const [_, gameName] = liveName && liveName?.split(":");

  if (roundStep?.length === 2) {
    liveName
      ? (courtName = `${first} - ${gameName}`)
      : (courtName = `${first} - ${court}`);
  } else {
    let secondPart = second !== undefined ? `-${second}` : "";

    liveName
      ? (courtName = `${first}${secondPart} - ${gameName}`)
      : (courtName = `${first}${secondPart}`);
    // : (courtName = `${first}${secondPart} (Qualifiers)`);
  }

  return courtName;
}
