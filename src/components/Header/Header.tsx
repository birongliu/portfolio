import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import theme_sun from "../../assets/sun.svg"
import theme_moon from "../../assets/moon.svg"
import light_menu_close from "../../assets/light-menu-close.svg"
import light_menu_open from "../../assets/light-menu-open.svg"
import dark_menu_close from "../../assets/dark-menu-close.svg"
import dark_menu_open from "../../assets/dark-menu-open.svg"
import { ThemeContext } from "../../contexts/ThemeContext";


export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
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
        <img className="theme-icon" onClick={toggleTheme} height={30} width={25} src={darkTheme ? theme_sun : theme_moon} alt="theme-icon" />
        <img className={`menu-icon ${menu ? 'menu-icon-toggled' : ''}`} onClick={() => setMenu((menu) => !menu)} height={30} width={30} src={!darkTheme ? (menu ? light_menu_close : light_menu_open) : (menu ? dark_menu_close : dark_menu_open)} alt="Menu" />
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
