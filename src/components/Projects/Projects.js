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
import ScrollAnimation from "../ScrollAnimations/ScrollAnimation";

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
        <SectionDivider />
        <SectionTitle
          main
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          Projects
        </SectionTitle>
        <GridContainer data-aos="fade-in">
          {projects.map(
            ({ id, image, title, description, source, tags, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent data-aos="fade-in">
                  <HeaderThree>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo data-aos="fade-up" data-aos-duration="1500">
                  {description}
                </CardInfo>
                <div>
                  <TitleContent
                    data-aos="zoom-fade-in"
                    data-aos-duration="1500"
                  >
                    Stack
                  </TitleContent>
                  <TagList data-aos="zoom-in-up" data-aos-duration="1500">
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList data-aos="flip-up" data-aos-duration="1500">
                  <ExternalLinks href={visit}>Live</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </ScrollAnimation>
  );
};

export default Projects;
