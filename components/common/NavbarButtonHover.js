"use client";
import { MainContext } from "@/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";

const NavbarButton = ({ menu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { hashLink: hashNumber, onHashLink, dark } = useContext(MainContext);
  const { name, href, hash, icon, blackIcon, activeIcon } = menu;

  const handleRoute = () => {
    router.push(href);
    onHashLink(hash);
  };

  const activeButton =
    (pathname === href && !hashNumber) || hash === hashNumber;
  const className = name.toLowerCase();

  let iconSrc = icon;
  let active = "white";
  if (activeButton) {
    iconSrc = activeIcon;
    active = "active";
  } else if (dark) {
    iconSrc = blackIcon;
    active = "black";
  } else {
    iconSrc = icon;
    active = "white";
  }

  return (
    <button onClick={handleRoute} className="nav-menu">
      <div className="menu-img">
        {/* <img src={iconSrc} alt="" /> */}
        <img
          style={{ display: active === "active" ? "block" : "none" }}
          src={activeIcon}
          alt=""
        />
        <img
          style={{ display: active === "black" ? "block" : "none" }}
          src={blackIcon}
          alt=""
        />
        <img
          style={{ display: active === "white" ? "block" : "none" }}
          src={icon}
          alt=""
        />
      </div>
      <p
        style={{
          color: activeButton ? "#145E94" : "",
          // pointerEvents: "none",
        }}
      >
        {name}
      </p>
    </button>
  );
};

export default NavbarButton;
