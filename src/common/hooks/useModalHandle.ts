import { packsThunks } from "features/packs/packsSlice";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { cardsThunks } from "features/cards/cardsSlice";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "common/hooks/useAppSelector";
import { selectorPacksQueryParams } from "features/packsParams/packsParamsSelectors";
import { selectorCardsQueryParams } from "features/cardsParams/cardsParamsSelectors";

export const useModalHandle = (id: string = "") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const packsParams = useAppSelector(selectorPacksQueryParams);
  const cardsParams = useAppSelector(selectorCardsQueryParams);

  const addPackHandler = (
    name: string,
    isPrivatePack: boolean,
    deckCover?: string
  ) => {
    dispatch(
      packsThunks.addPack({
        cardsPack: { name, private: isPrivatePack, deckCover },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          packsParamsActions.setIsModalOpen({
            type: "closeAddModal",
            close: true,
          })
        );
        toast.success("Pack successfully added");
      });
  };
  const editPackHandler = (
    from: "cardsList" | "packsList",
    name: string,
    isPrivatePack: boolean,
    deckCover: string
  ) => {
    dispatch(
      packsThunks.updatePack({
        cardsPack: { _id: id, name, private: isPrivatePack, deckCover },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          packsParamsActions.setIsModalOpen({
            type: "closeEditModal",
            close: true,
          })
        );
        from === "packsList"
          ? dispatch(packsThunks.getPacks(packsParams))
          : dispatch(cardsThunks.getCards(cardsParams));
      });
  };
  const deletePackHandler = (from: "cardList" | "packList") => {
    dispatch(packsThunks.deletePack({ id }))
      .unwrap()
      .then(() => {
        dispatch(
          packsParamsActions.setIsModalOpen({
            type: "closeDeleteModal",
            close: true,
          })
        );
        toast.success("Pack successfully deleted");
        from === "packList"
          ? dispatch(packsThunks.getPacks(packsParams))
          : navigate("/packs");
      });
  };
  const addCardHandler = (
    question: string,
    answer: string,
    questionImg: string
  ) => {
    if (id) {
      dispatch(
        cardsThunks.addCard({
          card: {
            cardsPack_id: id,
            question,
            questionImg,
            answer,
          },
        })
      )
        .unwrap()
        .then(() => {
          dispatch(
            cardsParamsActions.setIsModalOpen({
              type: "closeAddModal",
              close: true,
            })
          );
          toast.success("Card successfully added");
        });
    }
  };
  const editCardHandler = (
    question: string,
    answer: string,
    questionImg: string
  ) => {
    dispatch(
      cardsThunks.updateCard({
        card: {
          _id: id,
          question,
          answer,
          questionImg,
        },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          cardsParamsActions.setIsModalOpen({
            type: "closeEditModal",
            close: true,
          })
        );
      });
  };
  const deleteCardHandler = () => {
    dispatch(cardsThunks.deleteCard({ id }))
      .unwrap()
      .then(() => {
        dispatch(
          cardsParamsActions.setIsModalOpen({
            type: "closeDeleteModal",
            close: true,
          })
        );
        toast.success("Card successfully deleted");
      });
  };

  return {
    addPackHandler,
    editPackHandler,
    deletePackHandler,
    addCardHandler,
    editCardHandler,
    deleteCardHandler,
  };
};
