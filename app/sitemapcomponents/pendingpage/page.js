'use client';
import './pendingpage.scss';
import React, { useEffect, useState } from 'react';

const ATPRank = ({ }) => {

  const playerranking = [
    {
      "rank": "1",
      "name": "פרופילל",
      "points": "5%"
    },
    {
      "rank": "2",
      "name":"הרשמה למשחקי יחידים",
      "points": "80%"
    },
    {
      "rank": "3",
      "name":"משחק עתידי זוגות",
      "points": "90%"
    },
    {
      "rank": "4",
      "name":"ממשק ניהול",
      "points": "60%"
    },
    {
      "rank": "5",
      "name":"הרשמה למשחקי זוגות",
      "points": "80%"
    },
    {
      "rank": "6",
      "name":"לוח הימורים",
      "points": "50%"
    },
    {
      "rank": "7",
      "name":"צ'אט",
      "points": "0%"
    },
    {
      "rank": "8",
      "name":"משחק עתידי",
      "points": "60%"
    },
    {
      "rank": "9",
      "name":"Most of the work is left Copy & need to change Jason.",
      "points": ""
    }
  ];

  const [search, setSearch] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search) {
      setFilteredPlayers(playerranking.filter((player) =>
        player.name.toLowerCase().includes(search.toLowerCase())
      ));
    } else {
      setFilteredPlayers(playerranking);
    }
  }, [search]);


  return (
    <main className="atprank_app">
      <div className="_container">
        <div className="table_head_body">
          <table className="heading_table">
            <thead>
              <tr>
                <th><span className="_ranking">Page-No</span><span className="_ranking">Page-Name</span></th>
                <th><span className="_ranking">Done-%</span></th>
              </tr>
            </thead>

          </table>
          {/* Chart_Table_1 */}
          {filteredPlayers.map((item, index) => (
              <table className="border_bottom_table _cut_bottom">
                <tbody>
                  <tr>
                    <td><span className="_ranking"><span className="_number">{item.rank}</span><span className="country_name"><span className="_name">{item.name}</span></span></span><span className="_points">{item.points}</span></td>
                  </tr>
                </tbody>
              </table>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ATPRank;
