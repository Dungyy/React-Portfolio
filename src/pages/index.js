import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ScrollAnimation from "../components/Animations/ScrollAnimation";
const Home = () => {
  return (
    <ScrollAnimation>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <About />
      </Layout>
    </ScrollAnimation>
  );
};

export default Home;
