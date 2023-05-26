import { instance } from 'common/api/common-api';

export const authAPI = {
    register: (params: ArgRegisterType) => {
        return instance.post<ProfileType>('auth/register', params);
    },
    login: (params: ArgLoginType) => {
        return instance.post('auth/login', params);
    }
};


type ArgRegisterType = {
    email: string
    password: string
}
type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
}
type ProfileType = {
    addedUser: {
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
    }
}
