export const calculateTotalScores = (scores) => {
  return scores?.reduce(
    (totals, match) => {
      totals[0] += parseFloat(match.score_first);
      totals[1] += parseFloat(match.score_second);
      return totals;
    },
    [0, 0]
  );
};
