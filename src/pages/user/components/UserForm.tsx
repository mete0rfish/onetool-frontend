import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export interface ComponentProp {
  children: React.ReactNode;
}

const UserForm = ({ children }: ComponentProp) => {
  return <Form>{children}</Form>;
};

export default UserForm;
