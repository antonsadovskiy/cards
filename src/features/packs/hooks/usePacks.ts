import { useAppDispatch, useAppSelector } from "common/hooks";
import { ParamsType } from "features/params/paramsSlice";
import { packsThunks } from "features/packs/packsSlice";
import { useEffect } from "react";
import { GetPacksArgsType } from "features/packs/packsAPI";

export const usePacks = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const { packName, sortPacks, max, min, page, pageCount, isMyCards } =
    useAppSelector<ParamsType>((state) => state.params);

  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  useEffect(() => {
    const payload: GetPacksArgsType = {
      packName: packName,
      min: min,
      max: max,
      sortPacks: sortPacks,
      page: page,
      pageCount: pageCount,
      user_id: isMyCards ? user_id : null,
    };
    dispatch(packsThunks.getPacks(payload));
  }, [
    dispatch,
    user_id,
    isMyCards,
    packName,
    min,
    max,
    sortPacks,
    page,
    pageCount,
  ]);

  return {
    isLoggedIn,
    dispatch,
  };
};
