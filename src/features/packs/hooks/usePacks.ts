import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/packs/packsSlice";
import { useEffect } from "react";
import { selectorIsLoggedIn } from "features/auth/authSelectors";
import {
  selectorPackName,
  selectorPacksQueryParams,
} from "features/packsParams/packsParamsSelectors";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { cardsActions } from "features/cards/cardsSlice";
import {
  selectorCardPacks,
  selectorCardPacksTotalCount,
  selectorPage,
  selectorPageCount,
} from "features/packs/packsSelectors";

export const usePacks = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectorIsLoggedIn);
  const packsParams = useAppSelector(selectorPacksQueryParams);
  const page = useAppSelector(selectorPage);
  const pageCount = useAppSelector(selectorPageCount);
  const packsTotalCount = useAppSelector(selectorCardPacksTotalCount);
  const cardPacks = useAppSelector(selectorCardPacks);
  const packName = useAppSelector(selectorPackName);

  const changePageHandler = (page: number) => {
    dispatch(packsParamsActions.setPage({ page }));
  };
  const changePageCountHandler = (pageCount: number) => {
    dispatch(packsParamsActions.setPageCount({ pageCount }));
  };

  const onDebouncedHandler = (packName: string) => {
    dispatch(packsParamsActions.setPackName({ packName }));
  };

  useEffect(() => {
    dispatch(cardsParamsActions.clearParams());
    dispatch(cardsActions.clearCardsState());
    dispatch(packsThunks.getPacks(packsParams));
  }, [dispatch, packsParams]);

  return {
    packName,
    cardPacks,
    isLoggedIn,
    page,
    pageCount,
    packsTotalCount,
    onDebouncedHandler,
    changePageHandler,
    changePageCountHandler,
  };
};
