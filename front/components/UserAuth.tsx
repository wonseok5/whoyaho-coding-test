import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import UserContext from "../contexts/userContext";

type Props = {
  isLogin: boolean;
};
const UserAuth: FC<Props> = ({ isLogin }) => {
  const { signup, login } = useContext(UserContext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const onChangeInput = useCallback(
    (type: "username" | "password" | "passwordCheck") =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (type === "username") {
          setUsername(value);
        } else if (type === "password") {
          setPassword(value);
        } else {
          setCheckedPassword(value);
        }
      },
    []
  );

  const onClickButton = useCallback(
    (type: "login" | "signup") => async () => {
      if (type === "login") {
        try {
          await login({ username, password });
        } catch (error) {
          alert("login failed");
          setUsername("");
          setPassword("");
        }
      } else {
        if (password !== checkedPassword) {
          alert("비밀번호를 확인해주세요");
          setCheckedPassword("");
          return;
        }
        if (!password || !username) {
          alert("정보를 입력해주세요");
          return;
        }
        try {
          await signup({ username, password });
          router.push("/");
        } catch (error) {
          alert("signup failed");
          setUsername("");
          setPassword("");
          setCheckedPassword("");
        }
      }
    },
    [login, username, password, checkedPassword, signup, router]
  );

  return (
    <Container>
      <label>
        <span>username: </span>
        <input
          value={username}
          type="text"
          onChange={onChangeInput("username")}
        />
      </label>
      <label>
        <span>password: </span>
        <input
          value={password}
          type="password"
          onChange={onChangeInput("password")}
        />
      </label>
      {!isLogin && (
        <label>
          <span>password check: </span>
          <input
            value={checkedPassword}
            type="password"
            onChange={onChangeInput("passwordCheck")}
          />
        </label>
      )}
      {isLogin ? (
        <button onClick={onClickButton("login")}>login</button>
      ) : (
        <button onClick={onClickButton("signup")}>sign up</button>
      )}
      {
        <Link href={isLogin ? "/signup" : "/"}>
          <OtherAuthLink>{isLogin ? "sign up" : "log in"}</OtherAuthLink>
        </Link>
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  & > label {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.4rem;
    & > span {
      margin-bottom: 0.3rem;
      font-weight: bold;
    }
    & > input {
      max-width: 750px;
      padding: 0.5rem;
    }
  }
  button {
    background-color: #fc3aff;
    border-radius: 2rem;
    padding: 1rem 1rem;
    width: 50%;
    align-self: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.5);
    margin-top: 2rem;
  }
`;

const OtherAuthLink = styled.a`
  align-self: center;
  font-weight: bold;
  margin-top: 1rem;
  color: #2743fb;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default UserAuth;
