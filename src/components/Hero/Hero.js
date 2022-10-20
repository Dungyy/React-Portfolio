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
            Hi,
            <br />
            I'm Erick
          </SectionTitle>
          <SectionText
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1300"
          >
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

          {/* <Button
            onClick={() => (window.location = "mailto:erickmunoz13@gmail.com")}
          >
            Contact Me
          </Button> */}
        </LeftSection>
        <Button>
          <Link href="/WebDevelopment">Web Development</Link>
        </Button>
        <Button>
          <Link href="/CyberSecurity">Cyber Security</Link>
        </Button>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
