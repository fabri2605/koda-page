import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="bg-koda-black text-koda-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
