import React from "react";

export default function NotFound({ errorMessage }: {  errorMessage: string }) {
	return (
		<main className={`"flex" items-center flex-col gap-3 justify-center pt-[13rem]`}>
			<h1 className="text-center dark:text-white font-bold text-3xl relative">
				(404) Project Not Found
			</h1>
			<p className="dark:text-slate-400 text-slate-600 relative text-center">
            Whoops, There is no project name or tags matches the query: <span className="font-bold text-center break-normal">{errorMessage}</span>.
			</p>
		</main>
	);
}
