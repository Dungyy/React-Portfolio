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
      <SectionTitle main center data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        Hi,
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText data-aos="fade-up"
     data-aos-duration="3000">
        a Self-Taught React Developer that has a genuine enthusiasm for programming, Learning new Technologies and helping people. My life changed after being told I could in any case have malignancy, I needed to completely step out of my comfort zone and roll out an improvement path for my Family and I, So what I did was grab a book and some online courses and began my Tech venture.<br />
        *Friendly reminder that life is excessively short, so appreciate it and live the life YOU want to live.* 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:erickmunoz13@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
)}

export default Hero;