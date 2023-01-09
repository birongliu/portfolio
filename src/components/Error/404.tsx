import React from "react";
import { useNavigate } from "react-router-dom";


export default function FourOFour() {
   const navigate = useNavigate();
	return (
		<main className="flex items-center my-auto mx-auto flex-col gap-3 justify-center max-w-5xl min-h-screen">
			<h1 className="text-center dark:text-white font-bold text-3xl relative">
				(404) Page Not Found
			</h1>
			<p className="dark:text-slate-400 text-slate-600 relative">
				Whoops, this page doesn't exist.
			</p>
			<div className="content-start relative">
				<button
					type="button"
               onClick={() => navigate("/", { replace: true })}
					className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Home
				</button>
				<button
					onClick={() => navigate(-1)}
					type="button"
					className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Back
				</button>
			</div>
		</main>
	);
}
