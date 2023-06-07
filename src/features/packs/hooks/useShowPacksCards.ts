import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";

export const useShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector<boolean>((state) => state.params.isMyCards);

  const setMyPacks = () => {
    dispatch(paramsActions.setIsMyCards({ isMyCards: true }));
  };
  const setAllPacks = () => {
    dispatch(paramsActions.setIsMyCards({ isMyCards: false }));
  };

  return { isMyPacks, setAllPacks, setMyPacks };
};
