import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Explore from "./components/Explore";
import Features from "./components/features";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Explore />
        <Features />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;