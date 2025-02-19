"use client";
import { MainContext } from "@/context";
import { useContext } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ light }) => {
  const { user } = useContext(MainContext);
  const authenticateUser = user?.data;

  const menus = [
    {
      name: "חדשות",
      hash: "",
      icon: `/NavIcons/news-white.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "הרשמה",
      hash: "#0",
      icon: `/NavIcons/world-white.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "לוח משחקים",
      hash: "#1",
      icon: `/NavIcons/game-white.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "הימורים",
      hash: "#2",
      icon: `/NavIcons/bets-white.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "דירוגים",
      hash: "#3",
      icon: `/NavIcons/rank-white.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  const handleNavClick = (hash) => {
    if (window.location.hash !== hash) {
      window.location.hash = hash;
      setTimeout(() => {
        window.location.reload(); // Refresh page after hash change
      }, 100); // Small delay to allow hash update
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => (
          <button
            key={menu.name}
            className="nav-menu"
            onClick={() => handleNavClick(menu.hash)}
          >
            <div className="menu-img">
              <img src={menu.icon} alt={menu.name} />
            </div>
            <p>{menu.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar; 
