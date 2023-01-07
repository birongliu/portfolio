import React from "react";

export default function Home() {
	return (
		<div className="flex items-center mx-auto px-8 flex-col gap-6 justify-center max-w-5xl min-h-screen py-20">
		<div className="relative bottom-20 text-center">
			<div className="relative m-6">
				<img
					className="rounded-full h-40 sm:h-48 sm:w-48 w-40"
					alt="icon"
					src="https://cdn.discordapp.com/avatars/358382764959203338/d175e81df15d96edfc1d68a067e4a138.webp?size=512"
				></img>
				<span className="rounded-full -translate-x-1/2 -translate-y-1/2 absolute border-2 border-slate-500 h-[calc(100%+16px)] left-1/2 top-1/2 w-[calc(100%+16px)] opacity-0 origin-center motion-safe:animate-[avatarring_2s_linear_2]"/>
				<span className="rounded-full -translate-x-1/2 -translate-y-1/2 absolute border-2 border-slate-500 h-[calc(100%+16px)] left-1/2 top-1/2 w-[calc(100%+16px)]" />
				<span className="rounded-full -translate-x-1/2 -translate-y-1/2 absolute border-2 border-slate-500 h-[calc(100%+16px)] left-1/2 top-1/2 w-[calc(100%+16px)] opacity-0 origin-center motion-safe:animate-[avatarring_2s_linear_1s]" />
			</div>
			<h1 className=" dark:text-white font-bold text-3xl">
				Bi Rong Liu
			</h1>
			<p className="dark:text-slate-400 text-slate-600">Computer Science Student</p>
			</div>
		</div>
	);
}
