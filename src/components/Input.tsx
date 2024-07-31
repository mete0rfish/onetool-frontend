import React from "react";
import styled from "styled-components";

// 스타일링된 Input 컴포넌트
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
  // 기타 props를 받을 수 있도록 확장
  [key: string]: any;
}

// forwardRef를 사용하여 ref 전달
const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ type, placeholder, ...rest }, ref) => {
    return (
      <InputStyle type={type} placeholder={placeholder} ref={ref} {...rest} />
    );
  }
);

export default Input;
