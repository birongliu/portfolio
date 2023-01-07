import React from "react";

export default function UnderConstruction() {
	return (
		<main className="container flex items-center mx-auto px-20 flex-col gap-3 justify-center max-w-5xl min-h-screen py-20 whitespace-no-wrap sm:whitespace-normal">
			<div className="relative bottom-20 text-center">
				<h1 className=" dark:text-white font-bold text-3xl">
					Under construction, check back soon!
				</h1>
				<p className="dark:text-slate-400 text-slate-600">
					This site is currently under construction. Please check back soon for
					updates.
				</p>
			</div>
		</main>
	);
}
