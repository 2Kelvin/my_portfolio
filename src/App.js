import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import GetInTouch from "./GetInTouch";
import Projects from "./Projects";
import Skills from "./Skills";
import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="p-6 bg-portfoliobg text-slate-400 h-full sm:p-10 md:px-16">
      <TopMenu />
      <div className=" md:w-[670px] lg:w-[980px] xl:w-[1200px] md:mx-auto">
        <Home />
        <About />
        <Skills />
        <Projects />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
