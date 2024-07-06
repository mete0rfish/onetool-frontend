import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem; /* Adjust margin as needed */
`;

const Text = styled.p`
  margin-bottom: 0.5rem; /* Space between text and banner */
  font-size: 1rem; /* Adjust font size as needed */
  color: #333;
`;

const BannerWithText = ({
  text,
  bannerText,
}: {
  text: string;
  bannerText: string;
}) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Banner text={bannerText} />
    </Container>
  );
};

export default BannerWithText;
