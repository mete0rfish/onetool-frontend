import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";

const TopNavBarContainer = styled.div`
  display: flex;
  height: 128px;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 4px 40px;
  border: 1px solid #e8e8e8;
margin-bottom: -10px;
`;

const Logo = styled.img`
  width: 240px;
  height: auto;
  margin-left: -15px;
`;

const SearchBar = styled.input`
  width: 900px;
  height: 46px;
  border-radius: 50px;
  border: 3px solid #dadada;
  padding: 26px;
  font-size: 16px;
  margin-left: -80px;
`;


const Icons = styled.div`
    width: 64px;
  height: 128px;
  padding: 11px 0px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TopNavBar = () => {
  return (
    <TopNavBarContainer>
      <Link to={"/"}>
        <Logo src="/logowhite.jpeg" alt="Logo" />
      </Link>
      <SearchBar type="text" placeholder="어떤 도면을 찾고 계신가요?" />
      <Icons>
        <Link to="/cart">
          <PiShoppingCartSimpleBold style={{ width: "22px", height: "22px" }} />
        </Link>
        <Link to="/users/login">
          <FaRegUser style={{ width: "18px", height: "18px" }} />
        </Link>
      </Icons>
    </TopNavBarContainer>
  );
};

export default TopNavBar;
