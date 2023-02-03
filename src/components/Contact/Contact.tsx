import github from "../../images/github-mark.png"
import React, { useState } from "react";

interface ContactOptions {
	name?: string;
	email?: string;
	message?: string;
}

export default function Contact() {
	return (
		<main className="max-w-5xl mx-3 md:min-w-min lg:mx-auto min-h-screen p-20 mt-10">
			<div className="grid md:grid-cols-2 grid-cols-1 dark:text-white">
				<div>
					<h2 className="text-center font-bold text-lg">Contact Form</h2>
					<form className="mt-3">
						<div className="w-full mb-6 group flex">
							<span className="border-t-0 inline-flex items-center px-3 text-sm border border-b-0 border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
								@
							</span>
							<input
								className="rounded-r-md block py-1 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-t-2 border-r-2 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Your Name"
								required
							/>
						</div>
						<div className="w-full mb-6 group flex">
							<span className="inline-flex items-center px-2 text-sm border border-b-0 border-t-0 border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
								<svg
									aria-hidden="true"
									className="w-5 h-5 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</span>
							<input
								className="rounded-r-md block py-1 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-t-2 border-r-2 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder="Your Email"
								required
							/>
						</div>
						<textarea
							id="message"
							rows={5}
							className="resize-none block py-1 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder="Leave a message..."
							required
						></textarea>
						<button
							type="submit"
							className="border-rounded  w-full mt-2 rounded-md dark:bg-slate-500 bg-slate-400"
						>
							Submit
						</button>
					</form>
				</div>
				<div>
				<h2 className="text-center font-bold text-lg mt-">Social Media</h2>
				
				</div>
			</div>
		</main>
	);
}

const socials: SocialOptions = {
	image: github,
	url: "http://github.com/birongliu"
};


interface SocialOptions {
	image: string,
	url: string
}