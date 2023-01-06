import React from "react";
import Navagator from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

export function Test() {
	return (
      <div className="text-center bg-white dark:bg-gray-900 dark:text-white"
      >home content here</div>

   )
}
export default function App() {
	return (
    <Router>
      <main>
      <Navagator />
      <Switch>
          <Route exact={true} render={Home} path="/" />
          <Route exact={true} render={Test} path="/lol" />
          <Route path="*">
            <div>404</div>
          </Route>
      </Switch>
      <Footer />
      </main>
    </Router>
	);
}