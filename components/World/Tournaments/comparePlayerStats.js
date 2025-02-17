export function comparePlayerStats2(playersData) {
  let result = [];

  // Iterate over each player
  playersData.forEach((player) => {
    let playerStats = player?.stats?.period?.type;

    // Iterate over each type of stat (Service, Return, Points, Games)
    playerStats?.forEach((statType) => {
      let typeObject = {
        type: statType["@name"],
        stats: [],
      };

      // Iterate over each stat within the type
      statType?.stat?.forEach((stat) => {
        let statObject = {
          stateName: stat["@name"],
          firstPlayerValue: "",
          secondPlayerValue: "",
        };

        // Find corresponding stat value for first and second players
        player?.stats?.period?.type?.forEach((playerType) => {
          if (playerType["@name"] === statType["@name"]) {
            playerType?.stat.forEach((playerStat) => {
              if (playerStat["@name"] === stat["@name"]) {
                statObject.firstPlayerValue = playerStat["@value"];
              }
            });
          }
        });

        // Find corresponding stat value for second player
        playersData.forEach((otherPlayer) => {
          if (otherPlayer["@id"] !== player["@id"]) {
            otherPlayer.stats.period.type.forEach((playerType) => {
              if (playerType["@name"] === statType["@name"]) {
                playerType.stat.forEach((playerStat) => {
                  if (playerStat["@name"] === stat["@name"]) {
                    statObject.secondPlayerValue = playerStat["@value"];
                  }
                });
              }
            });
          }
        });

        // Push the stat object into the type object's stats array
        typeObject.stats.push(statObject);
      });

      // Push the type object into the result array
      result.push(typeObject);
    });
  });

  return result;
}

export function comparePlayerStats(playersData) {
  let result = [];
  let uniqueTypes = new Set(); // Maintain a set of unique types

  // Iterate over each player
  playersData.forEach((player) => {
    let playerStats = player.stats.period.type;

    // Iterate over each type of stat (Service, Return, Points, Games)
    playerStats.forEach((statType) => {
      // Check if the type has already been processed
      if (!uniqueTypes.has(statType["@name"])) {
        let typeObject = {
          type: statType["@name"],
          stats: [],
        };

        // Iterate over each stat within the type
        statType.stat.forEach((stat) => {
          let statObject = {
            stateName: stat["@name"],
            firstPlayerValue: 0,
            secondPlayerValue: 0,
          };

          // Find corresponding stat value for first player
          player.stats.period.type.forEach((playerType) => {
            if (playerType["@name"] === statType["@name"]) {
              playerType.stat.forEach((playerStat) => {
                if (playerStat["@name"] === stat["@name"]) {
                  // Parse percentage value as float
                  statObject.firstPlayerValue = parseFloat(
                    playerStat["@value"]
                  );
                }
              });
            }
          });

          // Find corresponding stat value for second player
          playersData.forEach((otherPlayer) => {
            if (otherPlayer["@id"] !== player["@id"]) {
              otherPlayer.stats.period.type.forEach((playerType) => {
                if (playerType["@name"] === statType["@name"]) {
                  playerType.stat.forEach((playerStat) => {
                    if (playerStat["@name"] === stat["@name"]) {
                      // Parse percentage value as float
                      statObject.secondPlayerValue = parseFloat(
                        playerStat["@value"]
                      );
                    }
                  });
                }
              });
            }
          });

          // Push the stat object into the type object's stats array
          typeObject.stats.push(statObject);
        });

        // Push the type object into the result array
        result.push(typeObject);

        // Add the type to the set of unique types
        uniqueTypes.add(statType["@name"]);
      }
    });
  });

  return result;
}

// make a  return [{
//   type: "Service",
//   stats: [
//     {
//       stateName: "Aces",
//       firstPlayerValue: "53%",
//       secondPlayerValue: "30%",
//     },
//     {
//       ...
//     }
//   ],
// },
// {
//   ...
// }]
