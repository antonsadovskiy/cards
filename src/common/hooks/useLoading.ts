import { useAppSelector } from "common/hooks/useAppSelector";

export const useLoading = () => {
  return useAppSelector<boolean>((state) => state.app.isLoading);
};
