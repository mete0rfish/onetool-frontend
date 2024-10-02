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
`;

const Logo = styled.img`
  width: 140px;
  height: 34px;
  margin-left: 30px;
`;

const SearchBar = styled.input`
  width: 812px;
  height: 46px;
  margin-left: 20px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  padding: 26px;
  font-size: 16px;
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
`;

const LogoANDInput = styled.div`
  display: flex;
  align-items: center;
`;

const TopNavBar = () => {
  return (
    <TopNavBarContainer>
      <div></div>
      {/* temp div */}
      <LogoANDInput>
        <Link to={"/"}>
          <Logo src="/logowhite.jpeg" alt="Logo" />
        </Link>
        <SearchBar type="text" placeholder="어떤 도면을 찾고 계신가요?" />
      </LogoANDInput>
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
