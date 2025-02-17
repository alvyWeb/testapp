export const getRounds = (tournament, round) => {
  if (!tournament || !round) {
    return [];
  }

  const filteredData = tournament.filter((tour) => tour?.Round === round);
  return filteredData;
};
