import React from "react";

export default function Home() {
	return (
		<main className="flex items-center mx-auto px-8 flex-col gap-6 justify-center max-w-5xl min-h-screen py-20">
			<div className="grid place-items-center">
			<img
					className="w-[11rem] rounded-full p-[4px] bg-gradient-to-r from-green-400 to-blue-500 dark:from-orange-500 dark:to-blue-400"
					alt="profile"
					src="https://cdn.discordapp.com/avatars/358382764959203338/d175e81df15d96edfc1d68a067e4a138.webp?size=512"
				></img>
				<h1 className="font-bold dark:text-white text-4xl pt-1">Bi Rong Liu</h1>
				<p className="text-2xl dark:text-slate-400 text-slate-600">Computer Science Student</p>

			</div>
		</main>
	);
}
