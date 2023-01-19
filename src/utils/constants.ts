import { ImageOptions } from "./Types";
import Utils from "./Utils";

export const navLinks = [
   { name: 'About', path: '/about' },
   { name: 'Contact', path: '/contact' },
   { name: "Project", path: "/project"}
];
export const LogoName = `<Bi Rong />`;

export const images: ImageOptions[] = [
   {
   id: Utils.toProperCase("personalWebsite"),
   url: "https://cdn.discordapp.com/attachments/473528924027224075/1065307808251248731/Screenshot_2023-01-18_at_11.32.49_AM.png"
}]