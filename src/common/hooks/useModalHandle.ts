import { packsThunks } from "features/packs/packsSlice";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { cardsThunks } from "features/cards/cardsSlice";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useModalHandle = (id: string = "") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.addPack({
        cardsPack: { name, private: isPrivatePack },
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
  const editPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.updatePack({
        cardsPack: { _id: id, name, private: isPrivatePack },
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
      });
  };
  const deletePackHandler = () => {
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
        navigate("/packs");
      });
  };
  const addCardHandler = (question: string, answer: string) => {
    if (id) {
      dispatch(
        cardsThunks.addCard({
          card: { cardsPack_id: id, question, answer },
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
  const editCardHandler = (question: string, answer: string) => {
    dispatch(
      cardsThunks.updateCard({
        card: {
          _id: id,
          question,
          answer,
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
