import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 2rem;
  margin-top: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LinkItem = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: #666;
  &:hover {
    color: #333;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #333;
  }
`;

const FooterBottom = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Links>
          <LinkItem href="#">Link 1</LinkItem>
          <LinkItem href="#">Link 2</LinkItem>
          <LinkItem href="#">Link 3</LinkItem>
          <LinkItem href="#">Link 4</LinkItem>
          <LinkItem href="#">Link 5</LinkItem>
          <LinkItem href="#">Link 6</LinkItem>
        </Links>
        <Icons>
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
        </Icons>
      </FooterTop>
      <FooterBottom>
        © 2024 Your Company. All rights reserved. | Privacy Policy | Terms of
        Service
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
