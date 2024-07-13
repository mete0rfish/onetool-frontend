import styled from "styled-components";
import { ComponentProp } from "./UserForm";

const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const UserLabel = ({ children }: ComponentProp) => {
  return <Label>{children}</Label>;
};

export default UserLabel;
