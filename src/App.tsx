import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	FourOFour,
	Navbar,
	Footer,
	UnderConstruction,
	Contact,
	Project,
} from "./components";
import { Analytics } from '@vercel/analytics/react';
import { QueryClientProvider, QueryClient } from "react-query";

export default function App() {
	return (
		<QueryClientProvider client={new QueryClient()}> 
		<Analytics mode="production"/>
		<div className="dark:bg-gray-900 bg-slate-300 min-h-screen">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<UnderConstruction />}></Route>
					<Route path="/contact" element={<Contact />} />
					<Route path="/project" element={<Project />}/>
					<Route path="/404" element={<FourOFour />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</main>
			<Footer />
		</div>
		</QueryClientProvider>
	);
}
