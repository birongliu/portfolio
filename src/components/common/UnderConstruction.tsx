import React from "react";

export default function UnderConstruction() {
	return (
		<main className="flex items-center mx-auto px-8 flex-col gap-6 justify-center max-w-5xl min-h-screen">
			<div className="relative text-center bottom-5">
				<h1 className="dark:text-white font-bold text-3xl">
					🚧 Under construction 🚧
				</h1>
				<p className="dark:text-slate-400 text-slate-600 font-bold">
					This page is currently under construction. Please check back soon for
					updates.
				</p>
			</div>
		</main>
	);
}
