import styled from "styled-components";

const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

interface IUserLabel {
  children: React.ReactNode;
}

const UserLabel = ({ children }: IUserLabel) => {
  return <Label>{children}</Label>;
};

export default UserLabel;
