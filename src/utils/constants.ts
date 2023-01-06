import Home from "../components/Home/Home";
import Project from "../components/Project/Project";

export const navLinks = [
   { name: 'Home', path: '/' },
   { name: 'About', path: '/about' },
   { name: 'Contact', path: '/contact' },
   { name: "project", path: "/project"}
];
export const routes = [ 
{ name: 'Home', path: '/', element: Home, },
{ name: 'About', path: '/about', element: Project },
{ name: "project", path: "/project", element: Project }
]
export const LogoName = "Bi Rong";