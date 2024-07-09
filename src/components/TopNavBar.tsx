import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavBarContainer = styled.div`
  display: flex;
  height: 128px;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 0.5rem 1rem;
  border: 1px solid #e8e8e8;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: -200px;
  margin-left: 200px;
`;

const SearchBar = styled.input`
  width: 812px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  padding: 20px;
`;

const Icons = styled.div`
  width: 64px;
  height: 128px;
  padding: 11px 0px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const TopNavBar = () => {
  return (
    <TopNavBarContainer>
      <Logo src="/logowhite.jpeg" alt="Logo" />
      <SearchBar type="text" placeholder="어떤 도면을 찾고 계신가요?" />
      <Icons>
        <IconLink to="/cart">🛒</IconLink>
        <IconLink to="/users/login">👤</IconLink>
      </Icons>
    </TopNavBarContainer>
  );
};

export default TopNavBar;
