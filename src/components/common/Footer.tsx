import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/constants";
export default function Footer() {
	return (
		<footer className="p-5 shadow md:flex md:items-center md:justify-between md:p-6">
			<span className="text-sm text-gray-500 sm:text-center">
				© {new Date().getFullYear()}{" "}
				<a href="https://flowbite.com/" className="hover:underline">
					Bi Rong Liu
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				{navLinks.map(link => (
					<li key={link.name}>
						<Link to={link.path} key={link.name} className="mr-4 hover:underline md:mr-6">
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
