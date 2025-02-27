"use client";
import { MainContext } from "@/context";
import { useContext, useState, useEffect } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ light }) => {
  const { user } = useContext(MainContext);
  const authenticateUser = user?.data;
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash || ""); // Set initial active hash
  }, []);

  const menus = [
    {
      name: "חדשות",
      path: "/home",
      icon: `/NavIcons/news-white.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "הרשמה",
      path: "/register",
      icon: `/NavIcons/world-white.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "לוח משחקים",
      path: "/game",
      icon: `/NavIcons/game-white.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "הימורים",
      path: "/bet",
      icon: `/NavIcons/bets-white.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "דירוגים",
      path: "/ranking",
      icon: `/NavIcons/rank-white.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  const handleNavClick = (path) => {
    if (window.location.hash !== path) {
      window.location.hash = path;
      setTimeout(() => {
        window.location.reload(); // Refresh page after hash change
      }, 100); // Small delay to allow hash update
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => {
          const isActive = activeHash === menu.path;
          return (
          <button
            key={menu.name}
            className={`nav-menu ${isActive ? "active" : ""}`}
            onClick={() => handleNavClick(menu.path)}
          >
            <div className="menu-img">
              <img src={isActive ? menu.activeIcon : menu.icon} alt={menu.name} />
            </div>
            <p>{menu.name}</p>
          </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar; 
