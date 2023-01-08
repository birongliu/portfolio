import React from "react";

export default function Home() {
	return (
		<main className="flex items-center mx-auto px-8 flex-col gap-6 justify-center max-w-5xl min-h-screen py-[18rem]">
		<div className="relative bottom-20">
			<div className="flex m-6 justify-center">
				<img
					className="rounded-full h-48 sm:h-48 sm:w-48 leading-normal sm:text-6xl"
					alt="icon"
					src="https://cdn.discordapp.com/avatars/358382764959203338/d175e81df15d96edfc1d68a067e4a138.webp?size=512"
				></img>
				<span id="circle" className="border-blue-700 dark:border-blue-600 rounded-full absolute border-2 border-full h-[calc(50%+44.5px)] top-5 w-[calc(50%+62.5px)]"></span>

			</div>
			<h1 className="font-bold dark:text-white text-4xl text-center">
				Bi Rong Liu
			</h1>
			<p className="text-center text-2xl dark:text-slate-400 text-slate-600">Computer Science Student</p>
			</div>
		</main>
	);
}
