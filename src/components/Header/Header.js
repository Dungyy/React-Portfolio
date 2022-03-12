import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import ScrollAnimation from "../ScrollAnimations/ScrollAnimation";

const Header = () => {
  return (
    <ScrollAnimation>
      <Container>
        <Div1 data-aos="fade-in-out" data-aos-duration="2000">
          <Link href="/">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20px",
              }}
            >
              <Span style={{ fontFamily: "Sedgwick Ave Display, cursive" }}>
                Erick Munoz
              </Span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li
            data-aos="fade-up-right"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1500"
          >
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1500"
          >
            <Link href="#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li
            data-aos="fade-up-left"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1500"
          >
            <Link href="#about">
              <NavLink>About</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons>
            <AiFillGithub
              size="3rem"
              data-aos="fade-left"
              data-aos-duration="3000"
              onClick={() => window.open("https://github.com/dungyy")}
            ></AiFillGithub>
          </SocialIcons>
          <SocialIcons>
            <AiFillLinkedin
              size="3rem"
              data-aos="fade-up"
              data-aos-duration="2000"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/erick-munoz-2532ab219/"
                )
              }
            ></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons>
            <AiFillTwitterCircle
              size="3rem"
              data-aos="fade-left"
              data-aos-duration="1200"
              onClick={() => window.open("https://twitter.com/codewithdungy")}
            ></AiFillTwitterCircle>
          </SocialIcons>
        </Div3>
      </Container>
    </ScrollAnimation>
  );
};

export default Header;
