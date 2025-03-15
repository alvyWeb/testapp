"use client";
import { usePathname, useRouter } from "next/navigation";
import { MainContext } from "@/context";
import { useContext, useState, useEffect } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ light }) => {
  const { user } = useContext(MainContext);
  const authenticateUser = user?.data;
  const router = useRouter();
  const activePath = usePathname(); 

  useEffect(() => {
    setActivePath(window.location.pathname || "/home"); // Set initial active hash
  }, []);

  const menus = [
    {
      name: "חדשות",
      hash: "/home",
      icon: `/NavIcons/news-white.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "הרשמה",
      hash: "/enrollment",
      icon: `/NavIcons/world-white.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "לוח משחקים",
      hash: "/games",
      icon: `/NavIcons/game-white.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "הימורים",
      hash: "/bets",
      icon: `/NavIcons/bets-white.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "דירוגים",
      hash: "/rank",
      icon: `/NavIcons/rank-white.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  const handleNavClick = (path) => {
    if (activePath !== path) {
      router.push(path); // Navigate without page refresh
    }
  };
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => {
          const isActive = activePath === menu.path;
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
