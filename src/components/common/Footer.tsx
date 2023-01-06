import React from "react";
import { Link } from "react-router-dom";
import { LogoName, navLinks } from "../../utils/constants";
export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="top-0 sticky p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
			<div className="sm:flex sm:items-center sm:justify-between">
				<a
					href="https://flowbite.com/"
					className="flex items-center mb-4 sm:mb-0"
				>
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="text-blue-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						{LogoName}
					</span>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					{navLinks.map(link => (
						<li key={link.name}>
						<Link to={link.path} key={link.name} className="mr-4 hover:underline md:mr-6">
							{link.name}
						</Link>
						</li>
					))}
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© {" "}
				<a href="https://flowbite.com/" className="hover:underline">
					Bi Rong Liu
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}
