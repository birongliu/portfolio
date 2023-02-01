import axios from "axios";
import { GithubRepoDataOptions, GithubRepoResultOptions, ImageOptions, Theme } from "./Types";

export default class Utils {
   public static getCurrentTheme(): Theme {
      const storageTheme = localStorage.getItem("theme") as Theme;
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const currentTheme = storageTheme ? storageTheme : (systemTheme ? "dark" : "light");
      return currentTheme;
   }
   public static switchMobileTheme(currentTheme: Theme) {
      const theme = (document.querySelector('meta[name="theme-color"]') as Element);
      const currentColorTheme = currentTheme === "dark" ? "#11827" : "#cbd5e1";
      theme.setAttribute("content", currentColorTheme);
   }
   public static async getGithubRepo(): Promise<GithubRepoResultOptions[]> {
      const headers = {
         headers: {
            "Accept": "application/vnd.github+json",
            'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
         }
      };
      const response = await axios.get('https://api.github.com/search/repositories?q=user:birongliu', headers);
      const repos = response.data.items as GithubRepoDataOptions[];
      return repos
         .filter(project => images.some(image => image.name.toLowerCase() === project.name.toLowerCase()))
         .map(project => ({
            id: project.id,
            name: project.name,
            language: project.language,
            topics: project.topics,
            updatedAt: Intl.DateTimeFormat("en-US").format(new Date(project.pushed_at)),
            createdAt: Intl.DateTimeFormat("en-US").format(new Date(project.created_at)),
            description: project.description,
            image: images.find(e => e.name.toLowerCase() === project.name.toLowerCase()) ?? { name: "lol", url: ""}
         }));
   }
   public static toProperCase(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
   }
   public static generateRandomKey() {
      const array = new Uint32Array(10);
      const data = crypto.getRandomValues(array);
      return data[Math.floor(Math.random() * data.length)]
   }
   public static handleTheme(
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>,
   ) {
      if(!event.defaultPrevented) event.preventDefault();
      const currentTheme = Utils.getCurrentTheme();
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      Utils.switchMobileTheme(newTheme)
      document.documentElement.classList.add(newTheme);
      document.documentElement.classList.remove(currentTheme);
      setTheme(newTheme)
   }
}
 const images: ImageOptions[] = [
   {
      name: Utils.toProperCase("discord.js-button-paginator-advanced"),
      url: "https://cdn.discordapp.com/attachments/473528924027224075/1065307808251248731/Screenshot_2023-01-18_at_11.32.49_AM.png"
   },
   {
      name: Utils.toProperCase("personalWebsite"),
      url: "https://cdn.discordapp.com/attachments/473528924027224075/1065307808251248731/Screenshot_2023-01-18_at_11.32.49_AM.png"
}]
