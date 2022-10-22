import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.xsm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 3rem;
  font-family: "Sedgwick Ave Display", cursive;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  transition: 0.3s ease;
  border-radius: 20px;
  border: 10px;
  padding: 8px;
  background: black;
  display: flex; 
  flex-direction: center; 
  text-align: center;
  color: white;
  box-shadow: .1px 0px .1px 1px white;
  


  &:hover {
    color: black;
    font-weight: 600;
    opacity: 1;
    cursor: pointer;
    background: ${({ alt }) =>
      alt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"} !important;
    text-decoration-color: rgba(255, 255, 255, 0.75);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    display: flex; 
  flex-direction: center; 
  text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.2rem;
    display: flex; 
  flex-direction: center; 
  text-align: center;
  margin-top: 15px;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 25px;
  padding: 8px;
  background: #000;

  &:hover {
    background: ${({ alt }) =>
      alt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"} !important;
    transform: scale(1.2);
    cursor: pointer;
    color: black;
  }
`;
