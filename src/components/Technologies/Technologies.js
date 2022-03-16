import React from "react";
import {
  DiReact,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiPython,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import ScrollAnimation from "../Animations/ScrollAnimation";

const Technologies = () => {
  return (
    <ScrollAnimation>
      <Section id="tech">
        {" "}
        <br />
        <SectionDivider />
        <br />
        <SectionTitle
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          Technologies
        </SectionTitle>
        <SectionText
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          I work with a wide range of technologies from
          ReactJS for frontend UI/UX Design, MongoDB as a database, NodeJS for
          backend, and ExpressJS for making HTTPS and API requests.
        </SectionText>
        <List>
          <ListItem>
            <ListContainer>
              <ListTitle data-aos="fade-right" data-aos-duration="900">
                Front-End
              </ListTitle>
              <ListParagraph data-aos="fade-right" data-aos-duration="1000">
                <DiHtml5 size="3rem" />
                HTML <br />
                <DiCss3 size="3rem" />
                CSS <br />
                <DiJavascript1 size="3rem" />
                JavaScript <br />
                <DiReact size="3rem" /> ReactJS
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <ListContainer>
              <ListTitle data-aos="fade-up" data-aos-duration="900">
                Back-End
              </ListTitle>
              <ListParagraph data-aos="fade-up" data-aos-duration="1000">
                <DiNodejsSmall size="3rem" />
                NodeJS <br />
                <DiPython size="3rem" />
                Python
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <ListContainer>
              <ListTitle data-aos="fade-left" data-aos-duration="900">
                Tools
              </ListTitle>
              <ListParagraph data-aos="fade-left" data-aos-duration="1000">
                ExpressJS | NextJS | ViteJS <br /> MongoDB & Atlas | MySql <br />{" "}
                BootStrap5 | NPM | RESTful API <br /> GIT | GitHub Version Control{" "}
                <br />
                Visual Studio Code
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
      </Section>
      <br />
    </ScrollAnimation>
  );
};

export default Technologies;
