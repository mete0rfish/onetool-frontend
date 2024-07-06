import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavBarContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
`;

const Logo = styled.h1`
  margin: 0;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 50%;
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const TopNavBar = () => {
  return (
    <TopNavBarContainer>
      <Logo>ONETOOL</Logo>
      <SearchBar type="text" placeholder="어떤 도면을 찾고 계신가요?" />
      <Icons>
        <IconLink to="/cart">🛒</IconLink>
        <IconLink to="/login">👤</IconLink>
      </Icons>
    </TopNavBarContainer>
  );
};

export default TopNavBar;
