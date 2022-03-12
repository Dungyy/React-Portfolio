import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle
          main
          center
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
        >
          Hello!
        </SectionTitle>
        <SectionText
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          I am Erick Munoz a self-Taught Software Engineer 
        </SectionText>

        {/* <Button
          onClick={() => (window.location = "mailto:erickmunoz13@gmail.com")}
        >
          Contact Me
        </Button> */}
        <Button
          onClick={() =>
            window.open(
              "https://calendly.com/erickmunoztech/phone-call-meeting"
            )
          }
        >
          Book Me!
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
