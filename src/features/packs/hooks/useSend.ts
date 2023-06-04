import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsThunks } from "features/cards/cardsSlice";

export const useSend = (text: string, numberOfCards: number[]) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  const send = (
    isMyPacks: boolean,
    currentPage: number,
    itemsCountForPage: number
  ) => {
    dispatch(
      cardsThunks.getCards({
        packName: text,
        min: numberOfCards[0],
        max: numberOfCards[1],
        user_id: isMyPacks ? userId : null,
        page: currentPage,
        pageCount: itemsCountForPage,
      })
    );
  };
  return { send };
};
