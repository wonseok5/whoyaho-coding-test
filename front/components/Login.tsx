import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
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
      <input onChange={onChangeInput("username")} />
      <input onChange={onChangeInput("password")} />
    </Container>
  );
};

export default Login;
