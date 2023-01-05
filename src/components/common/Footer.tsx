import React from "react";
import { navLinks, LogoName } from "../../utils/constants";
export default function Footer() {
	return (
		<footer className="absolute inset-x-0 bottom-0 p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2023{" "}
				<a href="https://flowbite.com/" className="hover:underline">
					{`${LogoName}™`}
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				{navLinks.map((link) => (
					<li key={link.name}>
						<a href={link.path} className="mr-4 hover:underline md:mr-6 ">
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
}
