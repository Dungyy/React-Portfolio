import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import ScrollAnimation from "../Animations/ScrollAnimation";

const Projects = () => {
  return (
    <ScrollAnimation>
      <Section
        nopadding
        id="projects"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
        <SectionTitle
          main
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          Services
        </SectionTitle>
        <GridContainer data-aos="fade-in">
          {projects.map(
            ({ id, image, title, description, source, tags, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                
                <TitleContent data-aos="fade-in"><br/>
                  <HeaderThree>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo data-aos="fade-up" data-aos-duration="1500">
                  {description}
                </CardInfo>
                <div><br/>
                  <TitleContent
                    data-aos="zoom-fade-in"
                    data-aos-duration="1500"
                  >
                    Stack
                  </TitleContent><br/>
                  <TagList data-aos="zoom-in-up" data-aos-duration="1500">
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div> 
                 <UtilityList data-aos="flip-up" data-aos-duration="1500">
                  <ExternalLinks href={visit}>Live</ExternalLinks>
                  <ExternalLinks href={source}>Code</ExternalLinks>
                </UtilityList>
                <br />
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </ScrollAnimation>
  );
};

export default Projects;
