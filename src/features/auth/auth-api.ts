import { instance } from "common/api/common-api";

export const authAPI = {
    register: (data: ArgRegisterType) => {
        return instance.post<RegisterResponseType>("auth/register", data);
    },
    login: (data: ArgLoginType) => {
        return instance.post<LoginResponseType>("auth/login", data);
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
    addedUser: Omit<LoginResponseType, "token" | "tokenDeathTime">;
};

type LoginResponseType = {
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
