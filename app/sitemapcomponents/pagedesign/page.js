'use client';
import './pagedesig.scss';
import React, { useEffect, useState } from 'react';

const ATPRank = ({ }) => {

  const playerranking = [
    {
      "pName": "NEWS",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "Tournament",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "DOUBLES",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "RANK",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "ממשק ניהול",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "Register",
      "theme": "yes",
      "json": "Done"
    },
    {
      "pName": "ממשק ניהול",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "פרופילל",
      "theme": "No",
      "json": "Done"
    },
    {
      "pName": "חדשות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "הרשמה למשחקי זוגות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "משחקים עתידיים- שלי",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "משחקים שנגמרו-שלי",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "משחקים שנגמרו-הכל",
      "theme": "No",
      "json": "No"
    },
    {
      "pName": "הרשמה למשחקי יחידים",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"משחק עתידי זוגות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"משחק עתידי-יחידים",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"משחק עתידי-יחידים",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":" יחידים הרשמה",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"משחק עתידי",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"הרשמה-יצירת פרופיל",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"תקנון הקבוצה",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"משחקים",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"ניהול משתמשים",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"יתרות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"חדשות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"תגובות",
      "theme": "No",
      "json": "No"
    },
    {
      "pName":"לוח הימורים",
      "theme": "No",
      "json": "No"
    }
  ];

  const [search, setSearch] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <main>
      <div className="sitemap_container">
        <div className="sitemap_head">
          <div className="pname_theme">
            <p>Page-Name</p>
            <p>Dark-Light</p>
          </div>
          <p>Json</p>
        </div>

        {
          playerranking.map((item) => (
            <div className="sitemap_body">
              <div className="addp_yn">
                <div className="addp_">
                  <p>{item.pName}</p>
                  <p>{item.theme}</p>
                </div>
                <p>{item.json}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default ATPRank;