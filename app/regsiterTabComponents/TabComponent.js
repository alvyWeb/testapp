"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Register from "./register/page.js";
import "./tab.scss"; // Import your CSS file
const TabComponent = () => {
  const sections = ["section1"];
  const [activeSection, setActiveSection] = useState("section1");

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
    <div className="resultcontainer" {...handlers}>
      <Register />
    </div>
  );
};

export default TabComponent;
