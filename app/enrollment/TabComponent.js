"use client";
import { useState } from "react";
import Completedgames from "./single/page.js";
import "./tab.scss"; // Import your CSS file
import Upcominggames from "./double/page.js";
const TabComponent = () => {
  const sections = ["section1", "section2"];
  const [activeSection, setActiveSection] = useState("section1");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // const goToNextSection = () => {
  //   const currentIndex = sections.indexOf(activeSection);
  //   if (currentIndex < sections.length - 1) {
  //     setActiveSection(sections[currentIndex + 1]);
  //   }
  // };

  // const goToPreviousSection = () => {
  //   const currentIndex = sections.indexOf(activeSection);
  //   if (currentIndex > 0) {
  //     setActiveSection(sections[currentIndex - 1]);
  //   }
  // };

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => goToNextSection(),
  //   onSwipedRight: () => goToPreviousSection(),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true,
  // });

  return (
    <div className="resultcontainer">
      <nav>
        <button
          id={
            activeSection === "section1" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section1")}
        >
          משחקים עתידיים
        </button>
        <button
          id={
            activeSection === "section2" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section2")}
        >
          משחקים שנגמרו
        </button>
      </nav>

      <div className="sectionActive">
        {activeSection === "section1" && <Upcominggames />}
        {activeSection === "section2" && <Completedgames />}
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
