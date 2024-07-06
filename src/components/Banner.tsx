import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Banner = ({ text }: { text: string }) => {
  return (
    <BannerContainer>
      <h2>{text}</h2>
    </BannerContainer>
  );
};

export default Banner;
