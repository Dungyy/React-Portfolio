import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  button2,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:320-321-4780">320-321-4780</LinkItem>
        </LinkColumn>
        <LinkColumn
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:erickmunoz13@gmail.com">
            ErickMunoz13@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="900"
          style={{ marginLeft: "50px" }}
        >
          <LinkTitle>Schedule a Meeting</LinkTitle>
          <LinkItem href="https://calendly.com/erickmunoztech/phone-call-meeting">
            <button2>Click Here</button2>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer
        style={{ display: "flex", gap: "7px" }}
      >
        <CompanyContainer>
          <Slogan>
            "Great things happen to those who don't stop believing, trying,
            learning, and being grateful.”
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/dungyy">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/erick-munoz-2532ab219/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/codewithdungy">
            <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
