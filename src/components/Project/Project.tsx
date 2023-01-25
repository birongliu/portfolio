import React, { useState } from "react";
import { useQuery } from "react-query";
import Utils from "../../utils/Utils";
import Card from "./Card";
import {
	CardDataOptions,
	GithubCardMetaData,
	GithubRepoResultOptions,
} from "../../utils/Types";
import NotFound from "./NotFound";

const resolver = (
	data: GithubRepoResultOptions[],
): CardDataOptions<GithubCardMetaData>[] => {
	return data.map((project) => ({
		...project,
		image: project.image.url,
		title: project.name,
		metadata: {
			createdAt: project.createdAt,
			language: project.language,
		},
	}));
};

interface SearchBaseOptions<T extends boolean> {
	isError: T;
	query: string;
}

export interface SearchFailureResult<T extends boolean = true>
	extends SearchBaseOptions<T> {
	isError: T;
	error: string;
}

export interface SearchSuccessResult<T extends boolean = false>
	extends SearchBaseOptions<T> {
	isError: T;
	result: CardDataOptions<GithubCardMetaData>[];
}

export default function Project() {
	const { data } = useQuery("fetchRepo", {
		queryFn: Utils.getGithubRepo,
	});
	const [search, setSearch] = useState<
		SearchFailureResult | SearchSuccessResult
	>({
		isError: false,
		result: [],
		query: "",
	});
	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (!event.defaultPrevented) event.preventDefault();
		if(!event.target.value.length) return setSearch({isError: false, query: "", result: resolver(data ?? [])})
		return setSearch((prev) => {
			if(!prev.isError && !prev.result.length) return { query: "", result: resolver(data ?? []), isError: false }
			return {...prev, query: event.target.value, };
		});
	}
	function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
		if (!event.defaultPrevented) event.preventDefault();
		const findQuery =
			(data &&
				data.filter(
					(project) =>
						project.name.toLowerCase() === search.query.toLowerCase() || project.topics.some(topic => topic.toLowerCase() === search.query.toLowerCase()),
				)) ??
			[];
		return findQuery.length
			? setSearch({ ...search, result: resolver(findQuery), isError: false })
			: setSearch({ ...search, isError: true, error: search.query });
	}
	return (
		<main className="px-9 max-w-5xl mx-3 md:min-w-min lg:mx-auto min-h-screen py-20">
			<form
				onSubmit={handleOnSubmit}
				id="searchForm"
				className="flex items-center mt-5"
			>
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
						onFocus={(e) => e.preventDefault()}
						onInvalid={(e) =>
							e.currentTarget.validity.valueMissing
								? e.currentTarget.setCustomValidity(
										"Please provide a search term",
								  )
								: e.currentTarget.setCustomValidity("")
						}
						id="simple-search"
						onChange={handleOnChange}
						className="dark:text-white rounded-xl bg-slate-200 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for project by name or tags"
						required
					/>
				</div>
			</form>
			{!search.isError ? (
				data && <Card data={search.query.length ? search.result : resolver(data)} />
			) : (
				<NotFound errorMessage={search.error} />
			)}
		</main>
	);
}
