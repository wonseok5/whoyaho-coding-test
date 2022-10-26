import Link from "next/link";
import React, { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode | ReactNode[];
};

const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const TitleArea = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  padding & a {
    font-weight: bold;
  }
`;
const HomeTitle = styled.a`
  font-weight: bold;
  cursor: pointer;
`;

const BodyArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <TitleArea>
        <Link href={"/"}>
          <HomeTitle>Malang World</HomeTitle>
        </Link>
      </TitleArea>
      <BodyArea>{children}</BodyArea>
    </Container>
  );
};

export default Layout;
