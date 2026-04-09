import About from "../components/About";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <Layout>
      <Banner />
      <About />
      <Projects />
    </Layout>
  );
}

export default HomePage;
