import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { LogoName, navLinks } from "../../utils/constants";
import Utils from "../../utils/Utils";
import { Theme } from "../../utils/Types";

function handleTheme(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>) {
	if (!event.defaultPrevented) event.preventDefault();
	const currentTheme = Utils.getCurrentTheme();
	const newTheme = currentTheme === "dark" ? "light" : "dark";
	localStorage.setItem("theme", newTheme);
	document.documentElement.classList.add(newTheme)
	document.documentElement.classList.remove(currentTheme)
	setTheme(newTheme)
}

export default function Navigator() {
	const [theme, setTheme] = useState<Theme>();

	useEffect(() => {
		const currentTheme = Utils.getCurrentTheme();
		document.documentElement.classList.add(currentTheme)
		setTheme(currentTheme);
	}, [])

	return (
		<>
			<Navbar
				className="bg-white dark:bg-gray-900 md:px-6 md:py-8"
				fluid={true}
				rounded={false}
			>
				<Navbar.Brand href="https://flowbite.com/">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						{LogoName}
					</span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<button
						onClick={(event) => handleTheme(event, setTheme)}
						id="theme-toggle"
						type="button"
						aria-label="Toggle Dark Mode"
						className="relative right-[5px] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
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
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<Navbar.Toggle  />
				</div>
				<Navbar.Collapse>
					{navLinks.map((nav) => (
						<Navbar.Link
							key={nav.name}
							href={nav.path}
							active={nav.path === "/"}
						>
							{nav.name}
						</Navbar.Link>
					))}
				</Navbar.Collapse>
			</Navbar>
			<hr className="border-gray-150 sm:mx-auto dark:border-gray-700" />
		</>
	);
}
