import { createContext, FC, ReactNode, useState } from "react";
import React from "react";

export type User = {
  id: number;
  username: string;
  email: string;
};
export type UserContextType = {
  user: User;
};

const defaultUserContext: UserContextType = {
  user: {
    id: 0,
    username: "",
    email: "",
  },
};

const UserContext = createContext<UserContextType>(defaultUserContext);

type UserContextProps = {
  children: ReactNode | ReactNode[];
};

export const UserContextProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUserContext.user);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
