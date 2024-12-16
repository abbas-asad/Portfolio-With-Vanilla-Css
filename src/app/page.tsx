import About from "./components/about";
// import Contact from "./components/contact";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="l-main">
      
      <Hero />
      <About />
      <Skills />
      <Work />
{/*       <Contact /> */}
      
    </main>
  );
}
