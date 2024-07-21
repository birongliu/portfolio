import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import FloatingNav, { navItems } from "./components/ui/FloatingNav";
import "./global.css";

function App() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
      </div>
    </main>
  );
}

export default App;
