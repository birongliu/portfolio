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
   createdAt: string
   language: string,
   updatedAt: string
}
export interface GithubRepoDataOptions {
   private: boolean,
   created_at: string,
   pushed_at: string,
   id: string,
   description: string,
   topics: string[]
   language: string
   name: string,

}

export interface GithubRepoResultOptions {
   id: string
   name: string
   language: string
   topics: string[]
   createdAt: string
   updatedAt: string
   description: string
   image: ImageOptions
}
export interface ImageOptions {
   name: string,
   url: string,
}
