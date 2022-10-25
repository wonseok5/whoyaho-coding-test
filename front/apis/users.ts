import { BaseAPI } from ".";

export type User = {
  id: number;
  username: string;
  email: string | null;
};
type SignupBodyDTO = {
  username: string;
  password: string;
};
type SignupResponse = {
  savedUser: User;
};

type LoginBodyDTO = {
  username: string;
  password: string;
};

type LoginResponse = {
  loginedUser: User;
};

type GetUserResponse = {
  user: User;
};
export class UsersApiHandler extends BaseAPI {
  URL = "/users";

  getUser() {
    return this.get<GetUserResponse>({ endPoint: "/" });
  }

  signup(body: SignupBodyDTO) {
    return this.post<SignupResponse, SignupBodyDTO>({
      endPoint: "/signup",
      body,
    });
  }

  login(body: LoginBodyDTO) {
    return this.post<LoginResponse, LoginBodyDTO>({ endPoint: "/login", body });
  }

  logout() {
    return this.post<{}, {}>({ endPoint: "/logout" });
  }
}

export const UsersApi = new UsersApiHandler();
