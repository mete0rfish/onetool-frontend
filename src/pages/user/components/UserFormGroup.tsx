import styled from "styled-components";
import { ComponentProp } from "./UserForm";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const UserFormGroup = ({ children }: ComponentProp) => {
  return <FormGroup>{children}</FormGroup>;
};

export default UserFormGroup;
