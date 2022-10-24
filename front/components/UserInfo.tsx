import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../contexts";

type Props = { user: User };
const UserInfo: FC<Props> = ({ user }) => {
  return <div>UserInfo</div>;
};

export default UserInfo;
