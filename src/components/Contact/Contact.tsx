import React, { useState } from "react";
import github from "../../images/github-mark.png";
import linkedIn from "../../images/LinkedIn.png";
import { useNavigate } from "react-router-dom";

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const [contacts, setContacts] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});

	function onFormSubmit(event: React.FormEvent) {
		event.preventDefault();
		console.log(contacts);
	}
	const navigate = useNavigate();
	return (
		<main className="max-w-5xl mx-auto min-h-screen md:p-20 pt-20 px-10 mt-10">
			<div className="grid md:grid-cols-2 grid-cols-1 dark:text-white">
				<section>
					<h2 className="text-center font-bold text-lg">Contact Form</h2>
					<form id="contact-form" onSubmit={onFormSubmit} className="mt-3">
						<div className="w-full mb-6 group flex">
							<span
								key="name"
								className="py-1 border h-fit px-2 rounded-l-lg bg-gray-600 text-gray-400 border-gray-600"
							>
								@
							</span>
							<input
								id="name"
								className="py-1 focus:outline-none focus:ring-0 focus:border-blue-500 border w-full bg-transparent outline-none pl-2 rounded-r-lg border-gray-600 "
								placeholder="Your name"
								type="text"
								onChange={(event) =>
									setContacts((prev) => {
										return { ...prev, name: event.target.value };
									})
								}
								required
							/>
						</div>
						<div className="w-full mb-6 group flex">
							<span className="py-1 border h-fit px-2 rounded-l-lg bg-gray-600 text-gray-400 border-gray-600">
								<svg
									aria-hidden="true"
									className="w-4 h-6 object-contain text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</span>
							<input
								id="Email"
								className="focus:outline-none focus:ring-0 focus:border-blue-600 border w-full bg-transparent outline-none pl-2 rounded-r-lg border-gray-600"
								placeholder="Your Email"
								type="email"
								required
								onChange={(event) =>
									setContacts((prev) => {
										return { ...prev, email: event.target.value };
									})
								}
							/>
						</div>
						<textarea
							id="message"
							rows={5}
							className="resize-none block py-1 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
							placeholder="Leave a message..."
							required
							onChange={(event) =>
								setContacts((prev) => {
									return { ...prev, message: event.target.value };
								})
							}
						/>
						<button
							form="contact-form"
							type="submit"
							className="border-rounded p-1 w-full mt-2 rounded-md dark:bg-slate-500 bg-slate-400"
						>
							Submit
						</button>
					</form>
				</section>
				<section>
					<h2 className="text-center font-bold text-lg mt-2 md:mt-0">
						Follow me on Social Media.
					</h2>
					<div className="grid justify-center">
						<ul className="text-center">
							<li className="inline-block px-4 py-2">
							<a href="https://github.com/birongliu">
								<img className="w-20 h-20" src={github} alt="github"></img>
							</a>
							</li>
							<li className="inline-block px-4 py-2">
							<a href="https://www.linkedin.com/in/birongliu">
								<img className="h-20 w-22" src={linkedIn} alt="github"></img>
							</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
}
