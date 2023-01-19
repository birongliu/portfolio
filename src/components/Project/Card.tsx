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
					<section className="flex flex-col dark:bg-slate-800 h-full hover:-translate-y-3 hover:shadow-4xl overflow-hidden relative rounded-xl shadow-md transition-[box-shadow,transform] last:right-2">
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
									className="capitalize text-xs font-semibold inline-block py-1 px-2 rounded text-black bg-blue-400  last:mr-0 mr-1"
								>
									#{tag}
								</span>
							))}
						</div>
						<span className="flex w-3 h-3 bg-gray-200 dark:bg-blue-600 rounded-full ml-[6px]"></span>
						<div className="relative border-l ml-3 border-gray-400 dark:border-gray-700">
							<p className="mb-2 ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
								{card.description}
							</p>
						</div>
						<span className="flex w-3 h-3 bg-gray-200 dark:bg-blue-600 rounded-full ml-[6px]" />
						<div className="relative border-l ml-3 border-gray-400 dark:border-gray-700">
							<div className="mb-2 ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
								<h2>Visibility: {card.metadata.private ? "Private" : "Public"}</h2>
								<h2>Language: {card.metadata.language}</h2>
								<h2>Timestamp: {card.metadata.createdAt}</h2>
							</div>
						</div>
					</section>
				</li>
			))}
		</ul>
	);
}
