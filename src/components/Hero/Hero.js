import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroContainer } from "./HeroStyles";
import Typist from "react-typist";
import Link from "next/link";
import ButtonSection from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <HeroContainer>
        <LeftSection>
          <SectionTitle
            main
            center
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            Hey!
            <br />
            I'm Erick
          </SectionTitle>
          <SectionText
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1300"
          >
            <p>A Software Developer with a genuine enthusiasm for programming, Learning new technologies and helping humans.</p>
            {/* <Typist>
              <span> I'm a Self-Taught Software Engineer </span>
              <Typist.Backspace count={19} delay={5000} />
              <span> Web Developer </span>
              <Typist.Backspace count={15} delay={3000} />
              <span> UI/UX Developer </span>
              <Typist.Backspace count={29} delay={5000} />
              <span> down to earth person with a passion for programming and helping others</span>
              <Typist.Delay ms={5000} />
              <br />
              <br />
              <span> Contact me for a chat, otherwise check out my portfolio below</span>
              <Typist.Delay ms={500} />
            </Typist> */}
          </SectionText>

          <Button
            onClick={() => (window.location = "/about")}
          >
            Let's work together
          </Button>
        </LeftSection>
        {/* <Button>
          <Link href="#about" style={{color: 'white'}}>Let's work together</Link>
        </Button> */}
      </HeroContainer>
    </Section>
  );
};

export default Hero;
