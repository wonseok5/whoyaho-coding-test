import type { NextPage } from "next";
import { useContext, useMemo } from "react";
import Layout from "../components/Layout";
import UserAuth from "../components/UserAuth";
import UserInfo from "../components/UserInfo";
import UserContext from "../contexts/userContext";

const Home: NextPage = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = useMemo(() => user.id > 0, [user.id]);
  return (
    <Layout>
      {isLoggedIn ? <UserInfo user={user} /> : <UserAuth isLogin={true} />}
    </Layout>
  );
};

export default Home;
