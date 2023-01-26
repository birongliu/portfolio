import React from "react";

export default function NotFound({ errorMessage }: {  errorMessage: string }) {
	return (
		<main className={`"flex" items-center flex-col gap-3 justify-center pt-[13rem]`}>
			<h1 className="text-center font-bold text-3xl relatived dark:text-slate-400">
				Project Not Found
			</h1>
			<p className="dark:text-slate-400 text-slate-600 font-bold relative text-center break-all">
            Whoops, There is no project name or tags matches the query: <span className="font-bold text-center break-all">{errorMessage}</span>.
			</p>
		</main>
	);
}
