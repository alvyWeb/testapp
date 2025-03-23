"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Bettingboard from "./bettingboard/page.js";
import Mybets from "./mybets/page.js";
import "./tab.scss"; // Import your CSS file
const TabComponent = () => {
  const sections = ["section1", "section2"];
  const [activeSection, setActiveSection] = useState("section2");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSection(),
    onSwipedRight: () => goToPreviousSection(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="resultcontainer1" {...handlers}>
      <nav className="betTabNav">
        <button
          id={
            activeSection === "section2" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section2")}
        >
          לוח הימורים
        </button>
        <button
          id={
            activeSection === "section1" ? "worldbuttoonActive" : "worldbuttoon"
          }
          onClick={() => handleNavClick("section1")}
        >
          ההימורים שלי
        </button>
        
      </nav>

      <div
        className={activeSection === "section1" ? "sectionActive " : "section"}
      >
        <Mybets />
      </div>
      <div
        className={activeSection === "section2" ? "sectionActive " : "section"}
      >
        <Bettingboard />
      </div>
    </div>
  );
};

export default TabComponent;
