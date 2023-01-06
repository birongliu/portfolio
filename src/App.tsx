import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, FourOFour } from "./components"

export default function App() {
	return (
		<div className="dark:bg-gray-900">
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/404" element={<FourOFour />} />
          <Route path="*" element={ <Navigate to="/404" replace />} />
				</Routes>
			</main>
		</div>
	);
}
