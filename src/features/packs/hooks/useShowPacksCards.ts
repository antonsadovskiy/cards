import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { selectorUserId } from "features/auth/authSelectors";
import { selectorIsMyPacks } from "features/packsParams/packsParamsSelectors";

export const useShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector(selectorIsMyPacks);
  const user_id = useAppSelector(selectorUserId);

  const setMyPacks = () => {
    dispatch(packsParamsActions.setIsMyPacks({ isMyPacks: true }));
    dispatch(packsParamsActions.setUserId({ userId: user_id }));
  };
  const setAllPacks = () => {
    dispatch(packsParamsActions.setIsMyPacks({ isMyPacks: false }));
    dispatch(packsParamsActions.setUserId({ userId: null }));
  };

  return { isMyPacks, setAllPacks, setMyPacks };
};
