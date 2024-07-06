import React, { useState } from "react";
import "./Header.css";
import menu_icon from "../../assets/menu-open.svg";
import x from "../../assets/menu-close.svg";
import theme_sun from "../../assets/sun.svg"
import theme_moon from "../../assets/moon.svg"


export default function Header() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
  <header className="header">
    <div className="header-container">
    <div className="logo-container">
        <span className="logo">birong.liu</span>
      </div>
      <ul className="nav-container">
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <div className="theme-menu-container">
        <img className="theme-icon" onClick={() => setTheme((theme) => !theme)} height={30} width={30} src={theme ? theme_sun : theme_moon} alt="theme-icon" />
        <img className="menu-icon" onClick={() => setMenu((menu) => !menu)} height={30} width={30} src={!menu ? menu_icon : x} alt="Menu" />
      </div>
    </div>
    <ul className={`mobile-nav-${menu ? "open" : "close"}`}>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
  </header>
  )
}
