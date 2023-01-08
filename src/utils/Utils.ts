import { Theme } from "./Types";

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
}