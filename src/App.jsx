import Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App;