import React, { useEffect, useState } from "react";
import "./Header.css";
import menu_icon from "../../assets/menu-open.svg";
import x from "../../assets/menu-close.svg";
import theme_sun from "../../assets/sun.svg"
import theme_moon from "../../assets/moon.svg"


export default function Header() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
  <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
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
        <img className={`menu-icon ${menu ? 'menu-icon-toggled' : ''}`} onClick={() => setMenu((menu) => !menu)} height={30} width={30} src={!menu ? menu_icon : x} alt="Menu" />
      </div>
    </div>
    <div className={`mobile-nav-open-container mobile-nav-toggle-${menu ? 'open' : ""}`}>
    <ul className={`mobile-nav-${menu ? "open" : "close"}`}>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  </header>
  )
}
