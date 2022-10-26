import React, {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";
import { User, UsersApi } from "../apis/users";
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
    display: flex;
    align-items: center;
    & > button {
      border: 1px solid black;
      margin-left: 0.5rem;
      padding: 0.2rem 1rem;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0.5rem;
    }
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
  const [emailEditMode, setEmailEditMode] = useState(false);
  const [email, setEmail] = useState<null | string>(user.email);
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onPressEditEmail = useCallback(() => {
    setEmailEditMode(true);
  }, []);
  const onSaveEditEmail = useCallback(async () => {
    await UsersApi.saveEmail({ email: email ?? "" });
    setEmailEditMode(false);
  }, [email]);
  const onClickLogout = useCallback(() => {
    logout();
  }, [logout]);
  return (
    <Container>
      <h3>내 정보</h3>
      <div>
        <div>id : {user.id}</div>
        <div>username : {user.username}</div>
        {!emailEditMode ? (
          <div>
            email : {email || "이메일이 없습니다."}{" "}
            <button onClick={onPressEditEmail}>수정</button>
          </div>
        ) : (
          <div>
            email :
            <input type="text" value={email ?? ""} onChange={onChangeEmail} />
            <button onClick={onSaveEditEmail}>수정 완료</button>
          </div>
        )}
      </div>
      <button onClick={onClickLogout}>Log Out</button>
    </Container>
  );
};

export default UserInfo;
