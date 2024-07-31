import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

interface IUserFormGroup {
  children: React.ReactNode;
}

const UserFormGroup = ({ children }: IUserFormGroup) => {
  return <FormGroup>{children}</FormGroup>;
};

export default UserFormGroup;
