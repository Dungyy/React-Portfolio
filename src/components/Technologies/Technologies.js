import React from 'react';
import { DiReact, DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiPython} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import ScrollAnimation from '../ScrollAnimations/ScrollAnimation';

const Technologies = () =>  {
  
return(
  <ScrollAnimation>
    <Section id="tech"> <br />
      <SectionDivider /><br /> 
      <SectionTitle data-aos="fade-right" data-aos-easing="linear"
      data-aos-duration="900">Technologies</SectionTitle>
      <SectionText data-aos="fade-up-right"data-aos-duration="1000"data-aos-easing="ease-in-sine">
        I've Worked with a range of Technologies in the web development world.
        from Back-end to Front-end.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle data-aos="fade-right" data-aos-duration="900">Front-end</ListTitle>
            <ListParagraph data-aos="fade-right" data-aos-duration="1000">
              Experience with <br /> 
              <DiHtml5 size="3rem" />HTML <br /> 
              <DiCss3 size="3rem" />CSS <br /> 
              <DiJavascript1 size="3rem" />JavaScript <br /> 
              <DiReact size="3rem" /> ReactJS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle data-aos="fade-up" data-aos-duration="900">Back-end</ListTitle>
            <ListParagraph data-aos="fade-up" data-aos-duration="1000">
              Experience with <br /> 
              <DiNodejsSmall size="3rem" />Node.JS <br /> 
              <DiPython size="3rem" />Python
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle data-aos="fade-left" data-aos-duration="900">Tools</ListTitle>
            <ListParagraph data-aos="fade-left" data-aos-duration="1000">
              Experience with <br /> 
              ExpressJS | MongoDB | BootStrap <br /> API | JSON <br /> GIT/GitHub Version Control <br />VisualStudio Code
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </ScrollAnimation>
)}

export default Technologies;
