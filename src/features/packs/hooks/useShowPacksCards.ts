import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";
import { selectorUserId } from "features/auth/authSelectors";
import { selectorIsMyPacks } from "features/params/paramsSelectors";

export const useShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector(selectorIsMyPacks);
  const user_id = useAppSelector(selectorUserId);

  const setMyPacks = () => {
    dispatch(paramsActions.setIsMyPacks({ isMyPacks: true }));
    dispatch(paramsActions.setUserId({ userId: user_id }));
  };
  const setAllPacks = () => {
    dispatch(paramsActions.setIsMyPacks({ isMyPacks: false }));
    dispatch(paramsActions.setUserId({ userId: null }));
  };

  return { isMyPacks, setAllPacks, setMyPacks };
};
