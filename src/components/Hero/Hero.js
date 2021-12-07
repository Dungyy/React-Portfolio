import React, { useEffect} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
    Aos.init();
}, [])
return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500">
        Hi,
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText data-aos="fade-up"data-aos-duration="3000">
        a full-stack web Developer with expertise in ReactJS MongoDB NodeJS ExpressJS 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:erickmunoz13@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
)}

export default Hero;