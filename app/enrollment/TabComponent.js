"use client";
import { useState } from "react";
import singleGames from "./single/page.js";
import "./tab.scss"; // Import your CSS file
import doubleGames from "./double/page.js";
const TabComponent = () => {
  const sections = ["section1", "section2"];
  const [activeSection, setActiveSection] = useState("section1");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="resultcontainer">
      <nav>
        <button
          id={
            activeSection === "section1" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section1")}
        >
          יחידים
        </button>
        <button
          id={
            activeSection === "section2" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section2")}
        >
          זוגות
        </button>
      </nav>

      <div className="sectionActive">
        {activeSection === "section1" && <singleGames />}
        {activeSection === "section2" && <doubleGames />}
      </div>
      {/* {activeSection === "section2" && (
        <div
          className={
            activeSection === "section2" ? "sectionActive " : "section"
          }
        >
          <Completedgames />
        </div>
      )} */}
    </div>
  );
};

export default TabComponent;
