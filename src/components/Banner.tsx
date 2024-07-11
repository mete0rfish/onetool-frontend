import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 343px;
  border-radius: 16px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = ({ text }: { text: string }) => {
  return (
    <BannerContainer>
      <h2>{text}</h2>
    </BannerContainer>
  );
};

export default Banner;
