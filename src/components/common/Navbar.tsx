import React, { useEffect, useState } from "react";
import { LogoName, navLinks } from "../../utils/constants";
import Utils from "../../utils/Utils";
import { Theme } from "../../utils/Types";
import { Link, NavLink } from "react-router-dom";

function handleTheme(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>,
) {
	if (!event.defaultPrevented) event.preventDefault();
	const currentTheme = Utils.getCurrentTheme();
	const newTheme = currentTheme === "dark" ? "light" : "dark";
	localStorage.setItem("theme", newTheme);
	document.documentElement.classList.add(newTheme);
	document.documentElement.classList.remove(currentTheme);
	setTheme(newTheme);
}

function handleNavBarMenu(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
	if (!event.defaultPrevented) event.preventDefault();
	console.log(event);
}

export default function Navigator() {
	const [theme, setTheme] = useState<Theme>();

	useEffect(() => {
		const currentTheme = Utils.getCurrentTheme();
		document.documentElement.classList.add(currentTheme);
		setTheme(currentTheme);
	}, []);

	return (
		<header className="md:px-10  bg-white dark:bg-slate-900 backdrop-blur bg-opacity-70 dark:bg-opacity-70 fixed left-0 right-0 top-0 z-10">
			<div className="flex items-center justify-between max-w-6xl mx-auto px-8 py-4">
				<a href="/" aria-label="Home">
					<h1 className="font-bold text-2xl font-hack m-0 text-brand-3 dark:text-white">
						<span className="relative text-brown-11">{'< '}</span>
						Bi Rong 
						<span className="relative text-brown-11">{' />'}</span>
					</h1>
				</a>
				<nav className="hidden md:block space-x-3 relative right-10">
					{navLinks.map(link => (
						<NavLink style={{
							textAlign: "center",
							margin: "auto"
						}} to={link.path} key={link.name} className={({ isActive }) => isActive ? "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2 py-1 text-center dark:text-sky-200 text-sky-800" : "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2 py-1 text-center dark:text-slate-400 text-slate-600"} >{link.name}</NavLink>
					))}
				</nav>
				<div className="hidden md:block">
				<button
						onClick={(e) => handleTheme(e, setTheme)}
						id="theme-toggle"
						type="button"
						className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
					>
						<svg
							id="theme-toggle-dark-icon"
							className={`${theme === "dark" ? "hidden" : ""} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
						<svg
							id="theme-toggle-light-icon"
							className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fillRule="evenodd"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}
