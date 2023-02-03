import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/constants";

function scrollUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	if (!event.defaultPrevented) event.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

export default function Footer() {
	return (
		<footer className="p-[23px] md:flex md:items-center md:justify-between md:p-[24px]">
			<div className="flex items-center flex-col justify-between md:flex-row">
				<button
					onClick={scrollUp}
					aria-labelledby="scrollUp"
					className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
				>
					<svg
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						className="md:hidden"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="12" x2="12" y1="19" y2="5"></line>
						<polyline points="5 12 12 5 19 12"></polyline>
					</svg>
				</button>
				<span className="text-sm text-gray-500 px-1">
					© {new Date().getFullYear()}{" "}
					<a href="/" className="hover:underline">
						Bi Rong Liu
					</a>
					. All Rights Reserved.
				</span>
			</div>
			<ul className="md:flex flex-wrap items-center mt-2 text-sm text-gray-500 dark:text-gray-400 hidden md:mt-1">
				{navLinks.map((link) => (
					<li key={link.name}>
						<Link
							to={link.path}
							key={link.name}
							className="mr-4 hover:underline md:mr-6"
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
