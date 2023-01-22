import React, { useState } from "react";
import { useQuery } from "react-query";
import Utils from "../../utils/Utils";
import Card from "./Card";
import {
	CardDataOptions,
	GithubCardMetaData,
	GithubRepoDataOptions,
} from "../../utils/Types";
import { images } from "../../utils/constants";
import { useEffect } from "react";
import FourOFour from "../Error/404";

const resolveToCard = (
	data: GithubRepoDataOptions[] | undefined,
): CardDataOptions<GithubCardMetaData>[] => {
	if (!data) return [];
	return data.map((repo) => ({
		id: repo.id,
		title: repo.name,
		topics: repo.topics,
		metadata: {
			language: repo.language,
			private: repo.private,
			star: repo.stargazers_count,
			createdAt: Intl.DateTimeFormat("en-US").format(new Date(repo.created_at)),
		},
		description: repo.description,
		image:
			images.find((e) => e.id === Utils.toProperCase(repo.name))?.url ??
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23000000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23ffcdcc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3EDoes%20Not%20Exist%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E",
	}));
};

export default function Project() {
	const { data: projects } = useQuery("fetchRepo", {
		queryFn: async () => await Utils.getGithubRepo(),
	});
	const [project, setProject] = useState<GithubRepoDataOptions[] | undefined>(
		[],
	);
	const [search, setSearch] = useState("");
	useEffect(() => setProject(projects), [projects]);

	function onFormComplete(event: React.FormEvent<HTMLFormElement>) {
		if(!event.defaultPrevented) event.preventDefault();
		const filteredProject = projects && projects.filter(project => project.name.toLowerCase() === search.toLowerCase())
		setProject(filteredProject);
	}


	return (
		<main className="px-9 max-w-5xl mx-3 md:min-w-min lg:mx-auto min-h-screen py-20">
			<form id="searchForm" onSubmit={onFormComplete} className="flex items-center mt-5">
				<label htmlFor="simple-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="search"
						onFocus={e => e.preventDefault()}
						onInvalid={e => e.currentTarget.validity.valueMissing ? e.currentTarget.setCustomValidity("Please provide a search term") : e.currentTarget.setCustomValidity("")}
						id="simple-search"
						onChange={e => e.target.value.length ? setSearch(e.target.value) : setProject(projects)}
						className="dark:text-white rounded-xl bg-slate-200 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for project by name or tags"
						required
					/>
				</div>
				
			</form>
			{project && project.length ? (
				<Card data={resolveToCard(project)} />
			) : (
				<FourOFour />
			)}
		</main>
	);
}
