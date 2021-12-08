import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, Span1, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import Aos from 'aos';
import 'aos/dist/aos.css';


// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
//   const [activeItem, setActiveItem] = useState(0);
//   const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

//   const handleClick = (e, i) => {
//     e.preventDefault();

//     if (carouselRef.current) {
//       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
//       scroll(carouselRef.current, scrollLeft);
//     }
//   }

//   const handleScroll = () => {
//     if (carouselRef.current) {
//       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

//       setActiveItem(index);
//     }
//   }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
      useEffect(() => {
        Aos.init();
    }, []) 
    return (
    <section id="about"> <br />
      <Span1>
      <SectionDivider />  
      <SectionTitle data-aos="fade-right"data-aos-duration="1300">About me</SectionTitle>
      <SectionText data-aos="fade-left"data-aos-duration="1800"> 
        I am a Software Engineer who has a genuine enthusiasm for programming, Learning new Technologies and helping people. My life changed after being told I could in any case have malignancy, I needed to completely step out of my comfort zone and roll out an improvement path for my Family and I, So what I did was grab a book and some online courses and began my Tech venture.
        *Friendly reminder that life is excessively short, so appreciate it and live the life YOU want to live.*
      </SectionText>
      </Span1>
    </section>  
)}

export default Timeline;
