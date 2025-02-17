import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { getFlag } from "../../../util/geography"; // Ensure this import path is correct

const ATPRank = ({ standings, setStandings }) => {
    const [query, setQuery] = useState("");
    const players =
      Array.isArray(standings) &&
      standings.slice(0, 100).filter((player) => player.player.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  
    useEffect(() => {
      const apiKey = "8fa9017030b8961fdd39e12a72513ffb65bf9093e3f26946f3f1e6f3d36583ef";
      if (standings === null) {
        fetch(`https://api.api-tennis.com/tennis/?method=get_standings&event_type=ATP&APIkey=${apiKey}`)
          .then((res) => res.json())
          .then((data) => setStandings(data?.result));
      }
    }, [setStandings, standings]);

    return (
      <main className="text-white">
        <div className="relative">
          <input
            className="w-full h-10 bg-[#1c1c1e] px-5 py-3 focus:outline-none text-[#B0AAAA] placeholder:text-[#B0AAAA]"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a player"
          />
          <IoIosSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
        </div>
        <div className="w-full px-5 mt-6">
          <header className="uppercase border-b border-[#313035] pb-1 grid grid-cols-[40px_1fr_auto] gap-4 text-xs">
            <p className="text-center">Rank</p>
            <p>Player</p>
            <p>Points</p>
          </header>

          {Array.isArray(players) &&
            players.map((player, index) => (
              <div
                className="grid grid-cols-[40px_1fr_auto] gap-4 h-9 border-b border-[#313035] items-center"
                key={index} // Assuming player doesn't have a unique id, using index as key
              >
                <p className="text-center">{player.place}</p>
                <p className="text-sm flex gap-2 items-center">
                  <img className="h-4 w-4 object-cover" src={getFlag(player.country)} alt={player.player} />
                  {player.player}
                </p>
                <p className="text-sm">{player.points}</p>
              </div>
            ))}
        </div>
      </main>
    );
};

export default ATPRank;
