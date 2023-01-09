import React, { useEffect, useState } from "react";
import { navLinks } from "../../utils/constants";
import Utils from "../../utils/Utils";
import { Theme } from "../../utils/Types";
import { NavLink } from "react-router-dom";

function handleTheme(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>,
) {
	if (!event.defaultPrevented) event.preventDefault();
	const currentTheme = Utils.getCurrentTheme();
	const newTheme = currentTheme === "dark" ? "light" : "dark";
	const theme = document.querySelector('meta[name="theme-color"]') as Element;
	if (theme.hasAttribute("content")) theme.removeAttribute("content");
	Utils.switchMobileTheme(newTheme);
	localStorage.setItem("theme", newTheme);
	document.documentElement.classList.add(newTheme);
	document.documentElement.classList.remove(currentTheme);
	setTheme(newTheme);
}

export default function Navigator() {
	const [theme, setTheme] = useState<Theme>();
	const [navigate, setNavigate] = useState<boolean>(false);

	useEffect(() => {
		const currentTheme = Utils.getCurrentTheme();
		Utils.switchMobileTheme(currentTheme);
		document.documentElement.classList.add(currentTheme);
		setTheme(currentTheme);
	}, []);


	return (
		<header className="backdrop-blur bg-opacity-70 dark:bg-opacity-70 fixed left-0 right-0 top-0 z-10">
			<div className="flex items-center justify-between max-w-7xl mx-auto md:py-5 py-6 px-12">
				<a href="/" aria-label="Home">
					<h1 className="font-bold text-2xl font-hack m-0 text-brand-3 dark:text-white">
						<span className="relative text-brown-11">{"< "}</span>
						Bi Rong
						<span className="relative text-brown-11">{" />"}</span>
					</h1>
				</a>
				<div className={`md:hidden -z-10 ${!navigate ? "hidden" : ""}`}>
					<div className="backdrop-blur bg-opacity-50 dark:bg-opacity-50 gap-4 my-dark:text-white flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-screen px-8 py-20 bg-slate-100 dark:bg-slate-900 animate-[menu_0.6s_ease]">
					{navLinks.map((link) => (
						<NavLink
							to={link.path}
							key={link.name}
							className={({ isActive }) =>
								`${isActive
									? "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2  text-center dark:text-sky-200 text-sky-800"
									: "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2  text-center dark:text-slate-400 text-slate-600"
								}`}
						>
							{link.name}
						</NavLink>
					))}
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
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
						<svg
							id="theme-toggle-light-icon"
							className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					</div>
				</div>
				<nav className="hidden md:block space-x-3 relative right-11">
					{navLinks.map((link) => (
						<NavLink
							style={{
								textAlign: "center",
								margin: "auto",
							}}
							to={link.path}
							key={link.name}
							className={({ isActive }) =>
								isActive
									? "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2 py-1 text-center dark:text-sky-200 text-sky-800"
									: "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-800 px-2 py-1 text-center dark:text-slate-400 text-slate-600"
							}
						>
							{link.name}
						</NavLink>
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
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
						<svg
							id="theme-toggle-light-icon"
							className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<button
					className="md:hidden hover:scale-110 active:scale-90 transition-transform"
					type="button"
					onClick={() => setNavigate((current) => !current)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className={`${!navigate ? "hidden" : ""} dark:text-white`}
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
					<svg
						height="24px"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24px"
						className={`${navigate ? "hidden" : ""} dark:focus:ring-gray-700 dark:text-gray-50 text-sm dark:fill-white`}
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="3" x2="21" y1="12" y2="12"></line>
						<line x1="3" x2="21" y1="6" y2="6"></line>
						<line x1="3" x2="21" y1="18" y2="18"></line>
					</svg>
				</button>
			</div>
		</header>
	);
}
