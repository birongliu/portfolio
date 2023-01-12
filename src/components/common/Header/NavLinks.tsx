import React from "react";
import { navLinks } from "../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
	return (
		<>
			{navLinks.map((link) => (
				<NavLink
					to={link.path}
					key={link.name}
					className={({ isActive }) =>
						`${
							isActive
								? "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-900 px-2 text-center dark:text-sky-200 text-sky-900"
								: "font-medium text-lg dark:hover:text-sky-200 hover:text-sky-900 px-2 text-center dark:text-slate-400 text-slate-600"
						}`
					}
				>
					{link.name}
				</NavLink>
			))}
		</>
	);
}
