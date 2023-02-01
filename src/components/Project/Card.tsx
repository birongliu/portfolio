import React from "react";
import Utils from "../../utils/Utils";
import { CardDataOptions, GithubCardMetaData } from "../../utils/Types";

export default function Card({
	data,
}: {
	data: CardDataOptions<GithubCardMetaData>[];
}) {
	return (
		<ul className="gap-6 lg:gap-8 md:gap-4 grid grid-cols-1 lg:grid-cols-3 place-items-stretch pt-12 md:grid-cols-2 sm:grid-cols-1">
			{data.map((card) => (
				<li key={Utils.generateRandomKey()} className="animate-pop">
					<section className="flex flex-col dark:bg-slate-800 h-full hover:-translate-y-2 hover:shadow-4xl overflow-hidden relative rounded-xl shadow-md transition-[box-shadow,transform]">
						<div className="relative">
							<img
								className="h-auto w-full"
								src={card.image}
								key={Utils.generateRandomKey()}
								alt={card.title}
							/>
							<span
								key={Utils.generateRandomKey()}
								className="capitalize text-slate-300 text-2xl absolute bottom-0 left-0 right-0 px-4 py-2 font-bold"
							>
								{card.title}
							</span>
						</div>
						<div className="px-3 py-2">
							{card.topics.map((tag) => (
								<span
									key={Utils.generateRandomKey()}
									className="capitalize text-xs font-semibold inline-block py-1 px-2 rounded text-black bg-blue-400 mr-1 first:-ml-1"
								>
									#{tag}
								</span>
							))}
						</div>
						<div>
							<h2 className="ml-2 text-base font-bold text-gray-600 dark:text-gray-400 underline">Description</h2>
							<p className="mb-2 ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
								{card.description}
							</p>
							<h2 className="ml-2 text-base font-bold text-gray-600 dark:text-gray-400 underline">Project Info</h2>
							<div className="mb-2 ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
								<h2>Language: {card.metadata.language}</h2>
								<h2>CreatedAt: {card.metadata.createdAt}</h2>
                                                                <h2>UpdatedAt: {card.metadata.updatedAt}</h2>
							</div>
						</div>
					</section>
				</li>
			))}
		</ul>
	);
}
