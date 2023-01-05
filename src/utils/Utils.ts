import { Theme } from "./Types";

export default class Utils {
   static getCurrentTheme(): Theme {
      const storageTheme = localStorage.getItem("theme") as Theme;
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const currentTheme = storageTheme ? storageTheme : (systemTheme ? "dark" : "light");
      return currentTheme;
   }
}