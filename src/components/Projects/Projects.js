import React, {useEffect} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Aos from 'aos';
import 'aos/dist/aos.css';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

const Projects = () => {
    useEffect(() => {
      Aos.init();
  }, [])
  return(
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="900">Projects</SectionTitle>
      <GridContainer data-aos="fade-in">
        {projects.map(({id, image, title, description, source, tags, visit}) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent data-aos="fade-in">
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo data-aos="fade-up">{description}</CardInfo>
            <div>
              <TitleContent data-aos="fade-in">Stack</TitleContent>
              <TagList data-aos="zoom-in-up">
                {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList data-aos="flip-up">
              <ExternalLinks href={visit}>Live</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
)}


export default Projects;