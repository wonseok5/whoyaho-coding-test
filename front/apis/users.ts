import { BaseAPI } from ".";

export type UserProfile = {
  nickname: string;
  intro: string;
  profileImage: string;
  UserId: number;
};
export type User = {
  id: number;
  username: string;
  email: string | null;
  UserProfile: UserProfile | null;
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

type SaveEmailBodyDTO = {
  email: string;
};

type SaveUserProfileResponse = {
  userProfile: UserProfile;
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

  saveEmail(body: SaveEmailBodyDTO) {
    return this.post<{}, SaveEmailBodyDTO>({ endPoint: "/email", body });
  }

  saveUserProfile(body: UserProfile) {
    return this.post<SaveUserProfileResponse, UserProfile>({
      endPoint: "/userProfile",
      body,
    });
  }
}

export const UsersApi = new UsersApiHandler();
