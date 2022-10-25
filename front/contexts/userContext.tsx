import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import React from "react";
import { User, UsersApi } from "../apis/users";

export type UserContextType = {
  user: User;
  signup: (signupInfo: { username: string; password: string }) => Promise<void>;
  login: (loginInfo: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const defaultUserContext: UserContextType = {
  user: {
    id: 0,
    username: "",
    email: "",
  },
  signup: async (signupInfo) => {},
  login: async (loginInfo) => {},
  logout: async () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

type UserContextProps = {
  children: ReactNode | ReactNode[];
};

export const UserContextProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUserContext.user);

  const getUser = useCallback(async () => {
    try {
      const { user } = await UsersApi.getUser();
      setUser(user);
    } catch (error) {}
  }, []);

  const signup = useCallback(
    async (signupInfo: { username: string; password: string }) => {
      const { username, password } = signupInfo;
      await UsersApi.signup({ username, password });
      try {
        await getUser();
      } catch (error) {
        alert("failed");
      }
    },
    [getUser]
  );

  const login = useCallback(
    async (loginInfo: { username: string; password: string }) => {
      const { username, password } = loginInfo;
      try {
        await UsersApi.login({ username, password });
        await getUser();
      } catch (error) {
        throw error;
      }
    },
    [getUser]
  );
  const logout = useCallback(async () => {
    try {
      await UsersApi.logout();
      setUser(defaultUserContext.user);
    } catch (error) {
      alert("failed to logout");
    }
  }, []);
  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, [getUser]);
  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
