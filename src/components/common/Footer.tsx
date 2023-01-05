import React from "react";
import { navLinks, LogoName } from "../../utils/constants";
export default function Footer() {
	return (
		<footer className="sticky top-[100vh] p-4 bg-white m-5 md:px-6 md:py-8 dark:bg-gray-900">
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
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						{LogoName}
					</span>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					{navLinks.map((link) => (
						<li key={link.name}>
							<a href={link.path} className="mr-4 hover:underline md:mr-6 ">
							{link.name}
						</a>
						</li>
					))}
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© {" "}
					{LogoName}™. All Rights Reserved.
			</span>
		</footer>
	);
}
