import React from "react";
import styled from "styled-components";

const BackButton = styled.button`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

interface IFaqBackButton {
  children: React.ReactNode;
}

const FaqBackButton = ({ children }: IFaqBackButton) => {
  return <BackButton>{children}</BackButton>;
};

export default FaqBackButton;
