import Container from "../../components/Container";
import Footer from "../../components/Footer";

import About from "../about/About";
import Connect from "../Connect/Connect";
import Education from "../education/Eduction";
import Experience from "../exper/Experience";

import Hero from "../hero/Hero";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth font-[poppins]">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Connect />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
