"use client";
import { MainContext } from "@/context";
import { useContext } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ light }) => {
  const { user, hashLink: hashNumber, onHashLink } = useContext(MainContext);
  const authenticateUser = user?.data;

  const menus = [
    {
      name: "חדשות",
      href: "/",
      hash: "",
      icon: `/NavIcons/news-white.svg`,
      blackIcon: `/NavIcons/news-white.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "הרשמה",
      href: "/#0",
      hash: "#0",
      icon: `/NavIcons/world-white.svg`,
      blackIcon: `/NavIcons/world-white.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "לוח משחקים",
      href: "/#1",
      hash: "#1",
      icon: `/NavIcons/game-white.svg`,
      blackIcon: `/NavIcons/game-white.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "הימורים",
      href: "/#4",
      hash: "#4",
      icon: `/NavIcons/bets-white.svg`,
      blackIcon: `/NavIcons/bets-white.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "דירוגים",
      href: "/#3",
      hash: "#3",
      icon: `/NavIcons/rank-white.svg`,
      blackIcon: `/NavIcons/rank-white.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => (
          <NavbarButtonHover key={menu?.name} menu={menu} light={light} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
