export const getPlayerScore = (score) => {
  const playerScores = [];

  for (const key of ["@s1", "@s2", "@s3", "@s4", "@s5"]) {
    if (score.hasOwnProperty(key) && score[key].trim() !== "") {
      const playerScore = score[key];
      const splitScore = playerScore?.split(".");
      const individualScore = {
        point: splitScore[0],
        tie: splitScore[1],
      };
      playerScores.push(individualScore);
    }
  }

  return playerScores;
};
