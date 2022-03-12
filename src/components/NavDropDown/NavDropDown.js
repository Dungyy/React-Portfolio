import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./NavDropDownStyles";

const NavDropDown = (props) => (
  <DropDownContainer>
    <DropDownItem>
      <DropDownItemDesc>
        <DropDownItemTitle>NavDropDown</DropDownItemTitle>
        <FaLocationArrow size="3rem" />
      </DropDownItemDesc>
    </DropDownItem>
    <DropDownIcon></DropDownIcon>
  </DropDownContainer>
);

export default NavDropDown;
