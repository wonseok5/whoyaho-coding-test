import Link from "next/link";
import React, { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/userContext";
import Login from "./Login";
import UserInfo from "./UserInfo";
type Props = {
  children: ReactNode | ReactNode[];
};

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
`;
const TitleArea = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding & a {
    font-weight: bold;
  }
`;

const Layout: FC<Props> = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <TitleArea>
        <Link href={"/"}>
          <a>Malang World</a>
        </Link>
      </TitleArea>
      {user.id === 0 ? <Login /> : <UserInfo user={user} />}
      {children}
    </Container>
  );
};

export default Layout;
