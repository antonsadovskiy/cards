import { instance } from "app/instance";

export const authAPI = {
  me: () => {
    return instance.post<ProfileType>("auth/me");
  },
  register: (data: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", data);
  },
  login: (data: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", data);
  },
  logout: () => {
    return instance.delete("auth/me");
  },
  forgot: (data: ForgotPasswordType) => {
    return instance.post<ForgotPasswordRequestType>("auth/forgot", data);
  },
  setNewPassword: (data: SetNewPasswordType) => {
    return instance.post<SetNewPasswordResponseType>(
      "auth/set-new-password",
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
export type SetNewPasswordType = {
  password: string;
  resetPasswordToken: string;
};
export type SetNewPasswordResponseType = {
  info: string;
  error: string;
};
export type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">;
};
export type ForgotPasswordType = {
  email: string;
  from?: string;
  message: string;
};
export type ForgotPasswordRequestType = {
  answer: boolean;
  html: boolean;
  info: string;
  success: boolean;
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
  avatar?: string;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;

  error?: string;
};
