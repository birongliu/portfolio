export type Theme = "dark" | "light"

export interface CardDataOptions<T extends object> {
	image: string;
	title: string;
   id: string
	description: string;
	topics: string[];
   metadata: T;
}

export interface GithubCardMetaData {
   star: number,
   createdAt: string
   language: string,
   private: boolean,
}
export interface GithubRepoDataOptions {
   private: boolean,
   created_at: string,
   id: string,
   description: string,
   stargazers_count: number,
   topics: string[]
   language: string
   name: string
}

export interface ImageOptions {
   id: string,
   url: string,
}