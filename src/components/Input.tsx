import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 343px;
  height: 40px;
  padding: 8px;
  border: 1px solid #dbe0e4;
  border-radius: 8px;
`;

interface IInput {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: IInput) => {
  return <InputStyle type={type} placeholder={placeholder} />;
};

export default Input;
