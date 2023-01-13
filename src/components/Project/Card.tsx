import React from "react";

export default function Card({ buildCard }: { buildCard: CardDataOptions[] }) {
	return (
		<ul className="gap-8 grid grid-cols-1 lg:grid-cols-3 place-items-stretch pt-12 sm:grid-cols-2 mb-10">
			{buildCard.map((card) => (
				<li className="animate-pop">
					<section className="flex flex-col dark:bg-slate-800 h-full hover:-translate-y-3 hover:shadow-4xl overflow-hidden relative rounded-xl shadow-md transition-[box-shadow,transform] last:right-2">
						<div className="relative">
							<img
								key={card.title}
								className="h-auto w-full"
								src={card.image}
								alt={`${card.title}`}
							/>
							<span className="text-slate-300 text-2xl absolute bottom-0 left-0 right-0 px-4 py-2 font-bold">
								{card.title}
							</span>
						</div>
						<div className="px-3 py-2">
							{card.tags.map((tag) => (
								<span
									key={tag}
									className="text-xs font-semibold inline-block py-1 px-2 rounded text-black bg-blue-400  last:mr-0 mr-1"
								>
									#{tag}
								</span>
							))}
						</div>
					</section>
				</li>
			))}
		</ul>
	);
}
interface CardDataOptions {
	image: string;
	title: string;
	description: string;
	tags: string[];
}

export const buildCard: CardDataOptions[] = [
	{
		tags: ["NodeJS", "Prisma", "PostgreSQL"],
		title: "Phoniex",
		description:
			"A Discord bot for virtual economy, with features like earning currency, making transactions and interacting via commands, minigames and other features.",
		image:
			"https://cdn.discordapp.com/attachments/473528924027224075/1062826868899860531/Screenshot_2023-01-11_at_3.14.05_PM.png",
	},
	{
		tags: ["NodeJS", "Lol"],
		title: "Hele",
		description: "lol??",
		image:
			"https://cdn.discordapp.com/attachments/473528924027224075/1062826868899860531/Screenshot_2023-01-11_at_3.14.05_PM.png",
	},
	{
		tags: ["NodeJS"],
		title: "Phoniex",
		description: "lol",
		image:
			"https://cdn.discordapp.com/attachments/473528924027224075/1062826868899860531/Screenshot_2023-01-11_at_3.14.05_PM.png",
	},
];
