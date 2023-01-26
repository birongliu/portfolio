import React, { useEffect, useState } from "react";
import Utils from "../../../utils/Utils";
import { Theme } from "../../../utils/Types";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigator() {
	const [theme, setTheme] = useState<Theme>();
	const [navigate, setNavigate] = useState<boolean>(false);

	useEffect(() => {
		const currentTheme = Utils.getCurrentTheme();
		Utils.switchMobileTheme(currentTheme);
		document.documentElement.classList.add(currentTheme);
		setTheme(currentTheme);
	}, [theme]);

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
					<nav className={` backdrop-blur bg-opacity-50 dark:bg-opacity-50 gap-4 my-dark:text-white flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-screen px-8 py-20 bg-slate-100 dark:bg-slate-900 animate-[menu_7s_ease]`}>
						<NavLinks setNavigate={setNavigate} />
						<ThemeSwitcher theme={theme} setTheme={setTheme} />
					</nav>
				</div>
				<nav className="hidden md:block space-x-3 relative right-[49px]">
					<NavLinks setNavigate={setNavigate}/>
				</nav>
				<div className="hidden md:block">
					<ThemeSwitcher theme={theme} setTheme={setTheme} />
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
						className={`${
							navigate ? "hidden" : ""
						} dark:focus:ring-gray-700 dark:text-gray-50 text-sm dark:fill-white`}
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
