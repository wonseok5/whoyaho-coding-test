import type { NextPage } from "next";
import { useCallback, useContext, useMemo } from "react";
import Layout from "../components/Layout";
import UserAuth from "../components/UserAuth";
import UserInfo from "../components/UserInfo";
import UserContext from "../contexts/userContext";
import styled from "styled-components";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = useMemo(() => user.id > 0, [user.id]);
  const router = useRouter();
  const onPressMainButton = useCallback(
    (targetPage: string) => () => {
      router.push(targetPage);
    },
    [router]
  );
  return (
    <Layout>
      {isLoggedIn ? (
        <>
          <UserInfo user={user} />
          <MainButton onClick={onPressMainButton("/writeArticle")}>
            글쓰기
          </MainButton>
          <MainButton onClick={onPressMainButton("/articles")}>
            글 목록
          </MainButton>
        </>
      ) : (
        <UserAuth isLogin={true} />
      )}
    </Layout>
  );
};

const MainButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;
  padding: 1rem;
`;

export default Home;
