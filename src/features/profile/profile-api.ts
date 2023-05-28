import { instance } from "app/instance";
import { ProfileType } from "features/auth/auth-api";

export const profileAPI = {
  updateUser: (data: UserModelToUpdateType) => {
    return instance.put<UpdateUserResponseType>("auth/me", data);
  },
};

export type UserModelToUpdateType = {
  name?: string;
  avatar?: string;
};

export type UpdateUserResponseType = {
  updatedUser: ProfileType;
};
