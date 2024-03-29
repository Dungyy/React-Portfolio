import React, { useState, useRef, useEffect } from "react";
// import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import {
  Section,
  Span1,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { TimeLineData } from '../../constants/constants';
import "aos/dist/aos.css";

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <section id="about">
      {" "}
      <br />
      <Span1>
        <SectionTitle data-aos="fade-right" data-aos-duration="1300">
          About me
        </SectionTitle>
        <SectionDivider />


        <SectionText data-aos="fade-left" data-aos-duration="1800">
          I am a Software Developer who has a genuine enthusiasm for
          programming, Learning new technologies, and helping people. My life
          changed after being told I could have cancer malignancy I needed to
          completely step out of my comfort zone and make an improvement path
          for my family and me, So what I did was grab a book and some online
          courses and began my Tech venture.
          <br />
          *Friendly reminder that life is short, so appreciate it and live the
          life YOU want to live.*
        </SectionText>
      </Span1>

    </section>
  );
};

export default Timeline;
