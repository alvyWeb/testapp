export const getPlayerScores = (match) => {
  let player1Scores = [];
  let player2Scores = [];

  // Directly reference the two players
  const player1 = match[0];
  const player2 = match[1];

  // Iterate through set scores, assuming a maximum of 5 sets
  for (let i = 1; i <= 5; i++) {
    const setKey = `@s${i}`;
    const player1SetScore = player1[setKey];
    const player2SetScore = player2[setKey];

    // Skip if the set was not played
    if (player1SetScore?.trim() === "" || player2SetScore?.trim() === "")
      continue;

    if (!player1SetScore) return;

    // Split the scores to handle potential tiebreaks
    const [player1Games, player1Tie] = player1SetScore
      ?.split(".")
      ?.map((n) => parseInt(n, 10));
    const [player2Games, player2Tie] = player2SetScore
      ?.split(".")
      ?.map((n) => parseInt(n, 10));

    // Determine the set winner; in tennis, the player with more games won wins the set
    const player1WinSet = player1Games > player2Games;
    const player2WinSet = player2Games > player1Games;

    player1Scores.push({
      point: player1Games,
      tie: isNaN(player1Tie) ? undefined : player1Tie,
      setWin: player1WinSet,
    });

    player2Scores.push({
      point: player2Games,
      tie: isNaN(player2Tie) ? undefined : player2Tie,
      setWin: player2WinSet,
    });
  }
  return {
    player1: {
      ...player1,
      score: player1Scores,
    },
    player2: {
      ...player2,
      score: player2Scores,
    },
  };
};

export const getPlayerScores2 = (tournament) => {
  let winnerScores = [];
  let loserScores = [];
  for (const [key, value] of Object.entries(tournament)) {
    if (key.includes("s") && value.trim() !== "") {
      let [winnerScore, loserScore] = value
        .split("")
        .map((score) => score.trim());

      const winScore = winnerScore?.split(".");
      const losScore = loserScore?.split(".");
      const winnerWinSet = winScore > losScore;
      const loserWinSet = winScore < losScore;

      winnerScores.push({
        point: winScore[0],
        tie: winScore[1],
        setWin: winnerWinSet,
      });
      loserScores.push({
        point: losScore[0],
        tie: losScore[1],
        setWin: loserWinSet,
      });
    }
  }

  return {
    winnerScores,
    loserScores,
  };
};

export const getPlayerScoress = (matches) => {
  const firstPlayerScores = [];
  const secondPlayerScores = [];

  for (const match of matches) {
    const firstScore = parseFloat(match.score_first);
    const secondScore = parseFloat(match.score_second);

    const isTiebreakFirst = Number.isInteger(firstScore) === false;
    const isTiebreakSecond = Number.isInteger(secondScore) === false;
    const isSetWinFirst = firstScore > secondScore;
    const isSetWinSecond = secondScore > firstScore;

    if (isTiebreakFirst) {
      firstPlayerScores.push({
        point: Math.floor(firstScore),
        tie: parseInt(match?.score_first.split(".")[1]),
        setWin: isSetWinFirst,
      });
    } else {
      firstPlayerScores.push({
        point: Math.floor(firstScore),
        setWin: isSetWinFirst,
      });
    }

    if (isTiebreakSecond) {
      secondPlayerScores.push({
        point: Math.floor(secondScore),
        tie: parseInt(match.score_second.split(".")[1]),
        setWin: isSetWinSecond,
      });
    } else {
      secondPlayerScores.push({
        point: Math.floor(secondScore),
        setWin: isSetWinSecond,
      });
    }
  }

  return { firstPlayerScores, secondPlayerScores };
};
