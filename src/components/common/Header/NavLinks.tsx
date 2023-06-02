import React from "react";
import { navLinks } from "../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function NavLinks({ setNavigate, isMobile }: { isMobile: boolean, setNavigate: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<>
			{navLinks.map((link) => (
				<NavLink
					to={link.path}
					onClick={() => setNavigate(prev => !prev)}
					key={link.name}
					className={({ isActive }) =>
						`${
							!isMobile ? 
							isActive
								? "font-medium text-lg dark:hover:text-sky-300 hover:text-blue-900 px-2 text-center dark:text-sky-200 text-blue-900"
								: "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-900 px-2 text-center dark:text-slate-400 text-slate-900"
							: isActive 
							? "font-medium text-lg dark:hover:text-sky-300 hover:text-blue-900 px-2 text-center dark:text-sky-500 text-blue-900"
							: "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-900 px-2 text-center dark:text-blue-600 text-blue-700"

							}`
					}
				>
					{link.name}
				</NavLink>
			))}
		</>
	);
}
