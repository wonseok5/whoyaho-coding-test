import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  align-self: center;
  & > label {
    width: 50%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      font-weight: bold;
      width: 100px;
    }
    & > input {
      flex: 1;
    }
  }
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeInput = useCallback(
    (type: "username" | "password") => (e: ChangeEvent<HTMLInputElement>) => {
      if (type === "username") {
        setUsername(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    },
    []
  );
  return (
    <Container>
      <label>
        <span>username: </span>
        <input onChange={onChangeInput("username")} />
      </label>
      <label>
        <span>password: </span>
        <input onChange={onChangeInput("password")} />
      </label>
    </Container>
  );
};

export default Login;
