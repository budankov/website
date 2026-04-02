import "./App.css";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import StarsCanvas from "./pages/StarsBackground";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app">
      <StarsCanvas />
      <Navbar />
      <main className="main-content">
        <div className="content-wrapper">
          <Banner />
          <About />
          {/* <Experience /> */}
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
