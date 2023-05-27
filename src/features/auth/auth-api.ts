import { instance } from "common/api/common-api";
import axios from "axios";

export const authAPI = {
  register: (data: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", data);
  },
  login: (data: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", data);
  },
  forgot: (data: ForgotPasswordType) => {
    return axios.post<ForgotPasswordResponseType>(
      "https://neko-back.herokuapp.com/2.0/auth/forgot",
      data
    );
  },
};

// types
export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">;
export type ArgLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">;
};
export type ForgotPasswordType = {
  email: string;
  from?: string;
  message: string;
};
export type ForgotPasswordResponseType = {
  answer: boolean;
  html: boolean;
  info: string;
  success: boolean;
};

export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};
