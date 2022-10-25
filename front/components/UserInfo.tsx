import React, { FC, useCallback, useContext } from "react";
import { User } from "../apis/users";
import styled from "styled-components";
import UserContext from "../contexts/userContext";
const Container = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  & h3 {
    margin: 0;
  }
  & > div div {
    padding: 0.2rem;
  }
  & > button {
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 2px 1px black;
  }
`;
type Props = { user: User };
const UserInfo: FC<Props> = ({ user }) => {
  const { logout } = useContext(UserContext);
  const onClickLogout = useCallback(() => {
    logout();
  }, [logout]);
  return (
    <Container>
      <h3>내 정보</h3>
      <div>
        <div>id : {user.id}</div>
        <div>username : {user.username}</div>
        <div>email : {user.email || "이메일이 없습니다."}</div>
      </div>
      <button onClick={onClickLogout}>Log Out</button>
    </Container>
  );
};

export default UserInfo;
