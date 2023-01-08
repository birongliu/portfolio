import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	FourOFour,
	Navbar,
	Footer,
	UnderConstruction,
} from "./components";

export default function App() {
	return (
		<div className="dark:bg-gray-900 bg-slate-300">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<UnderConstruction />}></Route>
					<Route path="/project" element={<UnderConstruction />}/>
					<Route path="/404" element={<FourOFour />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
