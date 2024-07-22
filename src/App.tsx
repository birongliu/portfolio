import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import FloatingNav from "./components/ui/FloatingNav";
import "./global.css";
import { navItems } from "./lib/constants";

function App() {
  return (
    <main className="relative bg-slate-900 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
