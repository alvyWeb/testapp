export function compareStats(player1Data, player2Data) {
  const statsComparison = [];

  // Extract service statistics
  const serviceStatsPlayer1 = player1Data.stats.period.type[0].stat;
  const serviceStatsPlayer2 = player2Data.stats.period.type[0].stat;
  serviceStatsPlayer1.forEach((stat, index) => {
    const stateName = stat["@name"];
    const firstPlayerValue = stat["@value"];
    const secondPlayerValue = serviceStatsPlayer2[index]["@value"];
    const type = player1Data.stats.period.type[index]; // Dynamic type for service statistics
    statsComparison.push({
      type: type ? type : {},
      stats: {
        stateName: stateName,
        firstPlayerValue: firstPlayerValue,
        secondPlayerValue: secondPlayerValue,
      },
    });
  });

  // Extract return statistics
  const returnStatsPlayer1 = player1Data.stats.period.type[1].stat;
  const returnStatsPlayer2 = player2Data.stats.period.type[1].stat;
  returnStatsPlayer1.forEach((stat, index) => {
    const stateName = stat["@name"];
    const firstPlayerValue = stat["@value"];
    const secondPlayerValue = returnStatsPlayer2[index]["@value"];
    const type = player1Data.stats.period.type[index];
    statsComparison.push({
      type: type,
      stats: {
        stateName: stateName,
        firstPlayerValue: firstPlayerValue,
        secondPlayerValue: secondPlayerValue,
      },
    });
  });

  return statsComparison;
}
