import React, { useEffect} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => {

return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1700">
        Hello,
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        I'm a full-stack Developer with expertise in ReactJS for frontend, MongoDB as my database, NodeJS for backend along with ExpressJS for making HTTPS and API requests.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:erickmunoz13@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
)}

export default Hero;