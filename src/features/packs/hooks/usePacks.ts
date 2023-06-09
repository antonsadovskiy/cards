import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/packs/packsSlice";
import { useEffect, useState } from "react";
import { selectorIsLoading } from "app/appSelectors";
import { selectorIsLoggedIn } from "features/auth/authSelectors";
import { selectorQueryParams } from "features/params/paramsSelectors";

export const usePacks = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectorIsLoading);
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);
  const params = useAppSelector(selectorQueryParams);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.addPack({
        cardsPack: { name, private: isPrivatePack },
      })
    )
      .unwrap()
      .then(() => {
        setOpen(false);
      });
  };

  useEffect(() => {
    dispatch(packsThunks.getPacks(params));
  }, [dispatch, params]);

  return {
    isLoading,
    isLoggedIn,
    open,
    handleOpen,
    handleClose,
    addPackHandler,
  };
};
