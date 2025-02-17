'use client';
import React, { useState } from 'react';
import './tab.scss'; // Import your CSS file
import { useSwipeable } from 'react-swipeable';
import Pagename from './pagedesign/page.js';
import Pendingpage from './pendingpage/page.js';
const TabComponent = () => {
    const sections = ['section1', 'section2'];
    const [activeSection, setActiveSection] = useState('section1');

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
        trackMouse: true
    });

    return (
        <div className="resultcontainer" {...handlers}>
            <nav>
                <button id={activeSection === 'section1' ? "worldbuttoonActive" : "worldbuttoon"} onClick={() => handleNavClick('section1')}>Page-Design</button>
                <button id={activeSection === 'section2' ? "worldbuttoonActive" : "worldbuttoon"} onClick={() => handleNavClick('section2')}>Pending-Page</button>
            </nav>

            <div className={activeSection === 'section1' ? "sectionActive " : "section"}>
                <Pagename/>
                </div>
            <div className={activeSection === 'section2' ? "sectionActive " : "section"}>
                <Pendingpage/>
                </div>
            
        </div>
    );
};

export default TabComponent;