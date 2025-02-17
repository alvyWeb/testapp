"use client";
import { MainContext } from "@/context";
import { useContext } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ dark }) => {
  const { user, hashLink: hashNumber, onHashLink } = useContext(MainContext);
  const authenticateUser = user?.data;

  const menus = [
    {
      name: "World",
      href: "/",
      hash: "",
      icon: `/NavIcons/world-white.svg`,
      blackIcon: `/NavIcons/world-black.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "Register",
      href: "/#0",
      hash: "#0",
      icon: `/NavIcons/register-white.svg`,
      blackIcon: `/NavIcons/register-black.svg`,
      activeIcon: `/NavIcons/register-active.svg`,
    },
    {
      name: "Games",
      href: "/#1",
      hash: "#1",
      icon: `/NavIcons/game-white.svg`,
      blackIcon: `/NavIcons/game-black.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "News",
      href: "/#2",
      hash: "#2",
      icon: `/NavIcons/news-white.svg`,
      blackIcon: `/NavIcons/news-black.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "Bets",
      href: "/#4",
      hash: "#4",
      icon: `/NavIcons/bets-white.svg`,
      blackIcon: `/NavIcons/bets-black.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "Rank",
      href: "/#3",
      hash: "#3",
      icon: `/NavIcons/rank-white.svg`,
      blackIcon: `/NavIcons/rank-black.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => (
          <NavbarButtonHover key={menu?.name} menu={menu} dark={dark} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
