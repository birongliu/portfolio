import React from "react";
import Navagator from "./components/common/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import FourOFour from "./components/Error/404";
import Footer from "./components/common/Footer";

export default function App() {
	return (
		<div className="dark:bg-gray-900">
			<Navagator />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/404" element={<FourOFour />} />
          <Route path="*" element={ <Navigate to="/404" replace />} />
				</Routes>
			</main>
      <Footer />
		</div>
	);
}
